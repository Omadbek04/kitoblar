import React from "react";

const TextInput = ({ placeholder="", type="text", name="", onChange, defaultValue="" ,className=""}) => {
  return <input
   defaultValue={defaultValue} 
   placeholder={placeholder} 
   type={type} 
   name={name} 
   onChange={(e) => onChange?.(e.target.value)}
   className={`text-input ${className}`}
   />;
};

export default TextInput;