import BrandsonSellCart from "./BrandsonSellCart";

const BrandsonSell = ({brands}) => {

    const availablebrand=brands.filter((brand)=>brand.isSaleOn===true)

    return (
        <div className="my-10">
            <h2 className="text-2xl font-semibold my-10">Brands on Sell</h2>
         <div className="grid md:grid-cols-3  grid-cols-1 gap-5">
         {
            availablebrand.map((brand,ind)=><BrandsonSellCart key={ind} brand={brand}></BrandsonSellCart>)
         }
         </div>
        </div>
    );
};

export default BrandsonSell;