import { useState } from "react";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import "./PasswordInput.css";

const PasswordInput = ({
  label,
  name,
  value,
  onChange,
  placeholder = "Enter your password",
  required = false,
  disabled = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-group">
      {label && (
        <label htmlFor={name} className="password-label">
          {label}
          {required && (
            <span className="required">*</span>
          )}
        </label>
      )}

      <div className="password-wrapper">

        <FaLock className="password-icon" />

        <input
          id={name}
          type={showPassword ? "text" : "password"}
          className="password-input"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
        />

        <button
          type="button"
          className="toggle-password"
          onClick={() =>
            setShowPassword(!showPassword)
          }
          aria-label={
            showPassword
              ? "Hide password"
              : "Show password"
          }
        >
          {showPassword ? (
            <FaEyeSlash />
          ) : (
            <FaEye />
          )}
        </button>

      </div>
    </div>
  );
};

export default PasswordInput;