import "@/styles/postpage.css";
import Navbar from "@/components/Navbar";
import PostImage from "@/components/post/PostImage";
import PostContent from "@/components/post/PostContent";
import AuthorCard from "@/components/post/AuthorCard";
import ReviewPost from "@/components/post/ReviewPost";
import SocialSection from "@/components/post/SocialSection";
import CommentForm from "@/components/post/CommentForm";
import Footer from "@/components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostPage() {
  const { postId } = useParams();

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    getPostData();
  }, []);

  async function getPostData() {
    try {
      const response = await axios.get(`https://blog-post-project-api.vercel.app/posts/${postId}`);
      setPostData(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  return (
    <>
      <Navbar />
      <section id="post-page" className="row">
        <div className="container post-page-img">
          <PostImage image={postData.image} />
        </div>

        <div className="container post-content-wrap">
          <div className="col-left">
            <PostContent category={postData.category} title={postData.title} content={postData.content} date={postData.date} />
          </div>
          <div className="col-right">
            <AuthorCard />
          </div>
        </div>
        <div className="container like-share">
          <div className="col-left">
            <SocialSection likes={postData.likes} />
          </div>
        </div>
        <div className="container">
          <div className="col-left">
            <CommentForm />
            <ReviewPost />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PostPage;
