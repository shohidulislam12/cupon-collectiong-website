import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const navigate=useNavigate()
    const handleUpdate=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const photo=e.target.photo.value
       // console.log(photo,name)
        localStorage.setItem('userName',JSON.stringify(name))
        localStorage.setItem('profileUrl',JSON.stringify(photo))
        toast.success("successfully your update profile")
        navigate('/myProfile')
    }
    return (
        <div className="md:w-1/2 mx-auto">
             <form onSubmit={handleUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name </span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input name="photo" type="text" placeholder="Photo Url" className="input input-bordered" required />

        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Update Profile</button>
        </div>
      </form>
        </div>
    );
};

export default UpdateProfile;