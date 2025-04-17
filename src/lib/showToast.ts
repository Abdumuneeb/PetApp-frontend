import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ShowToast {
  success: (message: string, options?: ToastOptions) => void;
  error: (message: string, options?: ToastOptions) => void;
  info: (message: string, options?: ToastOptions) => void;
  default: (message: string, options?: ToastOptions) => void;
}

const showToast: ShowToast = {
  success: (message: string, options?: ToastOptions) => {
    if (!toast.isActive("success")) {
      toast.success(message, { toastId: "success", ...options });
    }
  },

  error: (message: string, options?: ToastOptions) => {
    if (!toast.isActive("error")) {
      toast.error(message, { toastId: "error", ...options });
    }
  },

  info: (message: string, options?: ToastOptions) => {
    if (!toast.isActive("info")) {
      toast.info(message, { toastId: "info", ...options });
    }
  },

  default: (message: string, options?: ToastOptions) => {
    toast(message, options);
  },
};

export default showToast;
