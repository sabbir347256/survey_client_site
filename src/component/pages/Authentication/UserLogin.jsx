import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { makeRequest } from "../utils/makerequest";
import config from "../utils/envconfig";
import { Toaster } from "sonner";
import { AuthProvider } from "../../AuthProvider/CreateContext";
import { useNavigate } from "react-router";

const UserLogin = () => {
    const { token, user } = useContext(AuthProvider);
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const res = await makeRequest("POST", `${config.backendUrl}/auth/login`, data);
        if (res && res.success === true) {
            localStorage.setItem('accessToken', res.data.accessToken);
            setTimeout(() => {
                navigate('/');
                window.location.reload();
            }, 1000);

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
                        Welcome Back to SurveyPanel
                    </h1>
                    <p className="text-blue-100 text-base leading-relaxed mb-8">
                        Log in to your account to check available surveys, manage your profile, and withdraw your accumulated earnings instantly. Your opinions shape the market.
                    </p>

                    <div className="relative w-full aspect-video rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-4 shadow-2xl">
                        <div className="w-full h-full rounded-xl bg-[#0f172a] overflow-hidden border border-slate-700 relative flex items-center justify-center">
                            <div className="absolute top-0 left-0 right-0 h-6 bg-slate-800 border-b border-slate-700 flex items-center px-3 gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                            </div>
                            <svg className="w-16 h-16 text-slate-700 animate-pulse mt-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="text-xs text-blue-200/60 relative z-10">
                    &copy; 2026 Web Earners. All rights reserved.
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-20">
                <div className="w-full max-w-[440px]">
                    <div className="flex flex-col items-center text-center gap-3 mb-8 lg:items-start lg:text-left">
                        <div className="w-12 h-12 bg-gradient-to-tr from-[#0091ff] to-[#0066b2] rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 lg:hidden">
                            <svg className="w-6 h-6 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 22h20L12 2zm0 5l6.5 11.5h-13L12 7z" />
                            </svg>
                        </div>
                        <div className="space-y-1">
                            <span className="text-3xl font-black tracking-tight text-[#111c24] block">Web Earners</span>
                            <p className="text-sm font-medium text-gray-500">Sign in to your SurveyPanel account</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-gray-600 tracking-wide uppercase">Email Address</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    {...register('email', { required: true })}
                                    className={`w-full rounded-xl border ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#0066b2] focus:ring-[#0066b2]/20'} px-4 py-3 text-sm text-gray-900 bg-white outline-none focus:ring-4 transition-all duration-200 placeholder:text-gray-400`}
                                />
                            </div>
                            {errors.email && (
                                <span className="flex items-center gap-1 text-red-500 text-xs font-medium mt-1">
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                    Email field is required
                                </span>
                            )}
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center">
                                <label className="block text-xs font-bold text-gray-600 tracking-wide uppercase">Password</label>
                                <a href="#" className="text-xs font-semibold text-[#0066b2] hover:underline">Forgot?</a>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    {...register('password', { required: true })}
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
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                    Password is required
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-gradient-to-r from-[#0066b2] to-[#005596] py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 hover:from-[#005596] hover:to-[#00447a] transition-all duration-200 active:scale-[0.98] mt-2"
                        >
                            Sign In to SurveyPanel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;