import './ScrollToTop.css';
import { ArrowCircleUpIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import debounce from "lodash.debounce";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 250);
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener("scroll", debouncedHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, []);

  return (
    <div className={showScroll ? 'fade-in' : 'fade-out'}>
      <div
        onClick={() =>
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        className="back-to-top"
        aria-label="Scroll to top"
      >
        <ArrowCircleUpIcon className="h-8 w-8 text-white drop-shadow" aria-hidden="true" />
      </div>
    </div>
  );
};

export default ScrollToTop;
