import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Gallery = () => {

    const [images,setImages] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        fetch('/images.json')
        .then(res => res.json())
        .then(data => {
            setImages(data)
            setLoading(false)
        })
    },[])

    return (
        <div className="mt-10">
             <Helmet>
        <title>Fitness freak | Gallery</title>
      </Helmet>
      <h2 className="text-3xl mb-10 font-bold text-center">
        Our <span className="text-blue-600">Gallery</span>
      </h2> 
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
       {
        loading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : images.map(image => <div className="rounded-xl" key={image.id}>
            <img className="h-[275px]" src={image.image} />

          </div>) }
        </div>
      </div>
        </div>
    );
};

export default Gallery;