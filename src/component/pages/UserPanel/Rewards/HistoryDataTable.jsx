const HistoryDataTable = ({ history }) => {
    return (
        <div className="bg-white border border-gray-100 globalCardRadius overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm text-gray-500">
                    <thead className="bg-slate-50 text-[11px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4">Reward</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {history.map((item) => (
                            <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-6 py-4.5 font-semibold text-gray-800">{item.reward}</td>
                                <td className="px-6 py-4.5 text-gray-400">{item.date}</td>
                                <td className="px-6 py-4.5">
                                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border border-current/10 ${item.statusColor}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4.5 text-right font-bold text-gray-900">{item.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HistoryDataTable;