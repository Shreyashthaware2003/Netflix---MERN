import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Login() {
    const [isLogin, setIsLogin] = useState(false);
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const getInputdata = (e) => {
        e.preventDefault();
        console.log(fullname, email, password);
        setFullname('');
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <Navbar />
            <div className="relative w-full h-screen">
                {/* Background image */}
                <img
                    src="/netflix-bg.jpg"
                    alt="Netflix Background"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                {/* Black overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
                {/* Content over the black layer */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white px-4">
                    <form onSubmit={getInputdata} className="flex flex-col bg-[#000000b3] py-8 px-10 max-w-[400px] rounded-lg">
                        <h1 className="text-4xl font-bold py-4">{isLogin ? 'Sign In' : 'Sign Up'}</h1>
                        <div className="flex flex-col gap-4">
                            {!isLogin && (
                                <input
                                    value={fullname}
                                    type="text"
                                    className="py-3 px-4 bg-transparent border border-gray-400 rounded"
                                    placeholder="Full Name"
                                    onChange={(e) => setFullname(e.target.value)}
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
                            <button className="w-full bg-[#e50914] hover:bg-red-700 transition duration-300 py-2 rounded font-semibold">
                                {isLogin ? 'Sign In' : 'Sign Up'}
                            </button>
                        </div>
                        <div className="py-6 flex flex-col items-center gap-4 text-center">
                            <div className="flex flex-row gap-1 text-sm">
                                <span className="text-gray-400">
                                    {isLogin
                                        ? "New to Netflix?"
                                        : "Already have an account?"}
                                </span>
                                <span
                                    className="text-[#e50914] cursor-pointer font-semibold hover:underline"
                                    onClick={() => setIsLogin(!isLogin)}
                                >
                                    {isLogin ? "Sign Up now." : "Sign In now."}
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
