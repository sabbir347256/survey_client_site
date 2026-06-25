import { Coffee, Gift, Globe, Heart, ShieldAlert, Smartphone, Wallet, Zap } from "lucide-react";

const RewardsCards = ({ card }) => {

    const getIcon = (title) => {
        switch (title) {
            case 'PayPal Cashout': return <Wallet className="text-slate-600" size={24} />;
            case 'Amazon.com': return <Gift className="text-amber-600" size={24} />;
            case 'Starbucks': return <Coffee className="text-emerald-700" size={24} />;
            case 'Apple Services': return <Smartphone className="text-gray-700" size={24} />;
            case 'Visa Virtual Card': return <ShieldAlert className="text-sky-600" size={24} />;
            case 'Target': return <Globe className="text-rose-600" size={24} />;
            case 'Charity Donation': return <Heart className="text-blue-600" size={24} />;
            case 'Double Points Pass': return <Zap className="text-indigo-600" size={24} />;
            default: return <Gift size={24} />;
        }
    };

    return (
       <div className={`p-5 border border-gray-100 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-md ${card.isSpecial ? 'bg-indigo-50/40 globalCardRadius border-indigo-100' : 'bg-white globalCardRadius'}`}>
      <div>
        <div className={`w-full h-32 rounded-xl flex items-center justify-center mb-4 ${card.imageBg}`}>
          <div className="p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
            {getIcon(card.title)}
          </div>
        </div>
        
        <h3 className="font-bold text-gray-800 text-base mb-1">{card.title}</h3>
        <p className="text-gray-400 text-xs leading-relaxed mb-4 min-h-[32px]">{card.desc}</p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs font-semibold mb-4 bg-gray-50/70 p-2.5 rounded-lg">
          <span className="globalTextColor">{card.pointsRange}</span>
          <span className="text-gray-400">{card.valueRange}</span>
        </div>

        {card.isSpecial ? (
          <button className="w-full globalBgColor hover:opacity-90 text-white font-semibold py-2.5 globalButtonRadius text-sm transition-all shadow-sm">
            {card.btnText}
          </button>
        ) : (
          <button className="w-full bg-slate-50 border border-slate-200 text-slate-700 font-semibold py-2.5 globalButtonRadius text-sm hover:bg-slate-100 transition-all">
            {card.btnText}
          </button>
        )}
      </div>
    </div>
    );
};

export default RewardsCards;