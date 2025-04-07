import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { changeDateFormat } from "@/utils/changeDateFormatUtils";
import Lottie from "lottie-react";
import loadingLottie from "../lotties/loading.json";

function BlogCard({ fliterCategory, page, updateHasMore }) {
  const [blogData, setBlogData] = useState([]);
  const [changeCategory, setChangeCategory] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchBlogData();
  }, []);

  useEffect(() => {
    setChangeCategory(true);
    setBlogData([]);
  }, [fliterCategory]);

  useEffect(() => {
    fetchBlogData();
    setHasMore(true);
    setChangeCategory(false);
  }, [changeCategory]);

  useEffect(() => {
    fetchBlogData();
  }, [page]);

  useEffect(() => {
    updateHasMore(hasMore);
  }, [hasMore]);

  async function fetchBlogData() {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://blog-post-project-api.vercel.app/posts?category=${fliterCategory}&page=${page}`);

      if (page === 1 || changeCategory) {
        setBlogData(response.data.posts);
      } else {
        setBlogData((prev) => [...prev, ...response.data.posts]);
      }

      if (page >= response.data.totalPages) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function countExcerpt(description) {
    if (description.length <= 90) {
      return description;
    }
    return description.substring(0, 90) + "...";
  }

  return (
    <>
      <div className="text-right text-gray-500 text-sm pt-6">Found {blogData.length} article(s)</div>
      <div id="article-list" className="flex flex-col sm:flex-row sm:flex-wrap gap-12 sm:gap-0 sm:justify-between pt-6 pb-20">
        {blogData.map((article, index) => {
          return (
            <div key={`${article.id}-${index}`} className="card flex flex-col gap-4 w-full sm:w-[calc(50%-16px)] sm:pb-10">
              <div className="w-full h-[236px] md:h-[516px]">
                <Link to={`/post/${article.id}`}>
                  <img src={article.image} className="article-img w-full h-full object-cover rounded-2xl" />
                </Link>
              </div>
              <div className="category-badge">{article.category}</div>
              <Link to={`/post/${article.id}`} className="post-link">
                <h3 className="article-title text-xl font-semibold leading-7">{article.title}</h3>
              </Link>
              <p className="text-sm">{countExcerpt(article.description)}</p>
              <div className="card-info-wrap flex">
                <img src="/assets/images/blog/blog-img1.jpeg" className="w-6 h-6 mr-4 rounded-full" />
                <span className="pr-4 font-medium">{article.author}</span>
                <span className="pl-4 text-[#75716B] font-medium border-l border-[#DAD6D1]">{changeDateFormat(article.date)}</span>
              </div>
            </div>
          );
        })}
        {isLoading ? (
          <Lottie animationData={loadingLottie} style={{ width: 200, height: 200, margin: "auto" }} loop={true} autoplay={true} />
        ) : null}
      </div>
    </>
  );
}

export default BlogCard;
