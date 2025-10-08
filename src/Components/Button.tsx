import React from 'react';


// label, onClick, type, className, disabled
type ButtonProps = {
  label?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string; 
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = 'button',
  onClick,
  className = "",
  disabled = false
}) => {
 
  return(
    <button type={type} onClick={onClick} disabled={disabled} className={className}>{label}</button>
  )
}

export default Button;