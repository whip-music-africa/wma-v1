import React, { useState } from "react";
import loginService from "../wm_services/loginService";

export default function Login(props) {
    const { handleAuth } = props;

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
        }
        else {
            console.log("failed to login", response.non_field_errors);
        }
    };

    return (
        <form>
            Email:{" "}
            <input type="text" name="email" value={email} onChange={handleChange} />
            <br />
            <br />
            Password:{" "}
            <input
                type="password"
                name="password"
                onChange={handleChange}
                value={password}
            />
            <br />
            <br />
            <input type="submit" value="Login" onClick={handleLogin} />
        </form>
    );
}
