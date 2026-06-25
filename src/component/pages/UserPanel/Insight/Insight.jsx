import { Download } from "lucide-react";
import InsightCards from "./InsightCards";
import InsightCategory from "./InsightCategory";
import DynamicHeader from "../../DynamicComponents/DynamicHeader";

const Insight = () => {
    const performanceStats = [
        {
            id: 1,
            type: "quality",
            title: "Quality Score",
            value: "98%",
            subValue: "+1.2% this month",
            badge: "Top 2%",
            desc: "Your attention to detail is excellent. Maintain this to unlock premium surveys."
        },
        {
            id: 2,
            type: "progress",
            title: "Surveys Completed",
            value: "142",
            percentage: 75,
            desc: "75% of monthly goal"
        },
        {
            id: 3,
            type: "earnings",
            title: "Total Earnings",
            value: "4,280 pts",
            subValue: "Approx. $42.80 USD",
            desc: ""
        },
        {
            id: 4,
            type: "time",
            title: "Avg. Response Time",
            value: "12.4 min",
            subValue: "Optimal speed maintained",
            desc: ""
        }
    ];

    const topCategories = [
        { id: 1, name: "Consumer Tech", percentage: 42, color: "bg-blue-500" },
        { id: 2, name: "Healthcare", percentage: 28, color: "bg-sky-500" },
        { id: 3, name: "E-Commerce", percentage: 18, color: "bg-slate-400" },
        { id: 4, name: "Other", percentage: 12, color: "bg-slate-300" }
    ];

    return (
        <div className="">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                    <DynamicHeader mainHeader={'Performance Insights'} subHeaderName={'Track your participation trends, quality scores and earning potential.'}></DynamicHeader>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                    <div className="bg-slate-100 p-1 globalMediumRadius flex text-xs font-bold border border-slate-200/40">
                        <button className="bg-white text-slate-700 px-4 py-1.5 globalMediumRadius shadow-sm">Last 30 Days</button>
                    </div>
                    <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-4 py-2 globalMediumRadius text-xs flex items-center gap-1.5 transition-colors shadow-sm">
                        <Download size={14} />
                        <span>Export Report</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {performanceStats.map((stat) => (
                    <InsightCards key={stat.id} stat={stat} />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 globalBorder hover:scale-105 duration-300 globalCardRadius shadow-sm flex flex-col justify-between min-h-[300px]">
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-sm font-bold text-slate-800 tracking-tight">Points Earned Trend</h3>
                            <div className="flex items-center gap-4 text-xs font-bold">
                                <div className="flex items-center gap-1.5 text-slate-600">
                                    <span className="w-2.5 h-2.5 rounded-full globalBgColor" />
                                    <span>Earnings</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-slate-400">
                                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                                    <span>Baseline</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-44 w-full flex items-end relative px-2">
                            <svg className="w-full h-full absolute inset-0 pt-4" viewBox="0 0 400 100" preserveAspectRatio="none">
                                <path
                                    d="M 0 85 Q 100 65 200 75 T 400 20"
                                    fill="none"
                                    stroke="#0F4C81"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M 0 85 Q 100 65 200 75 T 400 20 L 400 100 L 0 100 Z"
                                    fill="url(#gradient)"
                                    opacity="0.06"
                                />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#0F4C81" />
                                        <stop offset="100%" stopColor="#FFFFFF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <div className="flex justify-between text-[11px] font-bold text-gray-400 px-1 border-t border-gray-50 pt-3">
                        <span>Week 1</span>
                        <span>Week 2</span>
                        <span>Week 3</span>
                        <span>Week 4</span>
                    </div>
                </div>

                <div>
                    <InsightCategory categories={topCategories} />
                </div>
            </div>
        </div>
    );
};

export default Insight;