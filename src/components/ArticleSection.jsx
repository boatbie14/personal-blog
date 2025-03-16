import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

function ArticleSection() {
  const articleData = [
    {
      id: 1,
      title: "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do",
      excerpt:
        "Dive into the curious world of cat behavior, exploring why cats knead, purr, and chase imaginary prey. This article helps pet owners decode their feline's actions and understand how their instincts as hunters shape their daily routines.",
      image: "../assets/images/blog/blog-img1.jpeg",
      category: "Cat",
      authorImage: "../assets/images/blog/blog-img1.jpeg",
      authorName: "Kittiphat",
      launchDate: "11 September 2024",
      url: "#",
    },
    {
      id: 2,
      title: "The Fascinating World of Cats: Why We Love Our Furry Friends",
      excerpt:
        "Cats have captivated human hearts for thousands of years. Whether lounging in a sunny spot or playfully chasing a string, these furry companions bring warmth and joy to millions of homes. But what makes cats so special? Let’s dive into the unique traits, behaviors, and quirks that make cats endlessly fascinating.",
      image: "../assets/images/blog/blog-img1.jpeg",
      category: "Cat",
      authorImage: "../assets/images/blog/blog-img1.jpeg",
      authorName: "Kittiphat",
      launchDate: "11 September 2024",
      url: "#",
    },
  ];

  const countExcerpt = (text) => {
    if (text.length <= 90) {
      return text;
    }
    return text.substring(0, 90) + "...";
  };

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
          <div id="article-list" className="flex flex-col sm:flex-row gap-12 sm:gap-8 pt-6 pb-20">
            {articleData.map((article) => {
              return (
                <div key={article.id} className="card flex flex-col flex-1 gap-4 w-full sm:w-1/2">
                  <a href={article.url}>
                    <img src={article.image} className="article-img rounded-2xl" />
                  </a>
                  <div className="category-badge w-fit bg-[#D7F2E9] text-[#12B279] px-3 py-1 rounded-full">{article.category}</div>
                  <a href={article.url}>
                    <h3 className="article-title text-xl font-semibold leading-7">{article.title}</h3>
                  </a>
                  <p className="text-sm">{countExcerpt(article.excerpt)}</p>
                  <div className="card-info-wrap flex">
                    <img src={article.authorImage} className="w-6 h-6 mr-4 rounded-full" />
                    <span className="pr-4 font-medium">{article.authorName}</span>
                    <span className="pl-4 text-[#75716B] font-medium border-l border-[#DAD6D1]">{article.launchDate}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ArticleSection;
