import About from "./About/About";
import Articles from "./Articles/Articles";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import FeaturedClasses from "./FeaturedClass/FeaturedClasses";
import Success from "./Stories/Success";
import Trainer from "./Trainer/Trainer";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Featured></Featured>
          <About></About>
          <FeaturedClasses></FeaturedClasses>
          <Success></Success>
          <Articles></Articles>
          <Trainer></Trainer>
        </div>
    );
};

export default Home;