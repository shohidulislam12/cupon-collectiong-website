import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, NavLink } from "react-router-dom";

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const strUsername=localStorage.getItem('userName')
    const UserNAme=JSON.parse(strUsername)
    const strUserPic=localStorage.getItem('profileUrl')
    const UserPic=JSON.parse(strUserPic)
    const userEmail = user?.email 
   // console.log(userEmail)
    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100">

        <div className="w-full h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Welcome to Your Profile</h1>
        </div>
        <div className="mt-[-50px] w-11/12 md:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col items-center p-6">
            <img
              src={UserPic}
              alt="User Avatar"
              className="w-32 h-32 rounded-full border-4 border-white shadow-md"
            />
            <h2 className="mt-4 text-xl font-bold text-gray-700">{UserNAme}</h2>

            <p className="text-gray-500">{userEmail}</p>
          </div>


          <div>
        
          </div>
          <NavLink to="/user/updateProfile"  className="btn btn-ghost my-10">Update Profile</NavLink>
        </div>
      </div>
    );
  };
  
export default MyProfile;