import { Clock } from "lucide-react";

const SurveyCard = ({ tag, image, title, duration, reward }) => {
    return (
        <div className="bg-white globalBorder globalMediumRadius overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="relative h-44 overflow-hidden bg-gray-100">
                <img src={image} alt={title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 globalCardRadius">
                    {tag}
                </span>
            </div>
            <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                <div>
                    <h3 className="font-bold text-gray-900 text-xl leading-snug line-clamp-2 min-h-[44px]">{title}</h3>
                    <div className="flex items-center justify-between gap-1.5 text-xs text-gray-700 font-medium mt-2">
                        <div className="flex items-center flex-row gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{duration}</span>
                        </div>
                        <span className="text-lg font-semibold text-[#0F4C81]">{reward}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-2">
                    <button className="globalLightBg globalTextColor hover:bg-blue-300 hover:text-black font-bold text-xs px-4 py-2.5 globalMediumRadius transition-colors w-full">
                        Start Survey
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SurveyCard;