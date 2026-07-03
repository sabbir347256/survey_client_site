import { useContext } from "react";
import config from "../../../../utils/envconfig";
import { useCustomQuery } from "../../../../utils/useCustomQuery";
import { AuthProvider } from "../../../../../AuthProvider/CreateContext";

const Goweb = () => {
    const { user } = useContext(AuthProvider);
    const { data, isLoading, isError, error } = useCustomQuery({
        url: `${config?.backendUrl}/goweb/active`,
        queryKey: ["activeSurveys"],
    });

    if (isLoading) return <div>Loading surveys...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    const surveys = data?.surveys || [];
    console.log(surveys)
    return (
        <div style={{ padding: "20px" }}>
            <h2>Available Surveys</h2>
            <div style={{ display: "grid", gap: "15px", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}>
                {surveys.map((survey) => {
                    const backendStartUrl = `${config?.backendUrl}/goweb/start?surveyID=${survey.surveyID}&userId=${user?.userID}`;

                    return (
                        <div key={survey.surveyID} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}>
                            <h3>Survey #{survey.surveyID}</h3>
                            <p><strong>Reward:</strong> ${survey.surveyCPI}</p>
                            <p><strong>Time (LOI):</strong> {survey.LOI} Mins</p>
                            <p><strong>Country:</strong> {survey.countrieISOcode}</p>
                            <p><strong>Device:</strong> {survey.projectSupportedDevice === "1" ? "Mobile/PC" : "PC Only"}</p>
                            <a
                                href={backendStartUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: "inline-block", marginTop: "10px", padding: "8px 12px", backgroundColor: "#007BFF", color: "#fff", textDecoration: "none", borderRadius: "4px" }}
                            >
                                Start Survey
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Goweb;