import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaGoogle, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import Logo from "../assets/react.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (email.trim()=== ""){
        alert("Email tidak boleh kosong");
        return;
    }

      if (password.length < 8) {
      setError("Password minimal 8 karakter");
      return;
    }

    if (email !== "admin@gmail.com" || password !== "admin123") {
      setError("Email atau password salah");
      return;
    }

    setError("");
    window.location.href = "/home"; // redirect manual
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div
        className="w-[90%] max-w-sm md:max-w-md lg:max-w-md p-5 bg-gray-900 flex-col flex items-center gap-3 rounded-xl
        shadow-slate-500 shadow-lg"
      >
        <img src={Logo} alt="Logo" className="w-12 md:w-14" />
        <h1 className="text-lg md:text-lg font-semibold">Selamat Datang</h1>

        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-full">
            <MdOutlineAlternateEmail className="m-2" />
            <input
              type="email"
              placeholder="Masukkan Email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-0
                    w-full outline-none text-sm md:text-base"
            />
          </div>

          <div className="w-full flex items-center bg-gray-800 p-2 rounded-full">
            <RiLockPasswordFill className="m-2" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan Password Anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
            />

            {showPassword ? (
              <FaEye
                className=" m-2 right-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaEyeSlash
                className=" m-2 right-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>

          {error ? (
            <p className="text-red-600 text-xs ml-3 mt-1">{error}</p>
          ) : (
            password.length < 8 &&
            password.length > 0 && (
              <p className="text-red-600 text-xs ml-3 mt-1">
                password minimal 8 karakter
              </p>
            )
          )}
        </div>

        <button
          onClick={handleLogin}
          className="w-full text-center items-center bg-blue-800 hover:bg-blue-600 p-2 rounded-full md:text-base text-white"
        >
          Masuk
        </button>
        <p className="text-xs md:text-sm text-gray-500 text-center">
          Tidak memiliki akun? <span className="text-white"> Daftar</span>
        </p>

        <div className="flex items-center w-full">
          <div className="grow h-0.5 rounded-full bg-blue-600"></div>
          <h3 className="px-3 text-xs md:text-sm text-blue-500">
            Atau masuk dengan
          </h3>
          <div className="grow h-0.5 rounded-full bg-blue-600"></div>
        </div>

        <div className="relative w-full flex items-center justify-between py-3">
          <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-full hover:bg-slate-500">
            <FaGoogle className="text-white" />
          </div>
          <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-full hover:bg-slate-500">
            <FaFacebookF className="text-white" />
          </div>
          <div className="p-2 md:px-10 bg-slate-700 cursor-pointer rounded-full hover:bg-slate-500">
            <FaWhatsapp className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
