import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { AiFillStar } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Details = () => {
  const [copy,setCopy]=useState(false)
    const brands=useLoaderData()
    const {id}=useParams()
const targetBrand=brands.find(brand=>brand._id==id)

    const {
        _id, brand_name, rating,description,brand_logo,coupons, shop_Link, category, isSaleOn  } = targetBrand
        return (
            <div className="max-w-lg mx-auto my-10 p-6 border rounded-lg shadow-lg bg-white">
              <div className="flex justify-center mb-4">
                <img
                  src={brand_logo}
                  alt={brand_name}
                  className="w-52 h-52 object-cover rounded"
                />
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-2">{brand_name}</h1>
                <div className="flex justify-center items-center gap-1 text-yellow-500 mb-4">
                  <AiFillStar />
                  <span className="text-lg font-medium">{rating}</span>
                </div>
                <p className="text-gray-600 mb-4">{description}</p>
                {isSaleOn && (
                  <div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg mb-4 animate-bounce">
                    🎉 Sale is On! Don't miss out! 🎉
                  </div>
                )}
              </div>
              <div className="mt-6">
                <h2 className="text-lg font-semibold mb-3">Available Coupons:</h2>
                <ul className="space-y-3">
                  {coupons.map((coupon, index) => (
                    <li
                      key={index}
                      className="border p-3 rounded-lg shadow-sm hover:shadow-md"
                    >
                     <div className="flex items-center justify-center gap-2">
                     <p className="text-blue-500 font-bold">{coupon.coupon_code}</p>
                      <CopyToClipboard onCopy={() => {
                    setCopy(true); 
                    setTimeout(() =>
                       setCopy(false), 2000);
                    toast.success("successfuly copyed!")
                  }} text={coupon.coupon_code}>
                        
                        <button
                    className={`px-3 py-1 rounded-md ${
                      copy
                        ? "bg-green-500 text-white"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                  >
                    {copy ? "Copied!" : "Copy"}
                  </button>
                          </CopyToClipboard>
                     </div>
                      <p className="text-gray-700">{coupon.description}</p>
                      <p className="text-sm text-gray-500">
                        Expiry Date: {coupon.expiry_date}
                      </p>
                      <p className="text-sm text-gray-500">{coupon.condition}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        };
        

export default Details;