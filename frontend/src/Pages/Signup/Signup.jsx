import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

import Input from "../../components/Input/Input";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import PasswordStrength from "../../components/PasswordStrength/PasswordStrength";
import Button from "../../components/Button/Button";

const Signup = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const formIsValid =
        username.trim() &&
        password.length >= 8 &&
        password === confirmPassword;

    return (

        <main className="signupPage">

            <div className="signupContent">

                <button
                    className="backButton"
                    onClick={() => navigate("/get-started")}
                >
                    <IoArrowBack />
                </button>

                <h1>Create Account</h1>

                <p>
                    Create an account to securely save your health
                    information and personalize your ValeCare experience.
                </p>

                <Input
                    label="Username"
                    placeholder="eg. titi05"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                />

                <PasswordInput
                    label="Password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <PasswordStrength password={password} />

                <PasswordInput
                    label="Confirm Password"
                    placeholder="Enter your password"
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                />

                <div className="signinLink">

                    Already a member?

                    <span onClick={()=>navigate("/login")}>
                        Sign In
                    </span>

                </div>

            </div>

            <footer className="signupFooter">

                <Button

                    text="Create Account"

                    disabled={!formIsValid}

                    onClick={()=>navigate("/dashboard")}

                />

            </footer>

        </main>

    );

};

export default Signup;