import { Link } from "react-router-dom";
import clsx from "clsx"; // optional, makes class merging cleaner

const HeaderButton = ({ to, onClick, className = "", variant = "med", children }) => {
  const baseStyles = `
    flex justify-center items-center gap-[10px]
    rounded-md transition duration-200 ease-in-out
  `;

  // Variant-specific styles
  const variants = {
    med: `
      px-[6px] py-[4px]
      text-black font-inter text-[16px] font-bold
      hover:bg-black hover:scale-105 hover:text-white
      active:bg-gray-200 active:scale-95
    `,
    gold: `
      px-[17px] py-[4px]
      bg-[#322D2B] rounded-[6px]
      text-[#EEC33D] font-akshar text-[24px] font-normal
      hover:bg-white hover:scale-105 hover:text-black
    `,
  };


  const buttonClasses = clsx(baseStyles, variants[variant], className);

  if (to) {
    return <Link to={to} className={buttonClasses}>{children}</Link>;
  }

  return (
    <button type="button" onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default HeaderButton;
