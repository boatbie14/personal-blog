import AdminLayout from "@/layouts/AdminLayout";

function CreateCategory() {
  return (
    <AdminLayout title="Create article" saveButton="Save">
      <form id="article-form">
        <div className="flex flex-col w-1/3 gap-6">
          <div>
            <label htmlFor="category" className="block text-gray-700 text-sm font-medium mb-2">
              Category name
            </label>
            <input
              type="text"
              id="category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Enter category name"
            />
          </div>
        </div>
      </form>
    </AdminLayout>
  );
}

export default CreateCategory;
