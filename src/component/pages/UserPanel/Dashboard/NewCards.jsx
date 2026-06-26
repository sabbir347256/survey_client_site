import { useState, useEffect } from 'react';

const SurveyComponent = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-6 p-4 bg-white rounded-xl shadow-md min-h-[850px] relative">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Complete Surveys & Earn Rewards</h2>

      {mounted ? (
        <div style={{ position: 'relative', width: '100%', height: '800px', overflow: 'hidden' }}>
          <iframe
            width="100%"
            height="800"
            scrolling="yes"
            frameBorder="0"
            src="https://www.lootwalls.com/wall?apiKey=HDkDw7TgMooqRJVyiSqdZg3aDXeCFOg3&userId=6a3e51e0b5c05e31aaf44884"
            title="Lootwalls Survey"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              minHeight: '800px',
              border: 'none',
              display: 'block',
              visibility: 'visible'
            }}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center h-[800px]">
          <p className="text-gray-500 font-medium">Securing connection to survey wall...</p>
        </div>
      )}
    </div>
  );
};

export default SurveyComponent;