import axios from "axios";
import { baseUrl, loginUrl } from "./common";
import errorHandler from './errorHandler';

const loginService = (email, password) => {
    return axios
        .post(`${baseUrl}${loginUrl}`, {
            email: email,
            password: password
        })
        .then((response) => response.data)
        .catch((error) => errorHandler(error))

};

export default loginService;
