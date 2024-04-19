import React from "react";

const Form = ({ children, onSubmit, className }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit?.();
  };
  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
};

export default Form;
