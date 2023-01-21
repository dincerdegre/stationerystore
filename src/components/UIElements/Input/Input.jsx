import React from "react";

const Input = ({
  type,
  name,
  label,
  placeholder,
  value,
  className,
  onChange,
}) => {
  return (
    <div className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
