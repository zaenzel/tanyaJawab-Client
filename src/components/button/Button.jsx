import "./button.css"

const Button = ({ customClass, text = "button" }) => {
  return <button className={`btn ${customClass}`}>{text}</button>;
};

export default Button;
