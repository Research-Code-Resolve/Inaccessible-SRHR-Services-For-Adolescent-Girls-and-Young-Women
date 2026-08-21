import React from "react";
import "./Input.css";

const Input = ({
	label,
	type = "text",
	name,
	placeholder = "",
	value,
	onChange,
	required = false,
	disabled = false,
}) => {
	return (
		<div className="input-group">
			{label && (
				<label htmlFor={name} className="input-label">
					{label}
					{required && <span className="required">*</span>}
				</label>
			)}

			<input
				id={name}
				type={type}
				name={name}
				className="input-field"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				required={required}
				disabled={disabled}
			/>
		</div>
	);
};

export default Input;
