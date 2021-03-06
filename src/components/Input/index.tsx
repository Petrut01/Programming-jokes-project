import React, { useState } from "react";

interface Props {
  placeholder: string;
  type?: string;
}

const Input = ({ placeholder, type = "text" }: Props) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <label> {placeholder}</label>
      <input
        placeholder={placeholder}
        type={type}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};

export default Input;
