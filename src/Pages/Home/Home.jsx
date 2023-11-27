import About from "./About/About";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import FeaturedClasses from "./FeaturedClass/FeaturedClasses";
import Success from "./Stories/Success";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Featured></Featured>
          <About></About>
          <FeaturedClasses></FeaturedClasses>
          <Success></Success>
        </div>
    );
};

export default Home;