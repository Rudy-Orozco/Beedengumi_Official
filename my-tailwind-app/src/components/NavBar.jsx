import { useState, useEffect } from "react";
import NavButtons from "./NavButtons";

const NavBar = ({ className = "" }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`bg-white dark:bg-zinc-900 shadow-md ${className}`}>
      <div className="relative flex w-full items-center bg-[#EEC33D] shadow-[0_7px_4px_0_rgba(0,0,0,0.25)] px-4 h-[65px]">

        {/* Logo + Title (slides smoothly) */}
        <div
          className={`absolute inset-y-0 flex items-center gap-[10px] z-10
            transition-all duration-500 ease-in-out
            ${scrolled ? "left-4 translate-x-0" : "left-1/2 -translate-x-1/2"}
          `}
        >
          <img src="BeeLogoMini.png" className="h-[65px] w-auto" alt="Bee Dengumi Logo" />
          <p className="text-[#312F17] font-sans text-2xl font-bold not-italic leading-normal">
            BEE DENGUMI
          </p>
        </div>

        {/* Nav Buttons — collapse to zero width at top */}
        <div
          className={`ml-auto overflow-hidden transition-all duration-300 ease-in-out
            ${scrolled ? "opacity-100 w-auto" : "opacity-0 w-0"}
          `}
        >
          <NavButtons />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
