import { useLoaderData } from "react-router-dom";
import cuponimg from "../../assets/couponpile.jpg"
import TopBrands from "./TopBrands";
import BrandsonSell from "./BrandsonSell";
import FeaturedCoupons from "../Additional/FeaturedCoupons";
import GetOverview from "../Additional/GetOverview";
const Banner = () => {
    const brands=useLoaderData()

    return (
<div>
<div className="carousel w-full h-[500px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://i.postimg.cc/3wQdHMwy/errr.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item h-[500px] relative w-full">
    <img
      src="https://i.postimg.cc/y8F7YF0L/sider2.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item h-[500px] relative w-full">
    <img
      src="https://i.postimg.cc/Jn28MJQT/dfagbsdnshf.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item h-[500px] relative w-full">
    <img
      src="https://i.postimg.cc/fWqyRSLQ/dsfBvgdf.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

<TopBrands brands={brands}></TopBrands>
<BrandsonSell brands={brands}></BrandsonSell>
<FeaturedCoupons brands={brands}></FeaturedCoupons>
<GetOverview brands={brands}></GetOverview>
</div>
    );
};

export default Banner;