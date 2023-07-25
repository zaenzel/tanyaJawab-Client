import "./button.css";

const Button = ({ customClass, text = "button", fullWidth }) => {
  return (
    <button
      type="button"
      className={`btn ${customClass} ${fullWidth && "btn-block"}`}
    >
      {text}
    </button>
  );
};

export default Button;
