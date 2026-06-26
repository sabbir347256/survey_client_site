import { useState, useEffect, useRef } from 'react';

const SurveyComponent = () => {
    const [isReady, setIsReady] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsReady(true);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full max-w-4xl mx-auto my-6 p-4 bg-white rounded-xl shadow-md"
            style={{ minHeight: '850px', display: 'block', opacity: 1 }}
        >
            <h2 className="text-xl font-bold mb-4 text-gray-800">Complete Surveys & Earn Rewards</h2>

            {isReady ? (
                <iframe
                    width="100%"
                    height="800"
                    scrolling="yes"
                    frameBorder="0"
                    src="https://www.lootwalls.com/wall?apiKey=HDkDw7TgMooqRJVyiSqdZg3aDXeCFOg3&userId=6a3e51e0b5c05e31aaf44884"
                    title="Lootwalls Survey"
                    style={{
                        width: '100%',
                        height: '800px',
                        minHeight: '800px',
                        maxHeight: '800px',
                        display: 'block',
                        visibility: 'visible',
                        border: 0,
                        padding: 0,
                        margin: 0
                    }}
                />
            ) : (
                <div className="flex items-center justify-center h-[800px]">
                    <p className="text-gray-500 font-medium">Loading survey wall safely...</p>
                </div>
            )}
        </div>
    );
};

export default SurveyComponent;