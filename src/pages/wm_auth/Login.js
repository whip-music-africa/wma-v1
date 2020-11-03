import React, {useState} from "react";
import loginService from "../wm_services/loginService";

export default function Login(props) {
    const {handleAuth} = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const setFields = (event) => {
        if (event.target.name === "email") {
            setEmail(event.target.value);
        }
        if (event.target.name === "password") {
            setPassword(event.target.value);
        }
    }
    const handleChange = (event) => {
        setFields(event);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        const response = await loginService(email, password);

        if (response.key) {

            console.log("success", response.key);
        } else {
            console.log("failed to login", response.non_field_errors);
        }
    };

    return (
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                Email:{" "}
                <div className="mb-4">
                    <input type="text" name="email" value={email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                Password:{" "}
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={password}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <br/>
                <br/>
                <input type="submit" value="Login" onClick={handleLogin}/>
            </form>
        </div>

    );
}
