import React from "react";

const Textarea = ({ className, onChange,label, name, value, rows, cols }) => {
  return (
    <div className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea name={name} id={name} rows={rows} cols={cols} onChange={onChange} value={value} />
    </div>
  );
};

export default Textarea;
