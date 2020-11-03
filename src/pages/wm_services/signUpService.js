import axios from 'axios';
import {baseUrl, signUpUrl} from "./common";

const signUpService = (email, name, country, password1, password2) => {
    axios.post(`${baseUrl}${signUpUrl}`, {
        email,
        name,
        country,
        password1,
        password2,
    }).then((response) => response.data)
        .catch(err => {
            console.log(err)
        });
    //TODO send user to their email to confirm their email
    //TODO after confirm send to on-boarding screen

}
export default signUpService;
