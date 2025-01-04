import { NavLink } from "react-router-dom";

const FeaturedCouponsCart = ({brand}) => {
    const {
        _id, brand_name, rating,description,brand_logo,coupons, shop_Link, category, isSaleOn  } = brand
    return (
        <NavLink to={`/brands/details/${brand._id}`} className="flex justify-center items-center">
        <div className="relative bg-orange-400 text-white w-80 h-40 rounded-md shadow-lg flex flex-col items-center p-4">
          {/* Left Promo Section */}
          <div className="absolute top-0 bottom-0 left-0 bg-orange-500 w-16 flex flex-col justify-center items-center text-sm text-center rounded-l-md">
            <span className="rotate-90 font-bold text-white tracking-wider">
            {coupons[0].coupon_type}
            </span>
          </div>
  
          {/* Main Coupon Section */}
          <div className="flex flex-col items-center justify-center gap-2 w-full ml-12">
          <div className="bg-orange-300 py-1 px-4 rounded-md">
              <span className="font-semibold">{coupons[0].coupon_code}</span>
            </div>
            <h3 className="text-2xl p-2 font-bold text-red-600"> {coupons[0].description}</h3>
         
        
            <p className="text-xs text-center mb-2">
              {coupons[0].condition}
            </p>
          </div>
        </div>
      </NavLink>
    );
  };

export default FeaturedCouponsCart;