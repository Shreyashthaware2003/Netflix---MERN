import React, { useState } from 'react';
import '../App.css'; // Custom CSS for the spinner
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import { API_END_POINT } from '../utils/constant';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';

function Login() {
    const [isLogin, setIsLogin] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getInputdata = async (e) => {
        e.preventDefault();
        setLoading(true);

        const user = isLogin
            ? { email, password }
            : { fullName, email, password };

        const endpoint = isLogin ? '/login' : '/register';

        try {
            const res = await axios.post(`${API_END_POINT}${endpoint}`, user);
            setLoading(false);
            console.log('Backend response:', res.data);
            if (res.data.success) {
                toast.success(res.data.message);

                // Navigate based on the action
                if (isLogin) {
                    dispatch(setUser(res.data.user))
                    navigate('/home'); // Replace with your target page after login
                } else {
                    setIsLogin(true); // Redirect to login after registration
                }
            }

        } catch (error) {
            setLoading(false);
            const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
            toast.error(errorMessage);
        }

        setFullName('');
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <Navbar />
            <div className="relative w-full h-screen">
                <img
                    src="/netflix-bg.jpg"
                    alt="Netflix Background"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white px-4">
                    <form onSubmit={getInputdata} className="flex flex-col bg-[#000000b3] py-8 px-10 max-w-[400px] rounded-lg">
                        <h1 className="text-4xl font-bold py-4">{isLogin ? 'Sign In' : 'Sign Up'}</h1>
                        <div className="flex flex-col gap-4">
                            {!isLogin && (
                                <input
                                    value={fullName}
                                    type="text"
                                    className="py-3 px-4 bg-transparent border border-gray-400 rounded"
                                    placeholder="Full Name"
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            )}
                            <input
                                value={email}
                                type="email"
                                className="py-3 px-4 bg-transparent border border-gray-400 rounded"
                                placeholder="Email or mobile number"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                value={password}
                                type="password"
                                className="py-3 px-4 bg-transparent border border-gray-400 rounded"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                disabled={loading}
                                className="w-full bg-[#e50914] hover:bg-red-700 transition duration-300 py-2 rounded font-semibold"
                            >
                                {loading ? (
                                    <div className="flex justify-center items-center">
                                        <div className="circle-loader"></div>
                                    </div>
                                ) : (
                                    <span>{isLogin ? 'Sign In' : 'Sign Up'}</span>
                                )}
                            </button>

                        </div>
                        <div className="py-6 flex flex-col items-center gap-4 text-center">
                            <div className="flex flex-row gap-1 text-sm">
                                <span className="text-gray-400">
                                    {isLogin
                                        ? 'New to Netflix?'
                                        : 'Already have an account?'}
                                </span>
                                <span
                                    className="text-[#e50914] cursor-pointer font-semibold hover:underline"
                                    onClick={() => setIsLogin(!isLogin)}
                                >
                                    {isLogin ? 'Sign Up now.' : 'Sign In now.'}
                                </span>
                            </div>
                            <p className="text-xs text-gray-400">
                                This page is protected by Google reCAPTCHA to ensure you're not a bot.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
