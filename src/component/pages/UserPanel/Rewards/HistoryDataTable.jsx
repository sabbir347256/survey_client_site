import { Coffee, Gift, Wallet } from "lucide-react";

const HistoryDataTable = ({ history }) => {
    const getRowIcon = (reward) => {
        if (reward.includes('PayPal')) return <Wallet size={16} className="text-cyan-700" />;
        if (reward.includes('Amazon')) return <Gift size={16} className="text-amber-600" />;
        return <Coffee size={16} className="text-emerald-700" />;
    };

    const getIconBg = (reward) => {
        if (reward.includes('PayPal')) return 'bg-cyan-50';
        if (reward.includes('Amazon')) return 'bg-amber-50';
        return 'bg-emerald-50';
    };
    return (
        <div className="overflow-x-auto w-full bg-white border globalBorder globalCardRadius p-2 shadow-sm">
            <table className="table w-full">
                <thead className="border-b">
                    <tr className="text-gray-400 text-[11px] uppercase tracking-wider font-bold">
                        <th className="text-start bg-slate-50/60 px-6 py-4 rounded-l-xl">Reward</th>
                        <th className="text-start bg-slate-50/60 px-6 py-4">Date</th>
                        <th className="text-start bg-slate-50/60 px-6 py-4">Status</th>
                        <th className="text-end bg-slate-50/60 px-6 py-4 rounded-r-xl">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50/40 text-sm transition-colors border-b ">
                            <td className="px-6 py-4 font-semibold text-slate-800 border-none">
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getIconBg(item.reward)}`}>
                                        {getRowIcon(item.reward)}
                                    </div>
                                    <span>{item.reward}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-gray-400 font-medium border-none">
                                {item.date}
                            </td>
                            <td className="px-6 py-4 border-none">
                                <span className={`text-[10px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full border ${item.status === 'COMPLETE'
                                        ? 'bg-emerald-50 text-emerald-600 border-emerald-100'
                                        : 'bg-blue-50 text-blue-600 border-blue-100'
                                    }`}>
                                    {item.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right font-black text-slate-800 text-base border-none">
                                {item.amount}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HistoryDataTable;