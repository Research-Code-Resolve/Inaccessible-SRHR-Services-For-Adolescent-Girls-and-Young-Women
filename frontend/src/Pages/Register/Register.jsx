import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [agreed, setAgreed] = useState(false);
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
      nextErrors.username = "Enter a username.";
    } else if (formData.username.trim().length < 3) {
      nextErrors.username = "Username must be at least 3 characters.";
    }

    if (!formData.password) {
      nextErrors.password = "Create a password.";
    } else if (formData.password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }

    if (!formData.confirmPassword) {
      nextErrors.confirmPassword = "Confirm your password.";
    } else if (formData.confirmPassword !== formData.password) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    if (!agreed) {
      nextErrors.agreed = "Please accept the Privacy Policy to continue.";
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
      // await fetch("/api/register", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     username: formData.username,
      //     password: formData.password,
      //   }),
      // });
      await new Promise((resolve) => setTimeout(resolve, 600));

      register(formData.username);
      navigate("/dashboard");
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        form: "Something went wrong creating your account. Please try again.",
      }));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="register-page">
      <div className="register-container">

        <div className="register-card">

          <div className="register-header">
            <Link to="/" className="register-brand">
              <span className="register-brand-mark">V</span>
              ValeCare
            </Link>

            <h1>Create your account</h1>
            <p>
              Sign up to save your progress, track your health and access
              personalized support.
            </p>
          </div>

          <form className="register-form" onSubmit={handleSubmit} noValidate>

            <div className="form-field">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="Choose a username"
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
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="At least 8 characters"
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

            <div className="form-field">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
                aria-invalid={!!errors.confirmPassword}
                aria-describedby={
                  errors.confirmPassword ? "confirmPassword-error" : undefined
                }
              />
              {errors.confirmPassword && (
                <span className="field-error" id="confirmPassword-error">
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            <label className="form-checkbox">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => {
                  setAgreed(e.target.checked);
                  if (errors.agreed) {
                    setErrors((prev) => ({ ...prev, agreed: "" }));
                  }
                }}
              />
              <span>
                I agree to the{" "}
                <Link to="/privacy-policy">Privacy Policy</Link> and{" "}
                <Link to="/terms">Terms of Use</Link>.
              </span>
            </label>
            {errors.agreed && (
              <span className="field-error">{errors.agreed}</span>
            )}

            {errors.form && (
              <div className="form-error-banner">{errors.form}</div>
            )}

            <button
              type="submit"
              className="register-submit"
              disabled={submitting}
            >
              {submitting ? "Creating account…" : "Create account"}
            </button>
          </form>

          <p className="register-signin-text">
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>

          <p className="register-guest-text">
            Not ready to sign up? <Link to="/dashboard">Continue as guest</Link>
          </p>

        </div>

      </div>
    </main>
  );
};

export default Register;