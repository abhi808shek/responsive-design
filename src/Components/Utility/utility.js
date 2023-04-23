import { toast } from "react-toastify";

// Showing Toast Message
export const toasterFunction = (message) => {
  toast(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const getQueryParams = (data) => {
  const ret = [];
  for (let d in data) {
    if (_.isObject(data[d]) || _.isArray(data[d])) {
      for (let arrD in data[d]) {
        ret.push(
          `${encodeURIComponent(d)}[]=${encodeURIComponent(data[d][arrD])}`
        );
      }
    } else if (_.isNull(data[d]) || _.isUndefined(data[d])) {
      ret.push(encodeURIComponent(d));
    } else {
      ret.push(`${encodeURIComponent(d)}=${encodeURIComponent(data[d])}`);
    }
  }
  return ret.join("&");
};

// Get Data from Local Storage
export const setDataOnStorage = (value) => {
  return localStorage.setItem("userCredential", JSON.stringify(value));
};

// Get Data from Local Storage
export const getUserDataFromLocalStorage = () => {
  return localStorage.getItem("userCredential");
};
