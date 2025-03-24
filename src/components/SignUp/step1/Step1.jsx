import React from "react";  
import InputField from "../../common/InputField/InputField";  

const Step1 = ({ credentials, handleChange, handleSubmit, loading }) => (  
  <form onSubmit={handleSubmit} className="flex flex-col justify-center m-auto gap-y-5">  
    <InputField  
      type="text"  
      name="phoneNumber"  
      value={credentials.phoneNumber}  
      onChange={handleChange}  
      placeholder="شماره تلفن همراه"  
      required  
    />  
    <button  
      type="submit"  
      disabled={loading}  
      className="bg-nalenji m-auto p-2 text-white px-8 rounded-3xl my-3"  
    >  
      {loading ? "در حال ارسال" : "دریافت کد تایید"}  
    </button>  
  </form>  
);  

export default Step1;  