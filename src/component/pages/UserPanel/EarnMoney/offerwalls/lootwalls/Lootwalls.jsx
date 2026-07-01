import React, { useContext, useState } from 'react';
import { AuthProvider } from '../../../../../AuthProvider/CreateContext';
import { useCustomQuery } from '../../../../utils/useCustomQuery';
import config from '../../../../utils/envconfig';

const Lootwalls = () => {
    const { token } = useContext(AuthProvider);
    const [activeProvider, setActiveProvider] = useState(null);

    const { data, isLoading, isError, error } = useCustomQuery({
        url: `${config.backendUrl}/survey/get-all-surveys`,
        queryKey: ["surveyProviders"],
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });

    if (isLoading) return <div className="text-center my-10 font-medium">Loading available tasks...</div>;

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

    if (activeProvider) {
        return (
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">{activeProvider.name} Wall</h2>
                    <button
                        onClick={() => setActiveProvider(null)}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-all"
                    >
                        &larr; Back to Offerwalls
                    </button>
                </div>

                <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200" style={{ height: "calc(100vh - 180px)" }}>
                    <iframe
                        src={activeProvider.url}
                        title={activeProvider.name}
                        className="w-full h-full border-none"
                        allow="geolocation; microphone; camera"
                    />
                </div>
            </div>
        );
    }
    return (
        <div className="">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 ">Lootwalls Survey</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {providers.map((provider) => (
                    <div key={provider.id} className="card bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                        <div className="card-body p-6 bg-white">
                            <h3 className="card-title text-lg font-bold text-gray-800">{provider.name}</h3>
                            <p className="text-gray-500 text-sm mt-1">{provider.description}</p>

                            <div className="flex items-center gap-2 mt-3 text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-2 rounded-lg w-fit">
                                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                                Surveys Available Now
                            </div>

                            <div className="card-actions justify-end mt-6">
                                <button
                                    onClick={() => setActiveProvider(provider)}
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl tracking-wide shadow-lg shadow-indigo-200 py-3 text-center block transition-all"
                                >
                                    Start Earning
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lootwalls;