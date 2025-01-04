import { NavLink, useNavigate } from "react-router-dom";
import coponlogo from "../../assets/coupon.png"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const {user,setUser,loader,setLoader,name,logOutUSer}=useContext(AuthContext)
 const [userName, setUserName] = useState("Guest");
 const [userPic, setUserPic] = useState(null);
 // Load user data from localStorage when user changes
 useEffect(() => {
   if (user) {
     try {
       const storedUserName = localStorage.getItem("userName");
       const storedUserPic = localStorage.getItem("profileUrl");
       setUserName(storedUserName ? JSON.parse(storedUserName) : "Guest");
       setUserPic(storedUserPic ? JSON.parse(storedUserPic) : null);
     } catch (error) {
     //  console.error("Error parsing localStorage data:", error);
     }
   }
 }, [user]);

  const navigate=useNavigate()
    const navlist=
    <div className="flex gap-3 md:flex-row font-bold  flex-col">
<NavLink to="/">Home  </NavLink>
<NavLink to="/brands">Brands</NavLink>
{
  user&&<NavLink to="/myProfile"> my-profile </NavLink>
}

<NavLink to="/about"> About Dev</NavLink>
    </div>
       {/* Show a loader when loading */}
       const handleOut=()=>{
        logOutUSer()
        .then((result) => {
          setUser(null)
        //  console.log("success logOut", result)
        toast.success("successfuly loged out")
               
        }).catch((error) => {
    
        });
      }
   //toggle cart
    const [showDetails, setShowDetails] = useState(false);
    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };
      



    return (
<div className="navbar bg-blue-700 md:text-white text-black  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
  {
   navlist
   }
      </ul>
    </div>
   <img className="w-14 h-14" src={coponlogo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {
        navlist
     }
    </ul>
  </div>
  <div className="navbar-end">

    {/* <div>
         <img src="" alt="" />
         <button onClick={handleOut} className="btn btn-primary">logout</button>
 <h2>Hi, {profName}</h2>
      </div> */}
    {
   
  user?(
    <div className="dropdown dropdown-end text-black">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
           
{  
        <div className="w-10 rounded-full">
       <img
           alt="profile"
           src={userPic} />
 
        
       </div>
}
    </div>
    <ul
      tabIndex={0}
      className="menu menu-sm  flex items-center dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
    
      <li>
      {  <h2>Welcome,{userName}</h2>
      }
      </li>
      <li onClick={handleOut} className="btn"><a >Logout</a></li>
    </ul>
  </div>



):
      (<NavLink to='/login' className="btn btn-ghost">Login</NavLink>)
    }
    
  </div>
</div>
    );
};

export default Navbar;