import "@/styles/profile.css";
import MainLayout from "@/layouts/MainLayout";
import { User, RotateCw } from "lucide-react";

function Profile() {
  return (
    <MainLayout>
      <section className="row">
        <div id="profile-container" className="container">
          <div className="profile-header">
            <img src="https://placehold.co/350x350" className="profile-img60" />
            <span className="name">Kittiphat</span>
            <span className="divider">|</span>
            <span>Profile</span>
          </div>

          {/* Profile Menu */}
          <div className="profile-menu">
            <ul>
              <li>
                <User /> Profile
              </li>
              <li>
                <RotateCw /> Reset password
              </li>
            </ul>
          </div>
          {/* Profile Detail */}
          <div className="profile-detail">
            <form>
              <div className="profile-img flex flex-col">
                <img src="https://placehold.co/350x350" />
                <div>
                  <label for="file-upload" className="custom-file-upload">
                    Upload profile picture
                  </label>
                  <input id="file-upload" type="file" />
                </div>
              </div>
              <hr />
              <div className="flex flex-col gap-6">
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
                  <input type="email" id="email" placeholder="Email" className="w-full p-4 text-lg rounded-lg" disabled />
                </div>

                <button type="submit" className="black-btn">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Profile;
