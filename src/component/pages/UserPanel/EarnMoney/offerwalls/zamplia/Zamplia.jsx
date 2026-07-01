import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Zamplia = () => {
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
    return (
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
    );
};

export default Zamplia;