import { useEffect, useState } from "react";
import Shared from "../../../Components/Shared/Shared";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("/articles.json")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);
  return (
    <div>
      <Shared
        heading={"Discover insights & inspiration"}
        sub={"Explore our latest blogs and articles for fitness & nutrition"}
      ></Shared>

      <div className="flex flex-col lg:flex-row gap-5 mt-10">
        <div className="card lg:w-2/3 bg-base-100 shadow-xl">
          <figure>
            <img className="w-full" src="https://i.postimg.cc/s2NFsmYJ/morning-routine-for-success-400x240.jpg" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Unlocking Morning Routines</h2>
            <p>
              Embark on a journey to unlock the potential of morning routines.
              Discover how cultivating intentional habits in the early hours can
              positively impact your mindset, productivity, and overall
              well-being. Dive into practical tips and inspiring stories to
              kickstart your day with purpose.
            </p>
            <p>December 15, 2023</p>
            <figure>
            <img className="w-full" src="https://i.postimg.cc/XvDymLBc/are-you-missing-out-discover-the-morning-routine-of-successful-people-2-768x512.jpg" />
          </figure>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-5">
          {articles.map((article) => (
            <div key={article.id} className="card md:w-96 h-[600px] bg-base-100 shadow-xl">
              <figure>
                <img className="h-[250px] w-full" src={article.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{article.title}</h2>
                <p>{article.description}</p>
                <p>{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
