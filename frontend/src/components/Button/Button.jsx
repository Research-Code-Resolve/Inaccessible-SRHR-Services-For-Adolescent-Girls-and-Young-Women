import "./Button.css";

const Button = ({
    text,
    onClick,
    type = "button",
    variant = "primary",
    disabled = false
}) => {

    return (

        <button

            className={`btn ${variant}`}

            type={type}

            disabled={disabled}

            onClick={onClick}

        >

            {text}

        </button>

    );

};

export default Button;