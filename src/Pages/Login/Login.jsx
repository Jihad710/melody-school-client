import { FaGoogle } from 'react-icons/fa';
import logo from "../../assets/Banner/photo-1593697972646-2f348871bd56.avif";
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


function Login() {
  
const {signIn} = useContext(AuthContext)

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'User Login Successfull',
        showConfirmButton: false,
        timer: 1500
      });
    })
}

  return (
    <div className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img src={logo} alt="" />
      </div>

      <form onSubmit={handleLogin} className="md:w-1/3 max-w-sm">
      <label className="label">
        <span className="label-text font-medium">Email</span>
        </label>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="email"
          name="email"
          placeholder="Email Address"
        />
        <label className="label">
        <span className="label-text font-medium">Password</span>
        </label>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded "
          type="password"
          name="password"
          placeholder="Password"
        />
        
        
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>

        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>
        <div className="text-center md:text-left">
          <label className="mr-5">Sign in with</label>
          <button className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
          
        </div>

        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Dont have an account?{" "}
          <Link className="text-orange-400 hover:underline hover:underline-offset-4" to='/signup'> Register</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
