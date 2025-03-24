import React from "react";  

const InputField = ({ type, name, value, onChange, placeholder, required }) => (  
  <input  
  id="authInput"
    type={type}  
    name={name}  
    value={value}  
    onChange={onChange}  
    placeholder={placeholder}  
    className="mx-20"  
    required={required}  
  />  
);  

export default InputField;  