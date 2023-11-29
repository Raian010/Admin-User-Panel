import { Link } from "react-router-dom";


const Banner = () => {
    
    return (
        <div className="hero min-h-[80vh] mt-10" style={{backgroundImage: 'url(https://i.postimg.cc/Dy1xfSBv/pngtree-fitness-exercise-run-banner-background-image-255468.jpg)'}}>
  <div className="bg-opacity-10"></div>
  <div className="max-w-xl text-center md:text-end lg:ml-80 text-black">
    <div>
      <h1 className="mb-5 md:text-5xl text-2xl font-bold">Elevate Your Fitness Journey</h1>
      <p className="mb-5">Discover a stronger, healthier you with our tailored fitness programs. Unleash your potential and embrace a lifestyle of wellness. Let us embark on this transformative journey together!</p>
      <Link to="/classes" className="btn bg-purple-400">Classes Page</Link>
    </div>
  </div>
</div>
    );
};

export default Banner;