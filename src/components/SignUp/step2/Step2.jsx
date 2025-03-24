import React from "react";  
import InputField from "../../common/InputField/InputField";  

const Step2 = ({ credentials, handleChange, handleSubmit, loading }) => (  
  <form onSubmit={handleSubmit} className="flex flex-col justify-center m-auto gap-y-5">  
    <InputField  
      type="text"  
      name="verifyCode"  
      value={credentials.verifyCode}  
      onChange={handleChange}  
      placeholder="کد تایید"  
      required  
    />  
    <button  
      type="submit"  
      disabled={loading}  
      className="bg-nalenji m-auto p-2 text-white px-8 rounded-3xl my-3"  
    >  
      {loading ? "در حال ارسال" : "ارسال کد تایید"}  
    </button>  
  </form>  
);  

export default Step2;  