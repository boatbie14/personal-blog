import { toast } from "sonner";

function useSonner() {
  const showToast = (type) => {
    if (type === "test") {
      toast.success("Copied!", {
        description: "This article has been copied to your clipboard.",
        action: {
          label: "ตกลง",
          onClick: () => console.log("คลิกที่ปุ่มตกลง"),
        },
      });
    } else if (type === "copySuccess") {
      toast.success("Copied!", {
        description: "This article has been copied to your clipboard.",
      });
    } else if (type === "copyFail") {
      toast.error("Error!", {
        description: "Can't copied this article to your clipboard.",
      });
    } else {
      toast.error("Error!", {
        description: "An error has occurred.",
      });
    }
  };

  return { showToast };
}

export default useSonner;
