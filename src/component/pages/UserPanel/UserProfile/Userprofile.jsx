import { Camera, CheckCircle2, Mail, MapPin, Phone, Save, User } from "lucide-react";
import DynamicHeader from "../../DynamicComponents/DynamicHeader";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Userprofile = () => {
    const [saved, setSaved] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: 'Sabbir',
            lastName: 'Ahmmed',
            email: 'sabbir195323@gmail.com',
            phone: '01638670537',
            location: 'Mirpu DOHS,Dhaka,Bangladesh'
        }
    });

    const onSubmit = (data) => {
        console.log(data);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };
    return (
        <div className="bg-white globalCardRadius border border-slate-100 shadow-sm overflow-hidden p-6 md:p-8 space-y-8">
            <DynamicHeader mainHeader={'Profile Details'} subHeaderName={'Update personal operational data, contact endpoints, and profile metrics.'}></DynamicHeader>
            <div className="flex flex-col sm:flex-row items-center gap-6 pb-2">
                <div className="relative">
                    <div className="w-20 h-20 globalCardRadius bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xl border-4 border-white shadow-md">
                        JD
                    </div>
                    <button type="button" className="absolute -bottom-1 -right-1 p-2 bg-[#0284c7] hover:bg-[#0369a1] text-white globalButtonRadius shadow-md transition-transform active:scale-95">
                        <Camera className="w-3.5 h-3.5" />
                    </button>
                </div>
                <div className="text-center sm:text-left">
                    <h4 className="text-sm font-bold text-slate-800">Sabbir Ahmmed</h4>
                    <p className="text-xs text-slate-400 mt-1">PNG or JPG formats up to 2 Megabytes size limit.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">First Name</label>
                        <div className="relative">
                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                {...register("firstName", { required: true })}
                                className={`w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border globalButtonRadius text-sm font-medium text-slate-800 focus:outline-none focus:bg-white transition-colors ${errors.firstName ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 focus:border-sky-500'}`}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Last Name</label>
                        <div className="relative">
                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                {...register("lastName", { required: true })}
                                className={`w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border globalButtonRadius text-sm font-medium text-slate-800 focus:outline-none focus:bg-white transition-colors ${errors.lastName ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 focus:border-sky-500'}`}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="email"
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                className={`w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border globalButtonRadius text-sm font-medium text-slate-800 focus:outline-none focus:bg-white transition-colors ${errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 focus:border-sky-500'}`}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Phone System</label>
                        <div className="relative">
                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="tel"
                                {...register("phone")}
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 globalButtonRadius text-sm font-medium text-slate-800 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">HQ Workspace Location</label>
                        <div className="relative">
                            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                {...register("location")}
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 globalButtonRadius text-sm font-medium text-slate-800 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-green-600 text-sm font-medium h-5">
                        {saved && (
                            <>
                                <CheckCircle2 className="w-4 h-4" />
                                Profile details saved
                            </>
                        )}
                    </div>
                    <button type="submit" className="inline-flex items-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white px-5 py-2.5 globalButtonRadius font-medium text-sm transition-colors shadow-sm">
                        <Save className="w-4 h-4" />
                        Update Identity
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Userprofile;