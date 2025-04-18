function ReviewPost() {
  return (
    <div className="review-container">
      <div className="review-wrap">
        <div className="review-info flex flex-row gap-4 ">
          <img src="  https://placehold.co/44" className=" rounded-full w-[44px]  h-[44px]" />
          <div>
            <h2>Jacob Lash</h2>
            <p className="create-at">12 September 2024 at 18:30</p>
          </div>
        </div>
        <div className="review-detail">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>

      <div className="review-wrap">
        <div className="review-info flex flex-row gap-4 ">
          <img src="  https://placehold.co/44" className=" rounded-full w-[44px]  h-[44px]" />
          <div>
            <h2>Jacob Lash</h2>
            <p className="create-at">12 September 2024 at 18:30</p>
          </div>
        </div>
        <div className="review-detail">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewPost;
