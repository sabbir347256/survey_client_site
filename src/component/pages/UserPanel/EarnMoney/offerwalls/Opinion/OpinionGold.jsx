import { useContext } from "react";
import config from "../../../../utils/envconfig";
import { useCustomQuery } from "../../../../utils/useCustomQuery";
import { AuthProvider } from "../../../../../AuthProvider/CreateContext";

const OpinionGold = () => {
    const {token} = useContext(AuthProvider);
    const { data, isLoading, error } = useCustomQuery({
        url: `${config?.backendUrl}/opinion/offerwall-link`,
         headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        queryKey: ["opinionGoldLink"]
    });

    console.log(data)

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-96">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    if (error || !data?.success) {
        return (
            <div className="alert alert-error shadow-lg max-w-xl mx-auto my-8">
                <div>
                    <span>Failed to load the survey configuration.</span>
                </div>
            </div>
        );
    }
    return (
        <div className="container mx-auto p-4 flex flex-col items-center">
            <div className="card w-full max-w-5xl bg-base-100 shadow-xl border border-base-200 overflow-hidden">
                <div className="p-4 bg-base-200 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-base-content">OpinionGold Survey Wall</h2>
                    <a
                        href={data.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm normal-case"
                    >
                        Open in New Tab
                    </a>
                </div>
                <div className="w-full flex justify-center bg-white p-2">
                    <iframe
                        src={data.url}
                        title="OpinionGold Offerwall"
                        className="w-full h-[700px] border-0 rounded-b-xl"
                        style={{ minWidth: "1000px" }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default OpinionGold;