import { NavLink } from "react-router-dom";

const BrandsonSellCart = ({brand}) => {
    return (
        <div className="border border-gray-300 rounded-lg shadow-lg p-4 bg-white">
        <div className="flex items-center justify-center mb-4">
          <img
            src={brand.brand_logo}
            alt={`${brand.brand_name} Logo`}
            className="w-40 h-40 object-contain"
          />
        </div>
        <h3 className="text-lg font-semibold text-center">{brand.brand_name}</h3>
        <p className="text-sm text-gray-500 text-center mt-2">
          Category: <span className="font-medium">{brand.category}</span>
        </p>
        <p className="text-sm my-4 text-gray-500 text-center mt-2">
          Total Coupons: <span className="font-medium">{brand.coupons.length}</span>
        </p>
     <button>
     <NavLink to={`/brands/details/${brand._id}`} className="w-full mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          View Coupons
        </NavLink>
     </button>
      </div>
    );
};

export default BrandsonSellCart;