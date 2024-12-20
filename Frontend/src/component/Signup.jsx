import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import validation from '../validate'
import axios from 'axios'

function Signup(){

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post('http://localhost:3036/signup', values)
        .then(() => {
          navigate('/login');
        })
        .catch((err) => {
          if (err.response && err.response.data.message) {
            setServerError(err.response.data.message); // Capture server error
          } else {
            console.error('An unexpected error occurred:', err);
          }
        });
    }
  }

  const navigate = useNavigate();

  const [values, setValues] =useState({
    name:'',
    email: '',
    password:'',
    confirmpassword:''
  })

  const [errors, setErrors] = useState({})
  const [serverError, setServerError] = useState('');

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div>
      
      <div className="text-center justify-center">

      <img src="images/Mythic merchant logo.jpg" alt='' className='bg-transparent h-34 mt-10 m-auto scale-125  max-sm:scale-90' ></img>

      <div className="flex p-2.5 ">
          <form
            onSubmit={handleSubmit}
            className="text-black m-auto h-[600px] w-[500px] mt-5 border-solid border-black border-2 rounded-xl bg-[rgba(128,128,128,0.114)] max-sm:scale-75 max-sm:h-[500px] max-sm:mt-0"
          >
            <h2 className="text-5xl my-10">Signup</h2>

            {serverError && <p className="text-red-600 mb-4">{serverError}</p>}
    
            <div className="Login">

              <input
                type="text"
                placeholder="Name"
                name="name"
                className="m-auto list-item w-[350px] h-[40px] mt-5 rounded-sm text-lg p-1.5 font-extralight border-4 max-sm:w-[250px]"
                onChange={handleInput}
              />{errors.name && <p className="text-red-600 mb-4"> {errors.name}</p>}

              <input
                type="email"
                placeholder="Email"
                name="email"
                className="m-auto list-item w-[350px] h-[40px] mt-5 rounded-sm text-lg p-1.5 font-extralight border-4 max-sm:w-[250px]"
                onChange={handleInput}
              />{errors.email && <p className="text-red-600 "> {errors.email}</p>}

              <input
                type="password"
                placeholder="Password"
                name="password"
                className="m-auto list-item w-[350px] h-[40px] mt-5 rounded-sm text-lg p-1.5 font-extralight border-4 max-sm:w-[250px]"
                onChange={handleInput}
              />{errors.password && <p className="text-red-600 mb-4"> {errors.password}</p>}
            
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmpassword"
                className="m-auto list-item w-[350px] h-[40px] mt-5 rounded-sm text-lg p-1.5 font-extralight border-4 max-sm:w-[250px]"
                onChange={handleInput}
              />{errors.confirmpassword && <p className="text-red-600 mb-4"> {errors.confirmpassword}</p>}

              <button
                type="submit"
                className="border-blue-700 cursor-pointer bg-blue-600 rounded-xl py-3 px-8 my-6 text-white"
              >
                Sign up
              </button>
              <p className="mb-12">
                Already have an account?<Link to='/login' className='hover:underline text-blue-600'> Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup