import { CiFaceSmile } from "react-icons/ci";
import { GoCopy } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { TfiLinkedin } from "react-icons/tfi";
import useCheckLogin from "@/hooks/useCheckLogin";
import useSonner from "@/hooks/useSonner";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Toaster } from "sonner";

function SocialSection(postData) {
  const { showAlert, hideAlert, AlertDialog } = useCheckLogin();
  const { showToast } = useSonner();

  function shareToSocial(platform) {
    const shareTitle = postData.title;
    const shareDescription = postData.content;
    const shareUrl = window.location.href;

    console.log(shareTitle + " || " + shareDescription);
    let shareLink;

    switch (platform) {
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;

      case "linkedin":
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(
          shareTitle
        )}&summary=${encodeURIComponent(shareDescription)}`;
        break;

      case "x":
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;

      default:
        return;
    }
    window.open(shareLink, "_blank", "width=600,height=400,resizable=yes,scrollbars=yes");
  }

  function copyCurrentURL() {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        showToast("copySuccess");
      })
      .catch(() => {
        showToast("copyFail");
      });
  }

  return (
    <div className="like-share-wrap">
      <button className="like-btn" onClick={showAlert}>
        <CiFaceSmile className="icon" /> {postData.likes}
      </button>
      <AlertDialog />

      <div className="share-wrap">
        <button className="copy-btn cursor-pointer" onClick={() => copyCurrentURL()}>
          <GoCopy className="icon" /> Coppy link
        </button>
        <button className="share-btn facebook cursor-pointer" onClick={() => shareToSocial("facebook")} aria-label="Share on Facebook">
          <FaFacebookF className="icon" color="#fff" />
        </button>
        <button className="share-btn linkedin cursor-pointer" onClick={() => shareToSocial("linkedin")} aria-label="Share on LinkedIn">
          <TfiLinkedin className="icon" color="#fff" />
        </button>
        <button className="share-btn x cursor-pointer" onClick={() => shareToSocial("x")} aria-label="Share on X">
          <RiTwitterXLine className="icon" color="#fff" />
        </button>
      </div>

      <Toaster richColors />
    </div>
  );
}

export default SocialSection;
