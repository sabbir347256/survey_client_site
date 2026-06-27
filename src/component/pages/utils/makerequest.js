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
        
        return null;
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Something went wrong";
        showToast.error(errorMessage);
        return error.response?.data || null;
    }
};