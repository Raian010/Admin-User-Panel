import { Helmet } from "react-helmet-async";
import About from "./About/About";
import Articles from "./Articles/Articles";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import FeaturedClasses from "./FeaturedClass/FeaturedClasses";
import NewsLetter from "./NewaLetter/NewsLetter";
import Success from "./Stories/Success";
import Trainer from "./Trainer/Trainer";


const Home = () => {
    return (
        <div>
          <Helmet>
        <title>Fitness freak | Home</title>
      </Helmet>
          <Banner></Banner>
          <Featured></Featured>
          <About></About>
          <FeaturedClasses></FeaturedClasses>
          <Success></Success>
          <Articles></Articles>
          <NewsLetter></NewsLetter>
          <Trainer></Trainer>
        </div>
    );
};

export default Home;