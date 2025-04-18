function AuthorCard() {
  return (
    <div className="author-wrap sticky">
      <div className="author-info-wrap">
        <img src="https://placehold.co/100x100" className=" rounded-full w-[44px] h-[44px]" />
        <div className="author-info">
          <p>Author</p>
          <h3>Thompson D.</h3>
        </div>
      </div>
      <hr />
      <div className="author-detail">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>

        <p>
          Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur.
        </p>
      </div>
    </div>
  );
}

export default AuthorCard;
