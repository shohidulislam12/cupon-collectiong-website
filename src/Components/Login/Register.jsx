import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FaCheckSquare } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
const Register = () => {
    const navigate=useNavigate()
    const [show,setShow]=useState(false)
    
    const {creatUSer,setUser,setname,updateUserprofile}=useContext(AuthContext)
    const [errors,setErrors]=useState({})
    const validatePassword = (password) => {
      if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter.";
      }
      if (!/[a-z]/.test(password)) {
        return "Password must contain at least one lowercase letter.";
      }
      if (password.length < 6) {
        return "Password must be at least 6 characters long.";
      }
      return ""; // Return empty string if password is valid
    };


    const handleregister=(e)=>{

e.preventDefault()
const name=e.target.name.value
setname(name)
if(name.length<5){
  setErrors({...errors,name:"name must be gatter than 5 charecter"})
  return 
}
//set name to local storage
localStorage.setItem("userName", JSON.stringify(name));



const email=e.target.email.value
const password=e.target.password.value
const conpassword=e.target.conpassword.value
const passwordError = validatePassword(password);
if (passwordError) {
  setErrors(passwordError);
   toast.error('enter valid password ')
   return
}
if(password!==conpassword){
  setErrors(null)
  setErrors({...errors,conpass:"Plese enter same Password"})
  toast.error("Plese enter same Password")
  return 
}
const photo=e.target.photo.value

//set profile picture 
localStorage.setItem("profileUrl", JSON.stringify(photo));

// console.log(name,email,password)
creatUSer(email,password)
.then((result) => {      
 //  console.log(result)

   
   updateUserprofile({displayName:name,photoURL:photo})
   navigate('/')
   toast.success("Registration successful!")
   setUser(result)
   .then(()=>{
    navigate('/')
    setUser(result)
   
    .catch((err)=>{
   //   console.log(err.message)
    })
   })
  })
  .catch((error) => {
// console.log(error.message)
setErrors({...errors,login:error.code})
  })

    }
    return (
        <div className=" md:w-1/2 mx-auto">
        <form onSubmit={ handleregister} className="card-body">
        <h2 className="text-2xl font-semibold">Registration Form</h2>
        <div className="form-control">
     <label className="label">
       <span className="label-text">Name</span>
     </label>
     <input type="text"  name="name" placeholder="name" className="input input-bordered" required />
     {
            errors.name&&      <label className="label">
                 <h2 className="text-sm text-red-500">{errors.name}</h2>
          </label>
          }
   </div>
   <div className="form-control">
     <label className="label">
       <span className="label-text">Photo Url</span>
     </label>
     <input type="text"  name="photo" placeholder="photo url" className="input input-bordered " required />
   </div>
   <div className="form-control">
     <label className="label">
       <span className="label-text">Email</span>
     </label>
     <input type="email"  name="email" placeholder="email" className="input input-bordered" required />
   </div>
   <div className="form-control">
     <label className="label">
       <span className="label-text">Password</span>
     </label>
     <input type={show?"password":"text"} name="password" placeholder="password" className="input input-bordered" required />

   </div>
   <div className="form-control relative">
     <label className="label">
       <span className="label-text">Confirm Password</span>
     </label>
     <input type={show?"password":"text"} name="conpassword" placeholder="confirm password" className="input input-bordered" required />
 {/* toggle password */}

{/* error  */}
{
  errors.conpass&&      <label className="label">
  <h2 className="text-sm text-red-500">{errors.conpass}</h2>
   </label>
 }

   </div>

   <div className="text-left flex items-center gap-3 ">
          
          {
 show?<span className="text-left flex items-center gap-3 " onClick={()=>setShow(false)}><MdCheckBoxOutlineBlank className="text-green-500" />Show Password</span>:  <span className="text-left flex items-center gap-3 " onClick={()=>setShow(true)}>< FaCheckSquare className="text-green-400" />Hide Password</span>
}
            
 </div>
   <div className="form-control mt-6">
     <button className="btn btn-primary">Register</button>
     <h2>If You Already registered Plese <NavLink to="/login" className="text-green-600 ">login</NavLink></h2>
   </div>
   {
            errors.login&&      <label className="label">
                 <h2 className="text-sm text-red-500">{errors.login}</h2>
          </label>
          }
 </form>
   </div>
    );
};

export default Register;