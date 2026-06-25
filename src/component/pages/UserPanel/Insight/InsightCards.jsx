import { BarChart3, CheckCircle2, Clock, TrendingUp } from "lucide-react";

const InsightCards = ({ stat }) => {

    const getIcon = () => {
        switch (stat.type) {
            case 'quality': return <CheckCircle2 size={16} className="text-cyan-700" />;
            case 'progress': return <BarChart3 size={16} className="text-slate-500" />;
            case 'earnings': return <TrendingUp size={16} className="text-blue-600" />;
            case 'time': return <Clock size={16} className="text-slate-600" />;
            default: return null;
        }
    };

    const getIconBg = () => {
        switch (stat.type) {
            case 'quality': return 'bg-cyan-50';
            case 'earnings': return 'bg-blue-50';
            default: return 'bg-slate-100';
        }
    };

    return (
        <div className="bg-white p-5 globalBorder globalCardRadius shadow-lg hover:scale-105 duration-300 flex flex-col justify-between min-h-[180px]">
            <div>
                <div className="flex justify-between items-start mb-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getIconBg()}`}>
                        {getIcon()}
                    </div>
                    {stat.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-100">
                            {stat.badge}
                        </span>
                    )}
                </div>

                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{stat.title}</h3>
                <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-slate-800 tracking-tight">{stat.value}</span>
                    {stat.subValue && !stat.type.includes('time') && (
                        <span className={`text-xs font-bold ${stat.type === 'quality' ? 'globalTextColor' : 'text-slate-500'}`}>
                            {stat.subValue}
                        </span>
                    )}
                </div>
            </div>

            <div className="mt-4">
                {stat.type === 'progress' && (
                    <div className="w-full bg-slate-100 h-1.5 rounded-full mb-2">
                        <div className="globalBgColor h-1.5 rounded-full" style={{ width: `${stat.percentage}%` }} />
                    </div>
                )}
                {stat.desc && <p className="text-xs text-gray-400 leading-relaxed font-medium">{stat.desc}</p>}
                {stat.type === 'time' && <p className="text-xs text-gray-400 font-medium">{stat.subValue}</p>}
                {stat.type === 'earnings' && (
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                        <TrendingUp size={14} className="text-blue-500" />
                        <span>{stat.subValue}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InsightCards;