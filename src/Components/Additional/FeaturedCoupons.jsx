
import FeaturedCouponsCart from "./FeaturedCouponsCart";

const FeaturedCoupons = ({brands}) => {

    return (
        <div className="my-10">
            <h2 className="text-2xl font-semibold my-10">Featured Coupons</h2>
         <div className="grid md:grid-cols-3 animate__infinite	infinite animate__delay-3s	3s animate__animated animate__pulse grid-cols-1 gap-5">
         {
            brands.slice(0,6).map((brand,ind)=><FeaturedCouponsCart key={ind} brand={brand}></FeaturedCouponsCart>)
         }
         </div>
        </div>
    );
};
export default FeaturedCoupons;