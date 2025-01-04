import TopBrandLogos from "./TopBrandLogos";
import Marquee from "react-fast-marquee";

const TopBrands = ({brands}) => {

    return (
  <div className="my-16">
    <h2 className="text-3xl font-semibold my-16">Top Brands </h2>
    <Marquee   pauseOnHover={true}>
    <div className="flex gap-8">
            {
                brands.map((brand,ind)=><TopBrandLogos key={ind} brand={brand}></TopBrandLogos>)
            }
        </div>
    </Marquee>
  </div>
    );
};

export default TopBrands;