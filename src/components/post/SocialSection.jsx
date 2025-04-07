import { CiFaceSmile } from "react-icons/ci";
import { GoCopy } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { TfiLinkedin } from "react-icons/tfi";

function SocialSection(postData) {
  return (
    <div className="like-share-wrap">
      <button className="like-btn">
        <CiFaceSmile className="icon" /> {postData.likes}
      </button>

      <div className="share-wrap">
        <button className="copy-btn">
          <GoCopy className="icon" /> Coppy link
        </button>
        <button className="share-btn facebook">
          <FaFacebookF className="icon" color="#fff" />
        </button>
        <button className="share-btn linkedin">
          <TfiLinkedin className="icon" color="#fff" />
        </button>
        <button className="share-btn x">
          <RiTwitterXLine className="icon" color="#fff" />
        </button>
      </div>
    </div>
  );
}

export default SocialSection;
