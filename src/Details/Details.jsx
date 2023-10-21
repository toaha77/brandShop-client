import { useLoaderData } from "react-router-dom";
import DisplayAddProduct from "../AddProduct/DisplayAddProduct";
import BRand from "../AddProduct/BRand";
 
 
const Details = () => {
  const loader = useLoaderData()
  
  console.log(loader);
    return (
        <div className="container mx-auto mt-4">
              <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full h-[400px]">
      <img src='/public/pexels-jesse-zheng-1213294.jpg' className="w-full h-[400px]" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full h-[400px]">
      <img src="/public/pexels-mike-bird-170811.jpg" className="w-full h-[400px]" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1"   className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full h-[400px]">
      <img src="/public/pexels-mike-noga-3608542.jpg" className="w-full h-[400px] " />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide4" className="carousel-item relative w-full h-[400px]">
      <img src="/public/pexels-jesse-zheng-1213294.jpg" className=" w-full h-[400px] " />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
  <div>
     <BRand></BRand>
    <DisplayAddProduct></DisplayAddProduct>
  </div>
        </div>
    );
};

export default Details;