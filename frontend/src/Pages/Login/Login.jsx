import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {

    setError("");

    if (!username || !password) {

        setError("Please enter your username and password.");

        return;

    }

    localStorage.setItem("currentUser", username);

    navigate("/dashboard");

};

    return (

        <div className="page login-page">

            <div>

                <h1>Login</h1>

                <p className="page-description">
                    Welcome back to ValeCare.
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

            </div>

            <div className="login-footer">
                {error && (

    <p className="error-message">

        {error}

    </p>

)}
                <button onClick={handleLogin}>
                    Continue
                </button>

                <p>

                    Don't have an account?

                    <span onClick={() => navigate("/register")}>
                        Create Account
                    </span>

                </p>

            </div>

        </div>

    );

}

export default Login;