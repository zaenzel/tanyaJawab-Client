import "./button.css"

const Button = ({ customClass, text = "button" }) => {
  return <button type="button" className={`btn ${customClass} btn-block`}>{text}</button>;
};

export default Button;
