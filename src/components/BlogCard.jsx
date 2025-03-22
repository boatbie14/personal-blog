function BlogCard({ articles }) {
  const countExcerpt = (description) => {
    if (description.length <= 90) {
      return description;
    }
    return description.substring(0, 90) + "...";
  };

  return (
    <div id="article-list" className="flex flex-col sm:flex-row sm:flex-wrap gap-12 sm:gap-0 sm:justify-between pt-6 pb-20">
      {articles.map((article) => {
        return (
          <div key={article.id} className="card flex flex-col gap-4 w-full sm:w-[calc(50%-16px)] sm:pb-10">
            <div className="w-full h-[236px] md:h-[516px]">
              <a href="#">
                <img src={article.image} className="article-img w-full h-full object-cover rounded-2xl" />
              </a>
            </div>
            <div className="category-badge w-fit bg-[#D7F2E9] text-[#12B279] px-3 py-1 rounded-full">{article.category}</div>
            <a href="#">
              <h3 className="article-title text-xl font-semibold leading-7">{article.title}</h3>
            </a>
            <p className="text-sm">{countExcerpt(article.description)}</p>
            <div className="card-info-wrap flex">
              <img src="/assets/images/blog/blog-img1.jpeg" className="w-6 h-6 mr-4 rounded-full" />
              <span className="pr-4 font-medium">{article.author}</span>
              <span className="pl-4 text-[#75716B] font-medium border-l border-[#DAD6D1]">{article.date}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BlogCard;
