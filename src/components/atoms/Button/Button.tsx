import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  type = "button",
}) => (
  <button type={type} onClick={onClick} disabled={disabled}>
    {label}
  </button>
);

export default Button;
