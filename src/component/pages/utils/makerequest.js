import axios from "axios";
import { showToast } from "./toastmessage";

export const makeRequest = async (method, url, data = null) => {
    try {
        const token = localStorage.getItem('token');

        const headers = {};
        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        const response = await axios({
            method: method,
            url: url,
            data: data,
            headers: headers
        });

        if (response.data.success) {
            showToast.success(response.data.message || "Success!");
            return response.data;
        }
    } catch (error) {
        showToast.error(error.response?.data?.message || "Something went wrong");
        return null;
    }
};