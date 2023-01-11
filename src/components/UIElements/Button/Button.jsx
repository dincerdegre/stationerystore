import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  href,
  to,
  onClick,
  type,
  disabled,
  exact,
  ariaLabel,
  className,
  children,
}) => {
  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} exact={exact} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
