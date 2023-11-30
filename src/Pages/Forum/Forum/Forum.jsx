import { useState } from "react";
import UsePublic from "../../../Hooks/Public/UsePublic";
import { useEffect } from "react";
import { FaCalendar, FaEye } from "react-icons/fa";
import "../Forum/Forum.css";
import { Helmet } from "react-helmet-async";

const Forum = () => {
  const axiosPublic = UsePublic();

  const [pagesItems, setPagesItems] = useState(6);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("final-assignment-server-iota.vercel.app/postsCount")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  const pagesCeil = Math.ceil(count / pagesItems);
  const pages = [...Array(pagesCeil).keys()];
  //   console.log(pages);

  const [currentPage, setCurrentPage] = useState(0);

  const handleChange = (e) => {
    const count = parseInt(e.target.value);
    setPagesItems(count);
  };


  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosPublic
      .get(`/posts?page=${currentPage}&size=${pagesItems}`)
      .then((res) => {
        // console.log(res.data);
        setPosts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, [axiosPublic, pagesItems, currentPage]);

  return (
    <div>
      <Helmet>
        <title>Fitness freak | Community</title>
      </Helmet>
      {loading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {posts.map((post) => (
              <div
                key={post._id}
                className="card md:w-96 bg-base-100 shadow-2xl"
              >
                <div className="card-body space-y-2">
                  <figure>
                    <img className="h-[260px]" src={post.image} />
                  </figure>
                  <h2 className="card-title font-bold h-[56px]">
                    {post.title}
                  </h2>
                  <p className="font-medium flex items-center">
                    <FaCalendar></FaCalendar>{" "}
                    <span className="ml-4">{post.date}</span>
                  </p>
                  <p className="font-medium">{post.content}</p>
                  <p className="font-medium flex items-center">
                    <FaEye></FaEye> <span className="ml-4">{post.views}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            {pages.map((page) => (
              <button
                key={page}
                className={`pagination-button ${
                  currentPage === page ? "selected" : ""
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page + 1}
              </button>
            ))}

            <select onChange={handleChange} name="" id="">
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="7">7</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forum;
