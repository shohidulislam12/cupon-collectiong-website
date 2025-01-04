import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const ForgatePassword = () => {
    const [errors,setErrors]=useState({})
    const navigate=useNavigate()
    const {setPassword,inputValue, setInputValue}=useContext(AuthContext)
    const handleForget=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
      //  console.log(email)
        setPassword(email)
        setPassword(email)
      .then(() => {
        setErrors({});
        navigate("/login")
        toast.success("Check your email to set a new password!");
      })
      .catch((error) => {

      });
  
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value); // Update the state when typing
      };
    return (
        <div>
             <form onSubmit={handleForget} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email"   value={inputValue}  onChange={handleInputChange}type="email" placeholder="email" className="input input-bordered" required />
          {
            errors.reset&&      <label className="label">
                 <h2 className="text-sm text-red-500">{errors.reset}
                 
                 </h2>
          </label>
          }
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Reset PassWord </button>
         <h2>if you have email and password plese  <NavLink to="/login"  className="text-green-500"  > Login</NavLink></h2>
         <h2>if you are new in these website pleese  <NavLink to="/register"  className="text-red-500"  >Register</NavLink></h2>
        </div>
      </form>
        </div>
    );
};

export default ForgatePassword;