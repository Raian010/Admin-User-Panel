import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Shared from "../../../Components/Shared/Shared";



const About = () => {
    return (
       <div>
         <Shared heading={"Empowering fitness"} sub={"Discover our journey to health"}></Shared>
        <div className=" w-2/3 mx-auto mt-5">
        <Carousel className="text-center">
        <div>
            <img src="https://i.postimg.cc/tJkk0Jcq/fitness-gym-training-facebook-cover-web-banner-psd-template-265396-140.jpg" />
         
        </div>
        <div>
            <img src="https://i.postimg.cc/hv2LywJh/fitness-gym-youtube-thumbnail-web-banner-187711-414.jpg" />
         
        </div>
        <div>
            <img src="https://i.postimg.cc/7LSg8bCF/fitness-gym-best-youtube-video-thumbnail-web-banner-new-design-2022-556601-66.jpg" />
        
        </div>
        <div>
            <img src="https://i.postimg.cc/9MpZ0SY1/fitness-gym-youtube-video-thumbnail-social-media-web-banner-template-673898-314.jpg" />
         
        </div>
       
       
    </Carousel>
        </div>
       </div>
    );
};

export default About;