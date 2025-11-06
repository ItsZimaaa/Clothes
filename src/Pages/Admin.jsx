import admin from "../assets/AdminPage.jpg"
import admin2 from "../assets/AdminPage2.jpg"
import admin3 from "../assets/AdminPage3.jpg"
import Logo from '../Assets/Logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Admin() {
    const navigate = useNavigate();
    function handleBack() {
        navigate(-1);
    }

    const [showPassword, setShowPassword] = useState(false);


    const images = [admin, admin2, admin3];
    const [index, setIndex] = useState(0);

    function prev() {
        setIndex((i) => (i - 1 + images.length) % images.length);
        setIsPlaying(false);
    }
    function next() {
        setIndex((i) => (i + 1) % images.length);
        setIsPlaying(false);
    }


    return (
        <div className="h-screen flex items-center justify-center bg-linear-to-r from-[#232323] to-[#ffffff] p-6">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-screen h-[90vh] bg-white rounded-3xl shadow-lg overflow-hidden flex"
            >
                <div className="w-1/2 p-10 flex flex-col justify-between">
                    <div>
                        <Link to={"/"} className="mb-6">
                            <img src={Logo} alt="Shop.co" className="w-32" />
                        </Link>

                        <motion.h1
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl font-bold mb-6 mt-6 text-[#232323]"
                        >
                            Create Your Account
                        </motion.h1>

                        <form className="space-y-4">
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="relative"
                            >
                                <FaUser className="absolute left-3 top-3 text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#232323]"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="relative"
                            >
                                <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#232323]"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="relative"
                            >
                                <FaLock className="absolute left-3 top-3 text-gray-500" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#232323]"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-3 text-gray-500">
                                        <FaEye/>
                                </button>
                            </motion.div>

                            <motion.button
                                initial={{ y: 16, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                type="submit"
                                className="w-full bg-[#232323] text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                Sign Up
                            </motion.button>
                        </form>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-sm text-gray-600 text-center"
                    >
                        <p>Already have an account? <Link to="/login" className="text-[#232323] hover:underline">Login</Link></p>
                    </motion.div>
                </div>

                <div className="w-1/2 relative bg-gray-300 flex items-center justify-center">

                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                        <motion.img
                            key={index}
                            src={images[index]}
                            alt={`slide-${index}`}
                            initial={{ opacity: 0, scale: 1.02 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="object-cover w-full h-full rounded-lg"
                        />

                        <button
                            onClick={prev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/80 p-3 rounded-full shadow backdrop-blur-sm"
                            aria-label="Previous"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/80 p-3 rounded-full shadow backdrop-blur-sm"
                            aria-label="Next"
                        >
                            <FaChevronRight />
                        </button>

                    </div>
                </div>
            </motion.div>
        </div>
    );
}
