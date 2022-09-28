import "./button.css";

const Button = (props) => {
  const {
    children,
    textColor,
    bgColor,
    border,
    borderRad,
    pd,
    txtSize,
    lineHeight,
  } = props;
  return (
    <button
      className="custom-btn"
      style={{
        fontSize: txtSize,
        lineHeight: lineHeight,
        padding: pd,
        color: textColor,
        backgroundColor: bgColor,
        border: border,
        borderRadius: borderRad,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
