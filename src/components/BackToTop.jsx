import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`${isVisible ? "flex" : "hidden"} fixed right-6 bottom-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-white shadow-lg transition duration-300`}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <FaArrowUp />
    </button>
  );
};
export default BackToTop;
