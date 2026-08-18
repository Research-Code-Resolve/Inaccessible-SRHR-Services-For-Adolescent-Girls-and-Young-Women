import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.username.trim()) {
      nextErrors.username = "Enter your username.";
    }

    if (!formData.password) {
      nextErrors.password = "Enter your password.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitting(true);

    try {
      // TODO: replace with a real API call, e.g.
      // const res = await fetch("/api/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     username: formData.username,
      //     password: formData.password,
      //   }),
      // });
      // if (!res.ok) throw new Error("Invalid username or password.");
      await new Promise((resolve) => setTimeout(resolve, 600));

      navigate("/dashboard");
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        form: err.message || "Invalid username or password. Please try again.",
      }));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="signin-page">
      <div className="signin-container">

        <div className="signin-card">

          <div className="signin-header">
            <Link to="/" className="signin-brand">
              <span className="signin-brand-mark">V</span>
              ValeCare
            </Link>

            <h1>Welcome back</h1>
            <p>Sign in to continue to your dashboard.</p>
          </div>

          <form className="signin-form" onSubmit={handleSubmit} noValidate>

            <div className="form-field">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                aria-invalid={!!errors.username}
                aria-describedby={errors.username ? "username-error" : undefined}
              />
              {errors.username && (
                <span className="field-error" id="username-error">
                  {errors.username}
                </span>
              )}
            </div>

            <div className="form-field">
              <div className="form-field-label-row">
                <label htmlFor="password">Password</label>
                <Link to="/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? "password-error" : undefined}
              />
              {errors.password && (
                <span className="field-error" id="password-error">
                  {errors.password}
                </span>
              )}
            </div>

            {errors.form && (
              <div className="form-error-banner">{errors.form}</div>
            )}

            <button
              type="submit"
              className="signin-submit"
              disabled={submitting}
            >
              {submitting ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <p className="signin-register-text">
            Don't have an account? <Link to="/register">Create one</Link>
          </p>

          <p className="signin-guest-text">
            <Link to="/dashboard">Continue as guest</Link>
          </p>

        </div>

      </div>
    </main>
  );
};

export default SignIn;