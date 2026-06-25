import { Laptop, MoreHorizontal, ShieldCheck, ShoppingBag } from "lucide-react";

const InsightCategory = ({ categories }) => {
    const getIcon = (name) => {
        switch (name) {
            case 'Consumer Tech': return <Laptop size={16} className="text-blue-600" />;
            case 'Healthcare': return <ShieldCheck size={16} className="text-sky-600" />;
            case 'E-Commerce': return <ShoppingBag size={16} className="text-slate-500" />;
            default: return <MoreHorizontal size={16} className="text-slate-400" />;
        }
    };

    const getIconBg = (name) => {
        switch (name) {
            case 'Consumer Tech': return 'bg-blue-50';
            case 'Healthcare': return 'bg-sky-50';
            case 'E-Commerce': return 'bg-slate-100';
            default: return 'bg-slate-50';
        }
    };
    return (
        <div className="bg-white p-6 globalBorder globalCardRadius shadow-sm flex flex-col justify-between h-full hover:scale-105 duration-300">
            <div>
                <h3 className="text-sm font-bold text-slate-800 mb-5 tracking-tight">Top Categories</h3>
                <div className="space-y-4">
                    {categories.map((cat) => (
                        <div key={cat.id} className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${getIconBg(cat.name)}`}>
                                {getIcon(cat.name)}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1 text-xs font-bold text-slate-700">
                                    <span>{cat.name}</span>
                                    <span>{cat.percentage}%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-1.5 rounded-full">
                                    <div className={`${cat.color} h-1.5 rounded-full`} style={{ width: `${cat.percentage}%` }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="w-full bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold py-2.5 mt-6 globalButtonRadius text-xs transition-colors tracking-wide">
                Explore New Categories
            </button>
        </div>
    );
};

export default InsightCategory;