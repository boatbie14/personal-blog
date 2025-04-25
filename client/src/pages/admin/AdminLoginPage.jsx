function AdminLogin() {
  return (
    <div className="row min-h-full flex">
      <div className="container">
        <div className="bg-[#EFEEEB] w-[600px] m-auto py-10 px-28 rounded-2xl">
          <div className="text-center text-[#F2B68C]">Admin panel</div>
          <h1 className=" text-4xl text-center font-semibold pt-4 pb-8">Log in</h1>

          <form id="login-form" className="flex flex-col gap-6">
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="black-btn">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
