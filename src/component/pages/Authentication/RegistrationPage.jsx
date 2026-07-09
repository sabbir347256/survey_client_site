import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import config from "../utils/envconfig";
import { showToast } from "../utils/toastmessage";
import { Toaster } from "sonner";

const RegistrationPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [captcha, setCaptcha] = useState({ text: "", code: "" });
    const navigate = useNavigate();

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const generateCaptcha = () => {
        const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let result = "";
        for (let i = 0; i < 6; i++) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        setCaptcha({ text: "", code: result });
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    const onSubmit = async (data) => {
        if (data.captchaInput !== captcha.code) {
            showToast.error("Invalid Captcha! Please try again.");
            return;
        }

        try {
            const submitData = {
                name: data.name,
                email: data.email,
                password: data.password,
                role : 'EMPLOYEE'
            };

            // const token = localStorage.getItem('token');
            const response = await axios.post(`${config.backendUrl}/user/create-employee`, submitData);
            console.log(response)
            if (response.data) {
                showToast.success(response.data.message);
                reset();
                generateCaptcha();
                setTimeout(() => {
                    navigate('/login');
                }, 1500);
            }
        } catch (error) {
            showToast.error(error.response?.data?.message || 'Something went wrong');
            generateCaptcha();
        }
    };
    return (
        <div className="min-h-screen w-full flex bg-[#f8fafc]">
            <Toaster position="top-right" reverseOrder={false} />

            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0066b2] to-[#00447a] p-12 flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="flex items-center gap-2.5 relative z-10">
                    <div className="w-9 h-9 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center text-white border border-white/20">
                        <svg className="w-5 h-5 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 22h20L12 2zm0 5l6.5 11.5h-13L12 7z" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">Web Earners</span>
                </div>

                <div className="my-auto max-w-xl relative z-10">
                    <h1 className="text-4xl font-extrabold text-white tracking-tight leading-none mb-4">
                        Join the SurveyPanel Community
                    </h1>
                    <p className="text-blue-100 text-base leading-relaxed mb-8">
                        Create your account today to start exploring premium surveys, managing your tasks efficiently, and tracking your real-time earnings. Your roadmap to smart earning begins here.
                    </p>

                    <div className="relative w-full aspect-video rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-4 shadow-2xl">
                        <div className="w-full h-full rounded-xl bg-[#0f172a] overflow-hidden border border-slate-700 relative flex items-center justify-center">
                            <div className="absolute top-0 left-0 right-0 h-6 bg-slate-800 border-b border-slate-700 flex items-center px-3 gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                            </div>
                            <svg className="w-16 h-16 text-slate-700 animate-pulse mt-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="text-xs text-blue-200/60 relative z-10">
                    &copy; 2026 Web Earners. All rights reserved.
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-16 overflow-y-auto">
                <div className="w-full max-w-[440px] my-auto">
                    <div className="flex flex-col items-center text-center gap-3 mb-8 lg:items-start lg:text-left">
                        <div className="w-12 h-12 bg-gradient-to-tr from-[#0091ff] to-[#0066b2] rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 lg:hidden">
                            <svg className="w-6 h-6 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 22h20L12 2zm0 5l6.5 11.5h-13L12 7z" />
                            </svg>
                        </div>
                        <div className="space-y-1">
                            <span className="text-3xl font-black tracking-tight text-[#111c24] block">Create Account</span>
                            <p className="text-sm font-medium text-gray-500">Get started with your free SurveyPanel profile</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-gray-600 tracking-wide uppercase">Full Name</label>
                            <input
                                type="text"
                                placeholder="write your full name"
                                {...register('name', { required: true })}
                                className={`w-full rounded-xl border ${errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#0066b2] focus:ring-[#0066b2]/20'} px-4 py-3 text-sm text-gray-900 bg-white outline-none focus:ring-4 transition-all duration-200 placeholder:text-gray-400`}
                            />
                            {errors.name && (
                                <span className="flex items-center gap-1 text-red-500 text-xs font-medium mt-1">
                                    Name field is required
                                </span>
                            )}
                        </div>

                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-gray-600 tracking-wide uppercase">Email Address</label>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                {...register('email', { required: true })}
                                className={`w-full rounded-xl border ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#0066b2] focus:ring-[#0066b2]/20'} px-4 py-3 text-sm text-gray-900 bg-white outline-none focus:ring-4 transition-all duration-200 placeholder:text-gray-400`}
                            />
                            {errors.email && (
                                <span className="flex items-center gap-1 text-red-500 text-xs font-medium mt-1">
                                    Email field is required
                                </span>
                            )}
                        </div>

                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-gray-600 tracking-wide uppercase">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    {...register('password', { required: true, minLength: 6 })}
                                    className={`w-full rounded-xl border ${errors.password ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#0066b2] focus:ring-[#0066b2]/20'} pl-4 pr-11 py-3 text-sm text-gray-900 bg-white outline-none focus:ring-4 transition-all duration-200 placeholder:text-gray-400`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.211 4.278M9.3 9.3a3 3 0 104.243 4.243m-4.242 0a3 3 0 004.243-4.242M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <span className="flex items-center gap-1 text-red-500 text-xs font-medium mt-1">
                                    Password must be at least 6 characters
                                </span>
                            )}
                        </div>

                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-gray-600 tracking-wide uppercase">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    {...register('confirmPassword', {
                                        required: true,
                                        validate: (value) => value === watch('password')
                                    })}
                                    className={`w-full rounded-xl border ${errors.confirmPassword ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#0066b2] focus:ring-[#0066b2]/20'} pl-4 pr-11 py-3 text-sm text-gray-900 bg-white outline-none focus:ring-4 transition-all duration-200 placeholder:text-gray-400`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showConfirmPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.211 4.278M9.3 9.3a3 3 0 104.243 4.243m-4.242 0a3 3 0 004.243-4.242M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <span className="flex items-center gap-1 text-red-500 text-xs font-medium mt-1">
                                    {errors.confirmPassword.type === 'validate' ? 'Passwords do not match' : 'Confirm password field is required'}
                                </span>
                            )}
                        </div>

                        <div className="space-y-2 pt-1">
                            <label className="block text-xs font-bold text-gray-600 tracking-wide uppercase">Security Verification</label>
                            <div className="flex items-center gap-3">
                                <div className="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 text-lg font-bold tracking-widest text-center py-2.5 rounded-xl border border-gray-300 select-none line-through decoration-wavy decoration-gray-400 italic">
                                    {captcha.code}
                                </div>
                                <button
                                    type="button"
                                    onClick={generateCaptcha}
                                    className="p-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-500 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                                    </svg>
                                </button>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter the code shown above"
                                {...register('captchaInput', { required: true })}
                                className={`w-full rounded-xl border ${errors.captchaInput ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#0066b2] focus:ring-[#0066b2]/20'} px-4 py-3 text-sm text-gray-900 bg-white outline-none focus:ring-4 transition-all duration-200 placeholder:text-gray-400`}
                            />
                            {errors.captchaInput && (
                                <span className="flex items-center gap-1 text-red-500 text-xs font-medium mt-1">
                                    Please type the security captcha code
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-gradient-to-r from-[#0066b2] to-[#005596] py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 hover:from-[#005596] hover:to-[#00447a] transition-all duration-200 active:scale-[0.98] mt-4"
                        >
                            Register Account
                        </button>

                        <div className="text-center mt-4">
                            <p className="text-sm text-gray-500">
                                Already have an account?{" "}
                                <NavLink to="/login" className="font-semibold text-[#0066b2] hover:underline">
                                    Sign In
                                </NavLink>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;