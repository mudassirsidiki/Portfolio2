import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("ScrollY:", window.scrollY); // ✅ Debugging
      setVisible(window.scrollY > 200); // ✅ Button shows after 200px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    console.log("Button Clicked! Scrolling to top..."); // ✅ Debugging
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 bg-red-600 text-white rounded-full shadow-lg transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
