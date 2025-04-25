import "@/styles/client.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow shrink-0 basis-auto">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
