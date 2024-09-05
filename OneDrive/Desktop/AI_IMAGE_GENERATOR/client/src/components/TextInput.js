import React from 'react';

const TextInput = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="text-input-container">
      {label && <label htmlFor="text-input">{label}</label>}
      <input
        type="text"
        id="text-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-input"
      />
    </div>
  );
};

export default TextInput;