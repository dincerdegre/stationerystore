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
  dataTestid,
}) => {
  if (href) {
    return (
      <a className={className} href={href} onClick={onClick} data-testid={dataTestid}>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} exact={exact} onClick={onClick} className={className} data-testid={dataTestid}>
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
      data-testid={dataTestid}
    >
      {children}
    </button>
  );
};

export default Button;
