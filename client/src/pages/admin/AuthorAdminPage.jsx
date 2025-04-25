import AdminLayout from "@/layouts/AdminLayout";

function AuthorAdmin() {
  return (
    <AdminLayout title="Profile" saveButton="Save">
      <form>
        <div className="flex flex-row items-center gap-8 pb-6">
          <img src="https://placehold.co/350x350" className="w-[120px] h-[120px] rounded-full" />
          <input type="file" />
        </div>

        <div className="flex flex-col gap-6">
          <div className="w-1/3">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              defaultValue="Thompson P."
            />
          </div>

          <div className="w-1/3">
            <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              defaultValue="thompson"
            />
          </div>

          <div className="w-1/3">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              defaultValue="thompson.p@gmail.com"
            />
          </div>

          <div className="w-full">
            <label htmlFor="bio" className="block text-gray-700 text-sm font-medium mb-2">
              Bio (max 120 letters)
            </label>
            <textarea
              id="bio"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent h-32 resize-none"
              defaultValue="I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.

When I'm not writing, I spend time volunteering at my local animal shelter, helping cats find loving homes."
            />
          </div>
        </div>
      </form>
    </AdminLayout>
  );
}

export default AuthorAdmin;
