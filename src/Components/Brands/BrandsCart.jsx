import { AiFillStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const BrandsCart = ({brand}) => {
    const {
        _id, brand_name, rating,description,brand_logo,coupons, shop_Link, category, isSaleOn  } = brand
    return (
        <div className="border p-4 rounded-lg shadow-lg flex items-start gap-4 bg-white">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="w-16 h-16 object-cover rounded"
        />

        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-lg font-semibold">{brand.brand_name}</h2>
            <div className="flex items-center gap-1">
              <AiFillStar className="text-yellow-500" />
              <span>{brand.rating}</span>
            </div>
          </div>

          <p className="text-gray-600 mb-2">{brand.description}</p>

          {brand.isSaleOn && (
            <p className="text-red-500 font-bold animate-bounce">
              Sale is On!
            </p>
          )}
        </div>
        <NavLink to={`/brands/details/${_id}`}
         
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 self-start"
        >
          View Coupons
        </NavLink>
      </div>
    );
  };

export default BrandsCart;