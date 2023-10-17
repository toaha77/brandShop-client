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
            <h1 className="mb-5 text-6xl font-bold">Find Your <br /> <span className="text-blue-500">Perfect </span> Car</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
