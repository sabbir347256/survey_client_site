import { ArrowUpDown, Clock3, Gem, SlidersHorizontal, Sparkles } from "lucide-react";
import Cards from "./Cards";
import DynamicHeader from "../../DynamicComponents/DynamicHeader";

const MySurvey = () => {
    const categories = [
        { id: 1, type: "latest", label: "New Tasks", info: "Updated moments ago", count: "12", status: "Active" },
        { id: 2, type: "premium", label: "Top Tiers", info: "High payout surveys", count: "08", status: "Premium" },
        { id: 3, type: "urgent", label: "Closing", info: "Expiring bonus reward", count: "05", status: "Urgent" }
    ];

    const surveyList = [
        {
            id: 101,
            title: "Next-Gen Hardware Insights",
            urgency: "high",
            desc: "Share your perspective on upcoming portable computing devices and smart ecosystem rollouts.",
            duration: "15 min",
            reward: "750 PTS",
            slots: "42 slots remaining",
            isUrgent: false
        },
        {
            id: 102,
            title: "Local Delivery Ecosystems",
            urgency: "urgent",
            desc: "A brief review focused on subscription models and logistics packaging efficiency.",
            duration: "8 min",
            reward: "400 PTS",
            slots: "Bonus Active",
            isUrgent: true
        },
        {
            id: 103,
            title: "FinTech Security Assessment",
            urgency: "high",
            desc: "Evaluating multi-layered authentication workflows across retail banking platforms.",
            duration: "25 min",
            reward: "1,200 PTS",
            slots: "Verification Required",
            isUrgent: false
        },
        {
            id: 104,
            title: "Remote Workforce Logistics",
            urgency: "",
            desc: "Analyzing corporate migration trends toward co-living and distributed workspaces.",
            duration: "12 min",
            reward: "400 PTS",
            slots: "Regional Target",
            isUrgent: false
        }
    ];

    const getCategoryIcon = (title) => {
        switch (title) {
            case 'latest':
                return <Sparkles size={18} className="opacity-80" />;
            case 'premium':
                return <Gem size={18} className="opacity-80" />;
            case 'urgent':
                return <Clock3 size={18} className="opacity-80" />;
            default:
                return null;
        }
    };

    return (
        <div className="">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <DynamicHeader mainHeader="My Surveys" subHeaderName="Discover opportunities tailored to your profile." />

                <div className="flex bg-gray-100 p-1 globalMediumRadius text-sm self-start">
                    <button className="bg-white text-slate-800 font-medium px-4 py-1.5 globalMediumRadius shadow-sm">All Available</button>
                    <button className="text-gray-500 font-medium px-4 py-1.5">Completed</button>
                    <button className="text-gray-500 font-medium px-4 py-1.5">Saved</button>
                </div>
            </div>

            
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className={`${cat.bgColor} p-6 globalCardRadius globalBorder shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden group cursor-pointer`}
                    >
                        <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                        <div className="absolute -left-4 -top-4 w-16 h-16 bg-black/5 rounded-full blur-md" />

                        <div className="flex justify-between items-start relative z-10">
                            <div>
                                <h2 className="font-bold text-xl tracking-wide mb-1 opacity-95">{cat.label}</h2>
                                <p className="text-xs font-medium opacity-75 leading-relaxed max-w-[85%]">{cat.info}</p>
                            </div>
                            <div className="p-2.5 bg-white/15 rounded-xl backdrop-blur-md border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300">
                                {getCategoryIcon(cat.type)}
                            </div>
                        </div>

                        <div className="flex items-end justify-between relative z-10 mt-4">
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-extrabold tracking-tight">{cat.count}</span>
                            </div>
                            <span className="text-[11px] font-bold tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 shadow-sm">
                                {cat.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-slate-900">All Opportunities</h2>
                    <div className="flex gap-2">
                        <button className="p-2 bg-white globalBorder globalMediumRadius text-gray-500 hover:bg-gray-50">
                            <SlidersHorizontal size={16} />
                        </button>
                        <button className="p-2 bg-white globalBorder globalMediumRadius text-gray-500 hover:bg-gray-50">
                            <ArrowUpDown size={16} />
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    {surveyList.map((survey) => (
                        <Cards key={survey.id} survey={survey} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MySurvey;