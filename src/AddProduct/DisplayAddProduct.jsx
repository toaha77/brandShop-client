import { useLoaderData } from "react-router-dom";
import DisplayAddProductCard from "./DisplayAddProductCard";

 
const DisplayAddProduct = () => {
    const displayBrand = useLoaderData()
    // console.log(displayBrand);
    return (
        <div>
          <div className="text-center mt-4 mb-4">
            <h2 className="text-3xl font-semibold">Featured cars  </h2>
            <p className="text-blue-500">You may fall in love</p>
            </div> 
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           {
                displayBrand.map(display => <DisplayAddProductCard key={display._id}
                display = {display}
                ></DisplayAddProductCard>)
            }
           </div>
        </div>
    );
};

export default DisplayAddProduct;