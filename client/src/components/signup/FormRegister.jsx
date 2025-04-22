function FormRegister() {
  return (
    <>
      <h1 className="text-4xl font-semibold text-center">Sign Up</h1>
      <form>
        <div>
          <label htmlFor="fullName" className="">
            Name
          </label>
          <input type="text" id="fullName" placeholder="Full name" className="w-full p-4 text-lg rounded-lg" />
        </div>

        <div>
          <label htmlFor="username" className="block text-left">
            Username
          </label>
          <input type="text" id="username" placeholder="Username" className="w-full p-4 text-lg rounded-lg" />
        </div>

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
          Already have an account?
          <a href="/login" className="text-black underline font-bold ml-2">
            Log in
          </a>
        </p>
      </form>
    </>
  );
}

export default FormRegister;
