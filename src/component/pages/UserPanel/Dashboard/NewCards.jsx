import { useEffect, useRef } from 'react';

const SurveyComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.style.width = '100%';
    wrapper.style.height = '800px';
    wrapper.style.minHeight = '800px';
    wrapper.style.display = 'block';
    wrapper.style.position = 'relative';

    const iframe = document.createElement('iframe');
    iframe.src = "https://www.lootwalls.com/wall?apiKey=HDkDw7TgMooqRJVyiSqdZg3aDXeCFOg3&userId=6a3e51e0b5c05e31aaf44884";
    iframe.title = "Lootwalls Survey";
    iframe.scrolling = "yes";
    iframe.frameBorder = "0";
    
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '800');
    iframe.style.width = '100%';
    iframe.style.height = '800px';
    iframe.style.minHeight = '800px';
    iframe.style.display = 'block';
    iframe.style.border = 'none';

    wrapper.appendChild(iframe);
    
    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.appendChild(wrapper);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-6 p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Complete Surveys & Earn Rewards</h2>
      
      <div 
        ref={containerRef} 
        className="w-full bg-gray-50 rounded-lg flex items-center justify-center" 
        style={{ minHeight: '800px' }}
      >
        <p className="text-gray-500 font-medium">Connecting to secure survey network...</p>
      </div>
    </div>
  );
};

export default SurveyComponent;