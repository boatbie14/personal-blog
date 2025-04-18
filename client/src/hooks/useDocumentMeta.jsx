import { useEffect } from "react";

function useDocumentMeta({ title, description, image }) {
  useEffect(() => {
    if (title) {
      document.title = title;

      updateMetaTag("description", description || "");
      updateMetaTag("og:title", title);
      updateMetaTag("og:description", description || "");
      updateMetaTag("og:image", image || "");
      updateMetaTag("og:url", window.location.href);
      updateMetaTag("og:type", "article");
      updateMetaTag("twitter:card", "summary_large_image");
      updateMetaTag("twitter:title", title);
      updateMetaTag("twitter:description", description || "");
      updateMetaTag("twitter:image", image || "");
    }

    function updateMetaTag(name, content) {
      let meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        if (name.startsWith("og:") || name.startsWith("twitter:")) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    }
  }, [title, description, image]);
}

export default useDocumentMeta;
