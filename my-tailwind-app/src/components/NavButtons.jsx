import HeaderButton from "./HeaderButton";

const NavButtons = () => {
  return (
        <div className="flex items-center gap-[16px]">
            {/* TO FUTURE SELF, CHANGE UP LINKS AND ROUTERS */}
            <HeaderButton variant="med" to="/about"> About</HeaderButton>
            <HeaderButton variant="med"> Talents</HeaderButton>
            <HeaderButton variant="med"> Contact</HeaderButton>
            <HeaderButton variant="med" to="https://x.com/beedengumi"> News n' Tweets</HeaderButton>
        </div>
  );
};

export default NavButtons;