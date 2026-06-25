import { Award, CheckCircle, Clock, Users } from 'lucide-react';

const Cards = ({ survey }) => {
    const getUrgencyBadge = (urgency) => {
        switch (urgency) {
            case 'urgent':
                return { label: 'EXPIRING SOON', style: 'bg-red-50 text-red-600 border-red-100' };
            case 'high':
                return { label: 'HIGH VALUE', style: 'bg-amber-50 text-amber-700 border-amber-100' };
            default:
                return null;
        }
    };
    const badge = getUrgencyBadge(survey.urgency);
    return (
        <div className={`bg-white p-6 globalCardRadius border transition-all duration-300 hover:shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group relative overflow-hidden ${survey.isUrgent
                ? ' globalBorder'
                : 'border-gray-100 hover:border-gray-200'
            }`}>

            <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-bold text-gray-800 text-lg tracking-tight group-hover:text-slate-900 transition-colors">
                        {survey.title}
                    </h3>
                    {badge && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border tracking-wider ${badge.style}`}>
                            {badge.label}
                        </span>
                    )}
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-3xl">
                    {survey.desc}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-md">
                        <Clock size={14} className="text-gray-400" />
                        <span>{survey.duration}</span>
                    </div>

                    <div className="flex items-center gap-1.5 globalLightBg globalTextColor px-2.5 py-1 rounded-md font-semibold">
                        <Award size={14} className="globalTextColor" />
                        <span>{survey.reward}</span>
                    </div>

                    <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-md">
                        {survey?.slots?.toLowerCase().includes('slots') ? (
                            <Users size={14} className="text-gray-400" />
                        ) : (
                            <CheckCircle size={14} className="text-gray-400" />
                        )}
                        <span>{survey.slots}</span>
                    </div>
                </div>
            </div>

            <button className="w-full md:w-auto globalBgColor hover:opacity-90 text-white font-semibold px-7 py-2.5 globalButtonRadius text-sm transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center gap-1 self-stretch md:self-center group-hover:scale-[1.02]">
                Start
            </button>
        </div>
    );
};

export default Cards;