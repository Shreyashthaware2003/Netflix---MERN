import { User } from "../models/userModel.js";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";

// Login
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                message: "Invalid Data",
                success: false
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
                success: false
            });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password",
                success: false
            });
        }

        const tokenData = { id: user._id };
        const token = jwt.sign(tokenData, "tdytdgctsdutlitdgu", { expiresIn: "1d" });

        // Exclude sensitive data
        const { password: _, ...userData } = user.toObject();

        return res.status(200).cookie("token", token, { httpOnly: true }).json({
            message: `Welcome Back ${user.fullName}`,
            success: true,
            user: userData // Include user data in response
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error", success: false });
    }
};

// Logout
export const Logout = async (req, res) => {
    res.status(200).cookie("token", "", { expiresIn: new Date(Date.now()), httpOnly: true }).json({
        message: "User logged out successfully.",
        success: true
    })
}


// SignUp
export const Register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        if (!fullName || !email || !password) {
            return res.status(401).json({
                message: "Invalid Data",
                success: false
            })
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(401).json({
                message: "This email is already in use.",
                success: false
            })
        }

        const hashedPassword = await bcryptjs.hash(password, 16);

        await User.create({
            fullName,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}