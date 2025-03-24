import React, { useState } from "react";  
import { useAuthRegister } from "../../hooks/auth/useAuthRegister";  
import Step1 from "./step1/Step1";  
import Step2 from "./Step2/Step2";  
import Step3 from "./Step3/Step3";  
import toast from "react-hot-toast";  

function SignUp({ setAuth }) {  
  const [step, setStep] = useState(1);  
  const [credentials, setCredentials] = useState({  
    phoneNumber: "",  
    verifyCode: "",  
    password: "",  
    gmail: "",  
  });  
  const [errorMessage, setErrorMessage] = useState("");  

  const { Register, VerifyMessage, SendVerifyMessage, loading } = useAuthRegister();  

  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setCredentials((prev) => ({ ...prev, [name]: value }));  
  };  

  const handleSubmit1 = async (e) => {  
    e.preventDefault();  
    try {  
      await SendVerifyMessage(credentials.phoneNumber);  
      toast.success("کد تایید با موفقیت ارسال شد.");  
      setStep(2);  
    } catch (error) {  
      setErrorMessage("خطا در ارسال کد. لطفا دوباره تلاش کنید.");  
    }  
  };  

  const handleSubmit2 = async (e) => {  
    e.preventDefault();  
    try {  
      await VerifyMessage(credentials.phoneNumber, credentials.verifyCode);  
      toast.success("کد تایید با موفقیت تایید شد.");  
      setStep(3);  
    } catch (error) {  
      setErrorMessage("خطا در تایید کد. لطفا دوباره تلاش کنید.");  
    }  
  };  

  const handleSubmit3 = async (e) => {  
    e.preventDefault();  
    try {  
      await Register(credentials.password, credentials.gmail, credentials.phoneNumber);  
      toast.success("ثبت نام با موفقیت انجام شد.");  
      toast.success("لطفا وارد شوید");  
      setAuth("login");   
    } catch (error) {  
      setErrorMessage("خطا در ثبت نام. لطفا دوباره تلاش کنید.");  
    }  
  };  

  return (  
    <div className="bg-white p-5 rounded-2xl">  
      <h2 className="text-center my-5 text-green-400 font-extrabold">  
        ایجاد حساب کاربری  
      </h2>  

      {step === 1 && <Step1 credentials={credentials} handleChange={handleChange} handleSubmit={handleSubmit1} loading={loading} />}  
      {step === 2 && <Step2 credentials={credentials} handleChange={handleChange} handleSubmit={handleSubmit2} loading={loading} />}  
      {step === 3 && <Step3 credentials={credentials} handleChange={handleChange} handleSubmit={handleSubmit3} loading={loading} />}  
      
      <button className="cursor-pointer text-sky-500 text-center flex m-auto" onClick={() => setAuth("login")}>  
        ورود  
      </button>  
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}  
    </div>  
  );  
}  

export default SignUp;  