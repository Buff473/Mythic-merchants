import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
 

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    const validationErrors = {};
    if (!values.email) validationErrors.email = "Email is required";
    if (!values.password) validationErrors.password = "Password is required";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:3036/login", values)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {
          if (err.response && err.response.data.message) {
            setServerError(err.response.data.message);
          } else {
            console.error('An unexpected error occurred:', err);
          }
        });
    }
  };


  return (
    <div>
        <div className="text-center justify-center">
        <img src="images/Mythic merchant logo.jpg" alt='' className='bg-transparent h-34 mt-10 m-auto scale-125  max-sm:scale-90' ></img>

        <a href="/"><i className="fa fa-arrow-left text-4xl h-16 w-16 text-black absolute left-10 top-10 border-4 border-black rounded-[50%] p-2 hover:cursor-pointer max-sm:text-2xl max-sm:h-14 max-sm:w-14 max-sm:-2"></i></a>
        <div className="flex p-2.5 ">
          <form
            action=""
            onSubmit={handleSubmit}
            className="text-black m-auto h-[550px] w-[500px] mt-5 border-solid border-black border-2 rounded-xl bg-[rgba(128,128,128,0.114)] max-sm:scale-75 max-sm:h-[450px] max-sm:mt-0"
          >
            <h2 className="text-5xl my-10">Login</h2>
           
            {serverError && <p className="text-red-600 mb-4">{serverError}</p>}
            
            <div className="Login">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="m-auto list-item w-[350px] h-[40px] rounded-sm text-lg p-1.5 font-extralight border-4 max-sm:w-[250px]"
                onChange={handleInput}
              />
               {errors.email && <p className="text-red-600 mb-4"> {errors.email}</p>}
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="m-auto list-item w-[350px] h-[40px] mt-5 rounded-sm text-lg p-1.5 font-extralight border-4 max-sm:w-[250px]"
                onChange={handleInput}
              />
              {errors.password && <p className="text-red-600 mb-4"> {errors.password}</p>}
              <button
                type="submit"
                className="border-blue-700 cursor-pointer bg-blue-600 rounded-xl py-3 px-8 my-6 text-white">
                Log in
              </button>

              <p className="mb-12">
                Don't have an account? <Link to='/signup' className='hover:underline text-blue-600'>Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Login;
