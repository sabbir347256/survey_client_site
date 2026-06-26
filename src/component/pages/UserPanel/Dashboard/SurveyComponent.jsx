import config from "../../utils/envconfig";
import lootwal from '../../../../images/lootwall.jpeg';

const SurveyComponent = () => {
  const apiKey = config.VIT_SURVEY_API_KEY;
  const userId = "6a3e51e0b5c05e31aaf44884";
  const surveyUrl = `https://www.lootwalls.com/wall?apiKey=${apiKey}&userId=${userId}`;

  return (
    <div className="w-full max-w-md mx-auto my-6">
      <div className="card bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
        <div>
          <img src={lootwal} alt="Lootwalls" />
        </div>

        <div className="card-body p-6 bg-white">
          <h3 className="card-title text-lg font-bold text-gray-800">Complete Surveys & Earn Rewards</h3>
          <p className="text-gray-500 text-sm mt-1">
            Share your opinions on simple topics and instantly stack points or rewards directly into your wallet.
          </p>

          <div className="flex items-center gap-2 mt-3 text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-2 rounded-lg w-fit">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            Surveys Available Now
          </div>

          <div className="card-actions justify-end mt-6">
            <a
              href={surveyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold border-none rounded-xl tracking-wide shadow-lg shadow-indigo-200 py-3 text-center block transition-all"
            >
              Start Earning 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyComponent;