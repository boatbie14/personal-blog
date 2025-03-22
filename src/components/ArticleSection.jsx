import { blogPosts } from "./data/blogPosts";
import BlogCard from "./BlogCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

function ArticleSection() {
  return (
    <>
      <section id="article-section">
        <div className="container py-4">
          <h2 className="font-semibold text-2xl leading-8">Latest articles</h2>
        </div>
        <div id="article-search">
          <div className="container bg-[#EFEEEB] py-4 px-8 rounded-none md:rounded-xl flex flex-col sm:flex-row gap-4 items-center">
            <div className="filter-btn-container hidden md:flex md:w-3/4 text-[#75716B] ">
              <ul className="flex flex-row space-x-2">
                <li className="py-3 px-5 active">All</li>
                <li className="py-3 px-5">Highlight</li>
                <li className="py-3 px-5">Cat</li>
                <li className="py-3 px-5">JavaScript</li>
              </ul>
            </div>
            <div className="searchArticle w-full md:w-1/4 relative">
              <Input
                type="text"
                placeholder="Search"
                className="bg-white placeholder:text-[#75716B] placeholder:text-[16px] py-5 pr-3 pl-4"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Search className="h-5 w-5 text-[#26231E]" />
              </div>
            </div>
            <div className="selectCategory w-full md:hidden">
              <p className="pb-[4px]">Category</p>
              <Select>
                <SelectTrigger
                  id="category"
                  className="w-full bg-white py-5 pr-3 pl-4 data-[placeholder]:!text-[#75716B] data-[placeholder]:!text-base [&_svg]:!text-[#26231E] [&_svg]:!opacity-100"
                >
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="container">
          <BlogCard articles={blogPosts} />
        </div>
      </section>
    </>
  );
}

export default ArticleSection;
