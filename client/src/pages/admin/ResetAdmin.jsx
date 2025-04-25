import AdminLayout from "@/layouts/AdminLayout";

function ResetPassword() {
  return (
    <AdminLayout title="Reset Password" saveButton="Reset password">
      <form>
        <div className="flex flex-col gap-6">
          <div className="w-1/3">
            <label htmlFor="currentPwd" className="block text-gray-700 text-sm font-medium mb-2">
              Current password
            </label>
            <input
              type="password"
              id="currentPwd"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Type current password.."
            />
          </div>

          <div className="w-1/3">
            <label htmlFor="newPwd" className="block text-gray-700 text-sm font-medium mb-2">
              New password
            </label>
            <input
              type="password"
              id="newPwd"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Type new password.."
            />
          </div>

          <div className="w-1/3">
            <label htmlFor="confirmNewPwd" className="block text-gray-700 text-sm font-medium mb-2">
              Confirm new password
            </label>
            <input
              type="password"
              id="confirmNewPwd"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Type new current password again.."
            />
          </div>
        </div>
      </form>
    </AdminLayout>
  );
}

export default ResetPassword;
