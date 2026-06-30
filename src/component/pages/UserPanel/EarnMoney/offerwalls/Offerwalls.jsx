import { useContext, useEffect, useState } from "react";
import config from "../../../utils/envconfig";
import { useCustomQuery } from "../../../utils/useCustomQuery";
import { AuthProvider } from "../../../../AuthProvider/CreateContext";
import axios from "axios";

const Offerwalls = () => {
    const { token } = useContext(AuthProvider);

    // const data = [
    //     {
    //         id: "lootwalls",
    //         name: "Lootwalls",
    //         description: "Share your opinions on simple topics and instantly stack points.",
    //         url: `https://www.lootwalls.com/wall?apiKey=HDkDw7TgMooqRJVyiSqdZg3aDXeCFOg3&userId=6a3e51e0b5c05e31aaf44884`
    //     },

    // ];

    const { data, isLoading, isError, error } = useCustomQuery({
        url: `${config.backendUrl}/survey/get-all-surveys`,
        queryKey: ["surveyProviders"],
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });


    const [surveys, setSurveys] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchLiveSurveys();
    }, []);

    const fetchLiveSurveys = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`${config.backendUrl}/zampila/surveys/sync`);
            if (res.data.success) {
                setSurveys(res.data.surveys?.data);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    console.log(surveys)

    const handleTakeSurvey = async (surveyId) => {
        try {
            const res = await axios.post('/api/surveys/start', { surveyId, employeeId });
            if (res.data.success && res.data.entryLink) {
                window.location.href = res.data.entryLink;
            }
        } catch (err) {
            alert('Failed to generate entry link');
        }
    };

    if (loading) return <div>Loading available tasks...</div>;


    if (isLoading) {
        return <div className="text-center my-10 font-medium">Loading Available Surveys...</div>;
    }

    if (isError && error?.response?.status === 403) {
        return (
            <div className="text-center text-red-500 font-bold my-10 p-5 border border-red-200 bg-red-50 rounded-xl max-w-md mx-auto">
                Sorry, these survey offers are only available for users in the US and UK.
            </div>
        );
    }

    if (isError || !data?.success) {
        return <div className="text-center my-10 text-red-500 font-medium">Failed to load surveys.</div>;
    }

    const providers = data?.providers || [];
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Available Survey Walls</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {providers.map((provider) => (
                    <div key={provider.id} className="card bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                        <div>
                            {/* <img src={imageMap[provider.id]} alt={provider.name} className="w-full h-48 object-cover" /> */}
                        </div>

                        <div className="card-body p-6 bg-white">
                            <h3 className="card-title text-lg font-bold text-gray-800">{provider.name}</h3>
                            <p className="text-gray-500 text-sm mt-1">{provider.description}</p>

                            <div className="flex items-center gap-2 mt-3 text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-2 rounded-lg w-fit">
                                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                                Surveys Available Now
                            </div>

                            <div className="card-actions justify-end mt-6">
                                <a
                                    href={provider.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold border-none rounded-xl tracking-wide shadow-lg shadow-indigo-200 py-3 text-center block transition-all"
                                >
                                    Start Earning
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
                <h2>Available Survey Assignments</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                    {surveys.map((survey) => (
                        <div key={survey.surveyId} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                            <h3>{survey.name}</h3>
                            <p><strong>Duration:</strong> {survey.loi} Mins</p>
                            <p><strong>Payout:</strong> ${survey.cpi}</p>
                            <button onClick={() => handleTakeSurvey(survey.surveyId)} style={{ backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px', padding: '10px 16px', cursor: 'pointer', width: '100%' }}>
                                Start Task
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Offerwalls;