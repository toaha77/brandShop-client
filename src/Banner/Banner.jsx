import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mt-6">
      <div
        className="hero h-[85vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/HTqg1Vf/pexels-pixabay-164634.jpg)",
        }}
      >
        <div className=" hero-overlay bg-opacity-90 "></div>
        <div className="    ">
          <div className="text-white ">
            <p className="text-blue-500 text-xl"> Plan your trip now</p>
            <h1 className="text-5xl font-bold ">Explore the world with <br /> comfortable car</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to='/'>
              <button className="btn text-white bg-blue-500 hover:bg-blue-500 ">Choose a car</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
