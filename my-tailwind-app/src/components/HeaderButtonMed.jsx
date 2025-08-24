import { Link } from "react-router-dom";

const HeaderButtonMed = ({ title, to, onClick }) => {
  const baseStyles = `
    flex px-[6px] py-[4px] justify-center items-center gap-[10px]
    rounded-md transition
    text-black
    hover:bg-black hover:scale-105 hover:text-white
    active:bg-gray-200 active:scale-95
  `;

  // If "to" is provided, render a Link
  if (to) {
    return (
      <Link to={to} className={baseStyles}>
        <p className="font-inter text-[16px] not-italic font-bold leading-normal">
          {title}
        </p>
      </Link>
    );
  }

  // Otherwise, fall back to a button
  return (
    <button onClick={onClick} className={baseStyles}>
      <p className="font-inter text-[16px] not-italic font-bold leading-normal">
        {title}
      </p>
    </button>
  );
};

export default HeaderButtonMed;
