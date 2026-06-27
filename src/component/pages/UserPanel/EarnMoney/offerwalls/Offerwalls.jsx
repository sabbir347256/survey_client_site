import { useContext } from "react";
import config from "../../../utils/envconfig";
import { useCustomQuery } from "../../../utils/useCustomQuery";
import { AuthProvider } from "../../../../AuthProvider/CreateContext";

const Offerwalls = () => {
    const { token } = useContext(AuthProvider);

    const data = [
        {
            id: "lootwalls",
            name: "Lootwalls",
            description: "Share your opinions on simple topics and instantly stack points.",
            url: `https://www.lootwalls.com/wall?apiKey=HDkDw7TgMooqRJVyiSqdZg3aDXeCFOg3&userId=6a3e51e0b5c05e31aaf44884`
        },
        // {
        //     id: "offertoro",
        //     name: "OfferToro",
        //     description: "Complete high-paying surveys and unlock premium wallet rewards.",
        //     url: `https://www.offertoro.com/wall?secret=${process.env.PROVIDER_OFFERTORO_KEY}&user_id=${userId}`
        // },
        // {
        //     id: "cpalead",
        //     name: "CPALead",
        //     description: "Quick surveys with fast approval. Earn points directly into your wallet.",
        //     url: `https://www.cpalead.com/wall?pub=${process.env.PROVIDER_CPALEAD_KEY}&subid=${userId}`
        // }
    ];

    // const { data, isLoading, isError, error } = useCustomQuery({
    //     url: `${config.backendUrl}/survey/get-all-surveys`,
    //     queryKey: ["surveyProviders"],
    //     headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    // });

    // if (isLoading) {
    //     return <div className="text-center my-10 font-medium">Loading Available Surveys...</div>;
    // }

    // if (isError && error?.response?.status === 403) {
    //     return (
    //         <div className="text-center text-red-500 font-bold my-10 p-5 border border-red-200 bg-red-50 rounded-xl max-w-md mx-auto">
    //             Sorry, these survey offers are only available for users in the US and UK.
    //         </div>
    //     );
    // }

    // if (isError || !data?.success) {
    //     return <div className="text-center my-10 text-red-500 font-medium">Failed to load surveys.</div>;
    // }

    const providers = data
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
        </div>
    );
};

export default Offerwalls;