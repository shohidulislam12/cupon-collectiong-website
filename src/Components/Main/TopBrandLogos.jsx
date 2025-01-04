import { NavLink } from "react-router-dom";

const TopBrandLogos = ({brand}) => {
    const {brand_name,brand_logo}=brand

    return (
<div>
            <NavLink to={`/brands/details/${brand._id}`}>
            <span className="flex flex-col gap-6 ">
            <img className="w-40 h-40" src={brand_logo} alt={brand_name} />
            <h2 className="text-2xl font-semibold">{brand_name}</h2>
            </span>
        </NavLink>
</div>
    );
};

export default TopBrandLogos;