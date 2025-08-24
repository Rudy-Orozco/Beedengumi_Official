import NavButtons from "./NavButtons";

const NavBar = ({ className = "" }) => {
  return (
    <nav className={`bg-white dark:bg-zinc-900 shadow-md ${className}`}>
        <div className="flex w-full pr-[16px] justify-between items-center bg-[#EEC33D] shadow-[0_7px_4px_0_rgba(0,0,0,0.25)]">
            <div className="flex w-[241px] h-[65px] items-center gap-[10px]">
                <div className="flex w-[241px] h-[65px] items-center gap-[10px]">
                    <img src='BeeLogoMini.png' className='class="flex-[1_0_0] self-stretch"'/>
                    <p className='text-[#312F17] font-sans text-2xl font-bold leading-normal not-italic'>BEE DENGUMI</p>
                </div>
            </div>
            <NavButtons/>
        </div>
    </nav>
  );
};

export default NavBar;