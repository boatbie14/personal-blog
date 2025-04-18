import useCheckLogin from "@/hooks/useCheckLogin";

function CommentForm() {
  const { showAlert, hideAlert, AlertDialog } = useCheckLogin();

  function checkForm(e) {
    e.preventDefault();
    showAlert();
  }

  return (
    <div className="comment-wrap">
      <form className="flex flex-col gap-2" onSubmit={checkForm}>
        <label className="text-[#75716B]">Comment</label>
        <textarea></textarea>
        <div className="text-left md:text-right">
          <button type="submit">Send</button>
        </div>
      </form>
      <AlertDialog />
    </div>
  );
}

export default CommentForm;
