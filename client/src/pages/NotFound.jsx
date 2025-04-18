import MainLayout from "@/layouts/MainLayout";
import { FiAlertCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <MainLayout>
      <section className="row min-h-[70vh] flex flex-col">
        <div className="container text-center">
          <FiAlertCircle size={120} className="pb-4 m-auto" />
          <p className="pb-4 text-xl">Page Not Found</p>
          <Link to="/">
            <button className="black">Back</button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}

export default NotFound;
