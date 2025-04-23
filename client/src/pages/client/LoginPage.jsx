import MainLayout from "@/layouts/MainLayout";

function LogIn() {
  return (
    <MainLayout>
      <section className="row min-h-[70vh] flex flex-col">
        <div className="container py-10">
          <div className="form-container">
            <h1 className=" text-5xl font-semibold text-center">Log in</h1>
            <form>
              <div>
                <label htmlFor="email" className="block text-left">
                  Email
                </label>
                <input type="email" id="email" placeholder="Email" className="w-full p-4 text-lg rounded-lg" />
              </div>

              <div>
                <label htmlFor="password" className="block text-left">
                  Password
                </label>
                <input type="password" id="password" placeholder="Password" className="w-full p-4 text-lg rounded-lg" />
              </div>

              <button type="submit" className="black-btn">
                Sign up
              </button>

              <p className="text-center text-lg text-gray-600">
                Don’t have any account?
                <a href="/signup" className="text-black underline font-bold ml-2">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default LogIn;
