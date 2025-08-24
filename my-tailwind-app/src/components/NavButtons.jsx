import HeaderButtonMed from "./HeaderButtonMed";

const NavButtons = () => {
  return (
        <div className="flex items-center gap-[16px]">
            {/* TO FUTURE SELF, CHANGE UP LINKS AND ROUTERS */}
            <HeaderButtonMed title="About" to="/about"/>
            <HeaderButtonMed title="Talents"/> 
            <HeaderButtonMed title="Contact"/>
            <HeaderButtonMed title="News n' Tweets" to="https://x.com/beedengumi"/>
        </div>
  );
};

export default NavButtons;