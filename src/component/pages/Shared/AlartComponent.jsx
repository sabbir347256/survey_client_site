import { ArrowRight, Globe, ShieldAlert } from "lucide-react";

const AlartComponent = () => {
    return (
        <div className="min-h-screen flex items-center justify-center  p-4">
            <div className="relative w-full max-w-xl bg-slate-900 border border-red-500/30 rounded-2xl p-6 md:p-8 shadow-2xl shadow-red-950/20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse" />

                <div className="flex flex-col items-center text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 animate-bounce">
                        <ShieldAlert size={36} />
                    </div>

                    <div className="space-y-4 w-full">
                        <h1 className="text-2xl md:text-3xl font-extrabold text-red-500 tracking-wide uppercase">
                            Access Denied
                        </h1>
                        <div className="h-[1px] w-1/3 bg-slate-800 mx-auto" />
                    </div>

                    <div className="space-y-6 text-slate-300">
                        <p className="text-lg md:text-xl font-medium leading-relaxed text-slate-100">
                            এই প্রতিষ্ঠানটি প্রতারণা (বাটপারি) করার জন্য তাদের ওয়েবসাইটটি বন্ধ করে দেওয়া হল।
                        </p>

                        <p className="text-base md:text-lg leading-relaxed text-slate-400 font-light italic">
                            "This organization's website has been suspended due to fraudulent activities."
                        </p>
                    </div>

                    <div className="w-full pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                        <div className="flex items-center gap-2">
                            <Globe size={14} className="text-red-500/60" />
                            <span>Status: Permanently Terminated</span>
                        </div>
                        <div className="flex items-center gap-1 hover:text-slate-400 transition-colors cursor-pointer">
                            <span>Security Advisory</span>
                            <ArrowRight size={12} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlartComponent;