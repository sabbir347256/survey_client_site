
const Underconstraction = () => {
    return (
        <div className="flex justify-center items-center min-h-screen p-4 bg-slate-50">
            <div className="w-full max-w-md bg-white shadow-sm border border-slate-100 rounded-2xl p-8 text-center flex flex-col items-center">
                <div className="text-6xl mb-6 animate-bounce">🚧</div>
                <h1 className="text-2xl font-bold text-slate-800 mb-3">
                    Site Under Construction
                </h1>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    Our website is currently undergoing scheduled maintenance. We will be back online shortly with exciting new features!
                </p>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-6">
                    <div className="bg-blue-600 w-2/3 h-full rounded-full animate-pulse"></div>
                </div>
                <p className="text-xs text-slate-400 font-medium">
                    We apologize for any inconvenience caused.
                </p>
            </div>
        </div>
    );
};

export default Underconstraction;