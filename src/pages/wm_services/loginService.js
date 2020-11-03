import axios from "axios";
import { baseUrl, loginUrl } from "./common";

const loginService = (email, password) => {
    return axios
        .post(`${baseUrl}${loginUrl}`, {
            email: email,
            password: password
        })
        .then((response) => response.data)
        .catch((error) => {
            if (error.response) {
                // Request made and server responded
                console.log("first error type");
                console.log(error.response.data);
                console.log(error.response.status);

                return error.response.data;
            } else if (error.request) {
                // The request was made but no response was received
                console.log("second error type");
                console.log(error.request);
                return error.request;
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("third error type");
                console.log("Error", error.message);
                return error.message;
            }
        });
};

export default loginService;
