import { useEffect } from "react";

const TawkToChat = () => {
  useEffect(() => {
    if (window.Tawk_API) return; // Prevent duplicate script loading

    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/YOUR_PROPERTY_ID/DEFAULT";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "anonymous"); // Prevent CORS issues

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup when component unmounts
    };
  }, []);

  return null; // No UI needed, just loads the script
};

export default TawkToChat;
