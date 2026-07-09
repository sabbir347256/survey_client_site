import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import config from '../../../../utils/envconfig';
import { AuthProvider } from '../../../../../AuthProvider/CreateContext';

const Zamplia = () => {
    const { user } = useContext(AuthProvider);
    const employeeId = user?.userID;
    const [surveys, setSurveys] = useState([]);
    const [loading, setLoading] = useState(false);


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

    useEffect(() => {
        fetchLiveSurveys();
    }, []);


    const handleTakeSurvey = async (surveyId) => {
        try {
            const res = await axios.post(`${config.backendUrl}/zampila/surveys/start`, { surveyId, employeeId });
            if (res.data.success && res.data.entryLink) {
                window.location.href = res.data.entryLink;
            }
        } catch (err) {
            alert('Failed to generate entry link');
        }
    };


    if (loading) return <div>Loading available tasks...</div>;
    return (
        <div className="py-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 ">Zamplia Survey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {surveys.map((survey) => (
                    <div
                        key={survey?.SurveyId}
                        className="max-w-sm bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full"
                    >
                        <div>
                            <h3 className="text-lg font-bold text-gray-800 line-clamp-2 mb-4 tracking-tight leading-snug">
                                {survey.name}
                            </h3>
                            <div className="flex items-center justify-between text-sm mb-6 bg-gray-50 p-3 rounded-xl">
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Duration</span>
                                    <span className="font-semibold text-gray-700 mt-0.5">{survey.LOI} Mins</span>
                                </div>
                                <div className="flex flex-col text-right">
                                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Payout</span>
                                    <span className="font-bold text-green-600 text-base mt-0.5">${survey.CPI}</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => handleTakeSurvey(survey.SurveyId)}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl tracking-wide shadow-lg shadow-indigo-200 py-3 text-center block transition-all"
                        >
                            Start Task
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Zamplia;