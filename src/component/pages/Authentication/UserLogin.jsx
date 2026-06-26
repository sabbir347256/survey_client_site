import { useState } from "react";
import { useForm } from "react-hook-form";
import { makeRequest } from "../utils/makerequest";
import config from "../utils/envconfig";

const UserLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const res = await makeRequest("POST", `${config.backendUrl}/user/respondent-login`, data);
        if (res) {
            localStorage.setItem('token', res.token);
        }
    };
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">
            <div className="hidden lg:flex flex-col justify-between bg-[#3ca4c4] p-16 text-white relative overflow-hidden">

                <div className="my-auto relative z-10 flex flex-col items-start gap-6">
                    <h1 className="text-5xl font-bold leading-tight max-w-md">
                        Your insights, beautifully rewarded.
                    </h1>
                    <p className="text-base opacity-90 max-w-sm leading-relaxed">
                        Join thousands of respondents shaping the future of global brands through meaningful feedback.
                    </p>

                    <div className="w-full max-w-sm mt-4">
                        <img
                            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop"
                            alt="Laptop Display"
                            className="w-full h-auto rounded-xl shadow-2xl object-cover transform -rotate-2 border border-white/20"
                        />
                    </div>
                </div>

                
            </div>

            <div className="flex flex-col justify-center items-center px-6 sm:px-16 lg:px-24 py-12 bg-gray-50/30">
                <div className="w-full max-w-[420px] space-y-8">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#0091ff] rounded flex items-center justify-center text-white">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 22h20L12 2zm0 5l6.5 11.5h-13L12 7z" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-[#111c24]">Web Earners</span>
                    </div>

                    <div className="relative flex py-2 items-center">
                        <div className="flex-grow border-t border-gray-200"></div>
                        <div className="flex-grow border-t border-gray-200"></div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address</label>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                {...register('email', { required: true })}
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 bg-white outline-none focus:border-[#0066b2] focus:ring-1 focus:ring-[#0066b2] transition-all"
                            />
                            {errors.email && <span className="text-red-500 text-xs mt-1 block">Email field is required</span>}
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1.5">
                                <label className="text-xs font-semibold text-gray-700">Password</label>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    {...register('password', { required: true })}
                                    className="w-full rounded-xl border border-gray-200 pl-4 pr-10 py-3 text-sm text-gray-900 bg-white outline-none focus:border-[#0066b2] focus:ring-1 focus:ring-[#0066b2] transition-all"
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-400 cursor-pointer select-none"
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
                                </span>
                            </div>
                            {errors.password && <span className="text-red-500 text-xs mt-1 block">Password is required</span>}
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-[#0066b2] py-3.5 text-sm font-semibold text-white shadow-md hover:bg-[#005596] transition-all"
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