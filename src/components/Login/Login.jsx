import React, { useState } from "react";
import { useAuthLogin } from "../../hooks/auth/useAuthLogin";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
const LoginForm = ({setAuth}) => {
  const { login, loading, user } = useAuthLogin();
  const [credentials, setCredentials] = useState({
    phoneOrGmail: "",
    password: "",
    rememberMe: false,
  });
  const [errorMessage, setErrorMessage] = useState("");
const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
      toast.success("ورود با موفقیت انجام شد."); 
      navigate("/")
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials.");
      toast.error("ورود ناموفق! لطفا اطلاعات خود را بررسی کنید."); 
    }
  };

  return (
    <div className="bg-white p-5 rounded-2xl">
      <h2 className="text-center my-5 to-green-400 font-extrabold">ورود به حساب کاربری</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center m-auto gap-y-5"
      >
        <input
          id="authInput"
          type="text"
          name="phoneOrGmail"
          value={credentials.phoneOrGmail}
          onChange={handleChange}
          placeholder="ایمیل یا تلفن همراه"
          className="mx-20"
          required
        />
        <input
          id="authInput"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="رمز عبور"
          className="mx-20"

          required
        />
        <span className="flex  gap-x-5 justify-end mx-20">
          <label htmlFor="rememberMe">مرا به خاطر بسپار</label>
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={credentials.rememberMe}
            onChange={handleChange}
          />
        </span>
        <button type="submit" disabled={loading} className="bg-nalenji m-auto p-2 text-white px-8 rounded-3xl">
          {loading ? "در حال ورود" : "ورود"}
        </button>
        <button className="cursor-pointer text-sky-500" onClick={() => setAuth("register")}>ثبت نام</button>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
