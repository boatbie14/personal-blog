import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "./ui/button";

function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [selectCategory, setSelectCategory] = useState("");
  const [page, setPage] = useState(1);
  const [showViewMoreButton, setShowViewMoreButton] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [hasSearchResult, setHasSearchResult] = useState(false);

  useEffect(() => {
    if (searchText.length >= 3) {
      getSearchResult(searchText);
    } else {
      setHasSearchResult(false);
    }
  }, [searchText]);

  function handleSelectCategory(e) {
    let newSelectCategory = "";
    if (e.target.value === "") {
      newSelectCategory = "";
    } else {
      newSelectCategory = e.target.value;
    }
    setSelectCategory(newSelectCategory);
    setPage(1);
  }

  function handleViewMore() {
    setPage((prevPage) => prevPage + 1);
  }

  function updateHasMore(hasMoreValue) {
    setShowViewMoreButton(hasMoreValue);
  }

  function handleSearchInput(e) {
    setSearchText(e.target.value);
  }

  async function getSearchResult(text) {
    try {
      const response = await axios.get(`https://blog-post-project-api.vercel.app/posts?keyword=${text}`);
      setSearchResult(response.data.posts);
      setHasSearchResult(true);
    } catch (e) {
      console.log("Can't fetch data");
    }
  }

  console.log(searchResult);

  return (
    <>
      <section id="article-section">
        <div className="container py-4">
          <h2 className="font-semibold text-2xl leading-8">Latest articles</h2>
        </div>
        <div id="article-search">
          <div className="container bg-[#EFEEEB] py-4 px-8 rounded-none md:rounded-xl flex flex-col sm:flex-row gap-4 items-center">
            <div className="filter-btn-container hidden md:flex md:w-3/4 text-[#75716B] ">
              <div className="filter-btn-wrap flex flex-row space-x-2">
                <button
                  className={`py-3 px-5 cursor-pointer ${selectCategory === "" ? "active" : ""}`}
                  onClick={handleSelectCategory}
                  value=""
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`py-3 px-5 cursor-pointer ${selectCategory === category ? "active" : ""}`}
                    onClick={handleSelectCategory}
                    value={category}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="searchArticle w-full md:w-1/4 relative">
              <div>
                <Input
                  type="text"
                  placeholder="Search"
                  className="bg-white placeholder:text-[#75716B] placeholder:text-[16px] py-5 pr-3 pl-4"
                  onChange={handleSearchInput}
                  value={searchText}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  {hasSearchResult ? (
                    <X
                      className="h-5 w-5 text-[#26231E] bg-[#F9F8F6] cursor-pointer z-50"
                      onClick={(e) => {
                        e.stopPropagation(); // ป้องกัน event bubble ไปที่ element อื่น
                        setHasSearchResult(false);
                        setSearchText("");
                      }}
                    />
                  ) : (
                    <Search className="h-5 w-5 text-[#26231E]" />
                  )}
                </div>
              </div>

              {/* Search Result */}

              {hasSearchResult ? (
                <>
                  {searchResult.length > 0 ? (
                    <div className="bg-[#F9F8F6] shadow-2xl p-2 w-full mt-1 rounded-sm absolute flex flex-col">
                      {searchResult.slice(0, 4).map((data) => {
                        return (
                          <Link
                            to={`/post/${data.id}`}
                            key={data.id}
                            href="#"
                            className="search-link text-md p-2 block hover:bg-[#DAD6D1] hover:text-[#43403B] rounded-sm"
                          >
                            {data.title}
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="bg-[#F9F8F6] shadow-2xl p-4 w-full mt-1 rounded-sm absolute flex flex-col gap-4">Not Found Post</div>
                  )}
                </>
              ) : (
                <></>
              )}

              {/* Search Result */}
            </div>
            <div className="selectCategory w-full md:hidden">
              <p className="pb-[4px]">Category</p>
              <Select onValueChange={handleSelectCategory}>
                <SelectTrigger
                  id="category"
                  className="w-full bg-white py-5 pr-3 pl-4 data-[placeholder]:!text-[#75716B] data-[placeholder]:!text-base [&_svg]:!text-[#26231E] [&_svg]:!opacity-100"
                >
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="container">
          <BlogCard fliterCategory={selectCategory} page={page} updateHasMore={updateHasMore} />
        </div>

        <div className="container pb-20 text-center">
          {showViewMoreButton ? (
            <button className="border-1 border-black py-4 px-10 rounded-full cursor-pointer" onClick={handleViewMore}>
              View More
            </button>
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
}

export default ArticleSection;
