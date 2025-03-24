import React from "react";  
import InputField from "../../common/InputField/InputField";  

const Step3 = ({ credentials, handleChange, handleSubmit, loading }) => (  
  <form onSubmit={handleSubmit} className="flex flex-col justify-center m-auto gap-y-5">  
    <InputField  
      type="password"  
      name="password"  
      value={credentials.password}  
      onChange={handleChange}  
      placeholder="رمز عبور"  
      required  
    />  
    <InputField  
      type="email"  
      name="gmail"  
      value={credentials.gmail}  
      onChange={handleChange}  
      placeholder="ایمیل"  
      required  
    />  
    <button  
      type="submit"  
      disabled={loading}  
      className="bg-nalenji m-auto p-2 text-white px-8 rounded-3xl my-3"  
    >  
      {loading ? "در حال ارسال" : "تکمیل اطلاعات"}  
    </button>  
  </form>  
);  

export default Step3;  