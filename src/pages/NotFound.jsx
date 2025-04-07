import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiAlertCircle } from "react-icons/fi";
import { Link } from "react-router-dom";


function NotFound() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <section className="row flex-grow flex">
          <div className="container flex flex-col justify-center items-center">
            <FiAlertCircle size={120} className="pb-4" />
            <p className="pb-4">Page Not Found</p>
            <Link to="/">
            <button className="black">Send</button>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default NotFound;
