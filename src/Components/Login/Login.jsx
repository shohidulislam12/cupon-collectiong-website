import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const navigate=useNavigate()
  const location = useLocation(); 
  const navigate2=useNavigate()
const {loginUSer,user,setUser,googleLogin,inputValue, setInputValue}=useContext(AuthContext)

const [errors,setErrors]=useState({})
  const handleLogin=(e)=>{
    e.preventDefault()
    const email=e.target.email.value
    const password=e.target.password.value
   // console.log(email,password)
    loginUSer(email,password)
    .then((result) => {
      setUser(result)
     //  console.log(result)
     toast.success("successfuly login")
       navigate(location?.state?location.state:"/")
      })
      .catch((error) => {
 //   console.log(error.message)
    setErrors({...errors,login:error.code})
    toast.error("failed to  login")
      })
        }
  const googleHandle=()=>{
    googleLogin()
    .then((result) => {
      setUser(result)

      localStorage.setItem("userName",JSON.stringify(result.user.displayName))
      localStorage.setItem("profileUrl",JSON.stringify(result.user.photoURL))
   
      toast.success("successfuly login with google")
      }).catch((error) => {
        const errorCode = error.code;
       // console.log(errorCode)
        
      });
      navigate2(location?.state?location.state:"/")
  }
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update state
  };


    return (
        <div className=" md:w-1/2 mx-auto">
             <form onSubmit={handleLogin} className="card-body">
              <h2 className="text-2xl font-semibold">Login Form</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={handleInputChange}  name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input    name="password" type="password" placeholder="password" className="input input-bordered" required />
          {
            errors.login&&      <label className="label">
                 <h2 className="text-sm text-red-500">{errors.login}
                 
                 </h2>
          </label>
          }
          <label className="label">
            <NavLink to="/forget"  className="label-text-alt link link-hover">Forgot password?</NavLink>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        
        </div>
      </form>
      <button onClick={googleHandle} className="btn btn-ghost">Login With <img className="w-10 h-10" src="https://i.postimg.cc/KvQScgQW/search.png" alt="" /></button>

      <h2>If You Are New Plese <NavLink state={location.pathname} to="/register" className="text-red-600 ">Register</NavLink></h2>
        </div>
    );
};

export default Login;