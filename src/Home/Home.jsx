 import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import WhyUs from "../WhyUs/WhyUs";
import Works from "../Works/Works";

 
const Home = () => {
    
    
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <Brand></Brand>
            <Works></Works>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;