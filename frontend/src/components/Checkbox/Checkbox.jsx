import "./Checkbox.css";

const Checkbox = ({
  id,
  label,
  checked,
  onChange,
  required = false,
}) => {
  return (
    <label
      htmlFor={id}
      className="checkbox-container"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        required={required}
      />

      <span className="checkmark"></span>

      <span className="checkbox-label">
        {label}
      </span>
    </label>
  );
};

export default Checkbox;