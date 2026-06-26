import { toast } from "sonner";

export const showToast = {
    success: (message) => {
        toast.success(message, {
            style: {
                background: '#ecfdf5',
                color: '#065f46',
                border: '1px solid #a7f3d0'
            }
        });
    },
    error: (message) => {
        toast.error(message, {
            style: {
                background: '#fef2f2',
                color: '#991b1b',
                border: '1px solid #fecaca'
            }
        });
    },
    info: (message) => {
        toast.info(message, {
            style: {
                background: '#eff6ff',
                color: '#1e40af',
                border: '1px solid #bfdbfe'
            }
        });
    },
    warning: (message) => {
        toast.warning(message, {
            style: {
                background: '#fffbeb',
                color: '#854d0e',
                border: '1px solid #fef08a'
            }
        });
    }
};