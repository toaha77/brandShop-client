 import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import Works from "../Works/Works";

 
const Home = () => {
    
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <Brand></Brand>
            <Works></Works>
        </div>
    );
};

export default Home;