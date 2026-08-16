import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
const [error, setError] = useState("");
   const handleRegister = () => {

    setError("");

    if (!username || !password || !confirmPassword) {

        setError("Please complete all fields.");

        return;

    }

    if (password !== confirmPassword) {

        setError("Passwords do not match.");

        return;

    }

    localStorage.setItem("currentUser", username);

    navigate("/dashboard");

    };

    return (

        <div className="page register-page">

            <div>

                <h1>Create Account</h1>

                <p className="page-description">
                    Create your ValeCare account to access all features.
                </p>

                <label>Username</label>

                <input
                    type="text"
                    placeholder="e.g. titi05"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label>Password</label>

                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label>Confirm Password</label>

                <input
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

            </div>

            <div className="register-footer">
                {error && <p className="error-message">{error}</p>}
                <button onClick={handleRegister}>
                    Create Account
                </button>

                <p>

                    Already have an account?

                    <span onClick={() => navigate("/login")}>
                        Login
                    </span>

                </p>

            </div>

        </div>

    );

}

export default Register;