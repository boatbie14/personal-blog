function BlogCard({ articles }) {
  const countExcerpt = (text) => {
    if (text.length <= 90) {
      return text;
    }
    return text.substring(0, 90) + "...";
  };

  return (
    <div id="article-list" className="flex flex-col sm:flex-row sm:flex-wrap gap-12 sm:gap-0 sm:justify-between pt-6 pb-20">
      {articles.map((article) => {
        return (
          <div key={article.id} className="card flex flex-col gap-4 w-full sm:w-[calc(50%-16px)] sm:pb-10">
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
  );
}

export default BlogCard;
