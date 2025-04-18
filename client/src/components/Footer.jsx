import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  const contactInfo = {
    linkedin: {
      url: "https://www.linkedin.com/in/rpp-kittiphat/",
      icon: FaLinkedin,
    },
    instagram: {
      url: "https://www.instagram.com/boatbie_keane/",
      icon: RiInstagramFill,
    },
    gmail: {
      url: "mailto:kittiphat.rpp@gmail.com",
      icon: FaEnvelope,
    },
  };

  const footerLink = {
    "Home page": "#",
    Dashboard: "#",
  };

  return (
    <>
      <footer className="w-full bg-[#EFEEEB] py-10 md:p-16">
        <div className="container flex justify-between flex-col sm:flex-row gap-[24px]">
          <div className="get-in-touch flex gap-[24px] justify-center">
            Get in touch
            <span className="icon-wrap flex gap-4">
              {Object.entries(contactInfo).map(([key, { url, icon: Icon }]) => {
                return url ? (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-icon-wrapper w-4 h-4 flex justify-center items-center rounded-full"
                  >
                    <Icon className="footer-icon" color="white" />
                  </a>
                ) : null;
              })}
            </span>
          </div>
          <div className="footer-nav flex flex-col sm:flex-row gap-4">
            {Object.entries(footerLink).map(([text, link]) => {
              return (
                <a key={text} href={link} className="link text-center">
                  {text}
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
