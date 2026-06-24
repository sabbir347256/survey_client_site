import {  Award, CheckCircle2, Trophy, Wallet } from "lucide-react";
import SurveyCard from "../surveyCards/SurveyCard";

const Dashboard = () => {
    const name = "Sabbir";
    const surveyCount = 12;
    const balance = "$4,850";
    const points = "~38,500 pts";
    const target = "Amazon $50 Gift Card";
    const progress = 85;
    const remaining = "$7.50";
    const currentStreak = "7-day";
    const multiplier = "1.5x";
    const activeDays = ["M", "T", "W", "T", "F"];
    const inactiveDays = ["S", "S"];
    const profilePercentage = 75;
    const sector = "medical sector";

    const recommendedSurveys = [
        {
            id: 1,
            tag: "Tech & Innovation",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400",
            title: "Future of AI in Daily Workflows",
            duration: "12 mins",
            reward: "$15.00"
        },
        {
            id: 2,
            tag: "Lifestyle",
            image: "https://penntoday.upenn.edu/sites/default/files/2023-03/survey-research-teaser.jpg",
            title: "Urban Wellness & Habits 2024",
            duration: "8 mins",
            reward: "$8.50"
        }
        ,
        {
            id: 3,
            tag: "Finance",
            image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=400",
            title: "Crypto Adoption & Security Insights",
            duration: "20 mins",
            reward: "$26.00"
        }
        ,
        {
            id: 3,
            tag: "Finance",
            image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=400",
            title: "Crypto Adoption & Security Insights",
            duration: "20 mins",
            reward: "$26.00"
        }
    ];

    const activities = [
        { id: 1, type: "survey", title: "Consumer Trends Survey", date: "Completed • Oct 24, 2023", amount: "+$12.50", isPositive: true },
        { id: 2, type: "withdrawal", title: "Withdrawal to PayPal", date: "Success • Oct 22, 2023", amount: "-$50.00", isPositive: false },
        { id: 3, type: "bonus", title: "Weekly Bonus Achieved", date: "Automatic • Oct 21, 2023", amount: "+$5.00", isPositive: true }
    ];

    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (profilePercentage / 100) * circumference;

    const getActivityIcon = (type) => {
        if (type === "survey") return <CheckCircle2 className="w-5 h-5 text-blue-500" />;
        if (type === "withdrawal") return <Wallet className="w-5 h-5 text-red-500" />;
        return <Trophy className="w-5 h-5 text-amber-500" />;
    };

    const getActivityBg = (type) => {
        if (type === "survey") return "bg-blue-50";
        if (type === "withdrawal") return "bg-red-50";
        return "bg-amber-50";
    };
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-2 pt-4">
                    <h1 className="text-3xl font-extrabold text-[#0F4C81] tracking-tight">Welcome back, {name}!</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        You're doing great! You have <span className="font-semibold text-gray-700">{surveyCount} new surveys</span> matching your profile today.
                    </p>
                </div>
                <div className="bg-[#0b6fa2] globalButtonRadius p-6 text-white shadow-sm relative overflow-hidden">
                    <div className="flex flex-col justify-between h-full space-y-4">
                        <div>
                            <p className="text-[11px] uppercase tracking-wider text-blue-100 font-semibold">Current Balance</p>
                            <p className="text-4xl font-bold mt-1 tracking-tight">{balance}</p>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-white/10">
                            <span className="text-xs text-blue-100 font-medium">{points}</span>
                            <Wallet className="w-5 h-5 text-blue-200/60" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white globalBorder globalButtonRadius p-5 shadow-sm flex flex-col justify-between h-full min-h-[160px]">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Next Goal</span>
                        <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-0.5 globalCardRadius">{progress}%</span>
                    </div>
                    <div className="my-3">
                        <p className="text-sm font-bold text-gray-800">{target}</p>
                        <div className="w-full bg-gray-100 h-2 globalCardRadius mt-2 overflow-hidden">
                            <div className="bg-blue-500 h-full globalCardRadius transition-all duration-300" style={{ width: `${progress}%` }} />
                        </div>
                    </div>
                    <p className="text-xs text-gray-400 font-medium">Only {remaining} more to reach your reward!</p>
                </div>

                <div className="bg-white globalBorder globalButtonRadius p-5 shadow-sm flex flex-col justify-between h-full min-h-[160px] md:col-span-2">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Daily Streak</span>
                            <p className="text-xs text-gray-500 mt-1 max-w-md">
                                Complete one more survey today to maintain your {currentStreak} streak and earn a {multiplier} multiplier.
                            </p>
                        </div>
                        <div className="p-2 bg-blue-50 globalButtonRadius text-blue-500">
                            <Award className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                        {activeDays.map((day, i) => (
                            <div key={`active-${i}`} className="w-8 h-8 globalMediumRadius bg-blue-500 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                                {day}
                            </div>
                        ))}
                        {inactiveDays.map((day, i) => (
                            <div key={`inactive-${i}`} className="w-8 h-8 globalMediumRadius bg-blue-50 border border-blue-100 text-blue-400 font-bold text-xs flex items-center justify-center">
                                {day}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">Recommended Surveys</h2>
                    <button className="text-sm font-semibold globalTextColor hover:underline">View All &gt;</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {recommendedSurveys.map((survey) => (
                        <SurveyCard key={survey.id} {...survey} />
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white globalBorder globalButtonRadius p-5 shadow-sm h-full flex flex-col justify-between lg:col-span-2">
                    <div>
                        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Recent Activity</h2>
                        <div className="divide-y divide-gray-50">
                            {activities.map((activity) => (
                                <div key={activity.id} className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2.5 globalButtonRadius globalLightBg ${getActivityBg(activity.type)}`}>
                                            {getActivityIcon(activity.type)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-800">{activity.title}</p>
                                            <p className="text-xs text-gray-400 font-medium mt-0.5">{activity.date}</p>
                                        </div>
                                    </div>
                                    <span className={`text-sm font-bold ${activity.isPositive ? "globalTextColor" : "text-red-800"}`}>
                                        {activity.amount}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="globalBorder globalButtonRadius globalLightBg p-6 shadow-sm flex flex-col items-center text-center justify-between h-full min-h-[250px]">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="48" cy="48" r={radius} stroke="#e2e8f0" strokeWidth="8" fill="transparent" />
                            <circle cx="48" cy="48" r={radius} stroke="#0F4C81" strokeWidth="8" fill="transparent" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" />
                        </svg>
                        <span className="absolute text-lg font-bold text-gray-800">{profilePercentage}%</span>
                    </div>
                    <div className="space-y-4 w-full">
                        <div>
                            <h3 className="text-sm font-bold text-gray-800">Profile Strength</h3>
                            <p className="text-xs text-gray-400 font-medium mt-1 px-4">
                                Complete your profile to unlock high-paying surveys in the {sector}.
                            </p>
                        </div>
                        <button className="w-full globalTextColor hover:bg-gray-50 text-blue-600 font-bold text-xs py-3 globalButtonRadius border border-[#0F4C81] transition-colors shadow-sm">
                            Complete Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;