import { useLoaderData } from "react-router-dom";
import BrandsCart from "./BrandsCart";

const Brands = () => {
    const brands=useLoaderData()
    return (
        <div>

<h1 className="text-3xl font-bold text-center mb-6">Our Brands</h1>

{/* Search Bar */}
<div className="mb-6">
  <input
    type="text"
    placeholder="Search brands..."
    className="w-full p-3 border rounded-lg"
   
  />
</div>

            {
                brands.map((brand,ind)=><BrandsCart key={ind} brand={brand}></BrandsCart>)
            }
        </div>
    );
};

export default Brands;