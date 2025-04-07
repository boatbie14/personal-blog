import ReactMarkdown from "react-markdown";
import { changeDateFormat } from "@/utils/changeDateFormatUtils";

function PostContent(postData) {
  return (
    <>
      <div className="post-detail">
        <div className="category-badge">{postData.category}</div>
        <span className="pl-4 text-[#75716B] font-medium  border-[#DAD6D1]">{changeDateFormat(postData.date)}</span>
      </div>
      <h1 className="post-title">{postData.title}</h1>

      <div className="post-content">
        <ReactMarkdown>{postData.content}</ReactMarkdown>
      </div>
    </>
  );
}

export default PostContent;
