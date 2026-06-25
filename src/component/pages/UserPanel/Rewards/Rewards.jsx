import { SlidersHorizontal } from "lucide-react";
import HistoryDataTable from "./HistoryDataTable";
import RewardsCards from "./RewardsCards";

const Rewards = () => {
    const initialBalance = {
        points: "24,850",
        estimatedValue: "$248.50",
        lastRetrieved: "2 days ago",
        progress: 75,
        pointsNeeded: "5,150"
    };

    const rewardCards = [
        {
            id: 1,
            title: "PayPal Cashout",
            desc: "Transfer learning returns directly to your PayPal account.",
            pointsRange: "800 - 10,000 pts",
            valueRange: "$5 - $100",
            btnText: "Redeem Now",
            isSpecial: false,
            imageBg: "bg-slate-100"
        },
        {
            id: 2,
            title: "Amazon.com",
            desc: "The choice shopping flexibility. Delivered via email.",
            pointsRange: "1,000 - 20,000 pts",
            valueRange: "$10 - $200",
            btnText: "Redeem Now",
            isSpecial: false,
            imageBg: "bg-amber-50"
        },
        {
            id: 3,
            title: "Starbucks",
            desc: "Treat yourself to a coffee at almost any location.",
            pointsRange: "500 - 5,000 pts",
            valueRange: "$5 - $50",
            btnText: "Redeem Now",
            isSpecial: false,
            imageBg: "bg-emerald-50"
        },
        {
            id: 4,
            title: "Apple Services",
            desc: "Use for apps, music, storage, and more from Apple.",
            pointsRange: "2,500 - 10,000 pts",
            valueRange: "$25 - $100",
            btnText: "Redeem Now",
            isSpecial: false,
            imageBg: "bg-gray-100"
        },
        {
            id: 5,
            title: "Visa Virtual Card",
            desc: "A digital prepaid card for use anywhere Visa is accepted.",
            pointsRange: "500 - 20,000 pts",
            valueRange: "$5 - $200",
            btnText: "Redeem Now",
            isSpecial: false,
            imageBg: "bg-sky-50"
        },
        {
            id: 6,
            title: "Target",
            desc: "Shop in-store or online for everything you need.",
            pointsRange: "1,000 - 10,000 pts",
            valueRange: "$10 - $100",
            btnText: "Redeem Now",
            isSpecial: false,
            imageBg: "bg-rose-50"
        },
        {
            id: 7,
            title: "Charity Donation",
            desc: "Donate your earnings to a cause of your choice.",
            pointsRange: "100 + pts",
            valueRange: "any amount",
            btnText: "Donate Now",
            isSpecial: false,
            imageBg: "bg-blue-100"
        },
        {
            id: 8,
            title: "Double Points Pass",
            desc: "Earn 2x points on all surveys for the next 7 days.",
            pointsRange: "2,500 pts",
            valueRange: "Power-up",
            btnText: "Activate Now",
            isSpecial: true,
            imageBg: "bg-indigo-100"
        }
    ];

    const historyList = [
        {
            id: 1,
            reward: "PayPal Cashout",
            date: "Oct 24, 2023",
            status: "COMPLETE",
            statusColor: "text-emerald-600 bg-emerald-50",
            amount: "-$25.00"
        },
        {
            id: 2,
            reward: "Amazon.com Gift Card",
            date: "Oct 12, 2023",
            status: "COMPLETE",
            statusColor: "text-emerald-600 bg-emerald-50",
            amount: "-$10.00"
        },
        {
            id: 3,
            reward: "Starbucks e-Gift",
            date: "Sep 28, 2023",
            status: "PROCESSING",
            statusColor: "text-amber-600 bg-amber-50",
            amount: "-$5.00"
        }
    ];

    return (
        <div className="">
            <div className="globalBgColor text-white p-6 md:p-8 globalCardRadius flex flex-col md:flex-row justify-between items-center gap-6 mb-10 shadow-lg relative overflow-hidden">
                <div className="w-full md:w-auto text-center md:text-left">
                    <p className="text-white/70 text-xs font-semibold tracking-wider uppercase mb-1">Available Balance</p>
                    <div className="flex items-baseline justify-center md:justify-start gap-2 mb-4">
                        <h1 className="text-4xl font-bold">{initialBalance.points}</h1>
                        <span className="text-sm font-medium opacity-80">Points</span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                        <div className="bg-white/10 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-xl text-center">
                            <span className="block text-[10px] text-white/60 uppercase tracking-wider font-bold">Estimated Value</span>
                            <span className="text-sm font-bold">{initialBalance.estimatedValue}</span>
                        </div>
                        <div className="bg-white/10 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-xl text-center">
                            <span className="block text-[10px] text-white/60 uppercase tracking-wider font-bold">Last Retrieved</span>
                            <span className="text-sm font-bold">{initialBalance.lastRetrieved}</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-5 backdrop-blur-md p-5 rounded-2xl w-full md:w-80">
                    <div className="relative flex items-center justify-center w-24 h-24 flex-shrink-0">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                            <path className="text-white/10" strokeWidth="3" stroke="currentColor" fill="transparent" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-white" strokeWidth="3" strokeDasharray={`${initialBalance.progress}, 100`} strokeLinecap="round" stroke="currentColor" fill="transparent" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        </svg>
                        <div className="absolute text-sm font-semibold">{initialBalance.progress}%</div>
                    </div>
                    <div className="text-center">
                        <p className="text-xs font-bold leading-snug text-white/90">
                            {initialBalance.pointsNeeded} points until <br /> your next $50 reward
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex flex-wrap bg-slate-100 p-1 globalMediumRadius text-xs font-bold self-start border border-slate-200/50">
                    <button className="globalBgColor text-white px-4 py-2 globalMediumRadius shadow-sm">All Rewards</button>
                    <button className="text-gray-500 px-4 py-2 hover:text-gray-800 transition-colors">Gift Cards</button>
                    <button className="text-gray-500 px-4 py-2 hover:text-gray-800 transition-colors">Cashouts</button>
                    <button className="text-gray-500 px-4 py-2 hover:text-gray-800 transition-colors">Donations</button>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                    <span className="text-xs text-gray-400 font-semibold">Sort by:</span>
                    <div className="flex items-center gap-1 bg-white border border-gray-200 px-3 py-1.5 globalMediumRadius text-xs font-bold text-gray-700 cursor-pointer shadow-sm hover:bg-slate-50">
                        <span>Most Popular</span>
                        <SlidersHorizontal size={12} className="text-gray-400 ml-1" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                {rewardCards.map((card) => (
                    <RewardsCards key={card.id} card={card} />
                ))}
            </div>

            <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-slate-900 tracking-tight">Redemption History</h2>
                    <button className="text-xs font-bold globalTextColor hover:underline">View All Activity</button>
                </div>

                <HistoryDataTable history={historyList} />
            </div>
        </div>
    );
};

export default Rewards;