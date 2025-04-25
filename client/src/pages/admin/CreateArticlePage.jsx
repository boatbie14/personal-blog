import AdminLayout from "@/layouts/AdminLayout";
import { Image } from "lucide-react";

function CreateArticle() {
  return (
    <AdminLayout title="Create article" saveButton="Save and publish" draftButton="Save as draft">
      <form id="article-form">
        <div className="flex flex-col gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Thumbnail image</label>
            <div className="flex flex-row items-center gap-8">
              <div
                className="w-[350px] h-[200px] bg-gray-100 border border-gray-200 rounded-md flex items-center justify-center"
                id="image-preview"
              >
                <Image className="text-gray-400" />
              </div>
              <div>
                <label
                  htmlFor="thumbnail-upload"
                  className="inline-block px-5 py-2 border border-gray-300 rounded-full text-sm cursor-pointer"
                >
                  Upload thumbnail image
                </label>
                <input id="thumbnail-upload" type="file" className="hidden" />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="category" className="block text-gray-700 text-sm font-medium mb-2">
              Category
            </label>
            <select
              id="category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent appearance-none"
            >
              <option value="" disabled selected>
                Select category
              </option>
              <option value="development">Development</option>
              <option value="design">Design</option>
              <option value="technology">Technology</option>
            </select>
          </div>

          <div>
            <label htmlFor="author" className="block text-gray-700 text-sm font-medium mb-2">
              Author name
            </label>
            <input
              type="text"
              id="author"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              defaultValue="Thompson P."
            />
          </div>

          <div>
            <label htmlFor="title" className="block text-gray-700 text-sm font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Article title"
            />
          </div>

          <div>
            <label htmlFor="introduction" className="block text-gray-700 text-sm font-medium mb-2">
              Introduction (max 120 letters)
            </label>
            <textarea
              id="introduction"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent h-32 resize-none"
              placeholder="Introduction"
            ></textarea>
          </div>

          <div>
            <label htmlFor="content" className="block text-gray-700 text-sm font-medium mb-2">
              Content
            </label>
            <textarea
              id="content"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent h-96 resize-none"
              placeholder="Content"
            ></textarea>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
}

export default CreateArticle;
