function CommentForm() {
  return (
    <div className="comment-wrap">
      <form className="flex flex-col gap-2">
        <label className="text-[#75716B]">Comment</label>
        <textarea></textarea>
        <div className="text-left md:text-right">
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
