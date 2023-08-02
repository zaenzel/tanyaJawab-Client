import "./button.css";

const Button = ({ customClass, text = "button", fullWidth, type="button" }) => {
  return (
    <button
      type={type}
      className={`btn ${customClass} ${fullWidth && "btn-block"}`}
    >
      {text}
    </button>
  );
};

export default Button;
