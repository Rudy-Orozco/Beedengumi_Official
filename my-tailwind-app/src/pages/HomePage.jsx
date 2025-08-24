import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAnimationState } from '../App';
import Transition from '../components/Transition';
import NavBar from '../components/NavBar';
import HeaderButton from '../components/HeaderButton';

const HomePage = () => {
    const [count, setCount] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const { hasPlayedHomeAnimation, handleAnimationComplete } = useAnimationState();
    const playAnimation = !hasPlayedHomeAnimation;

    useEffect(() => {
        if (playAnimation) handleAnimationComplete();

        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [playAnimation, handleAnimationComplete]);

    return (
        <Transition playEnterAnimation={playAnimation} playExitAnimation={playAnimation}>
            {/* NAVIGATION BAR */}
            <NavBar className="fixed top-0 left-0 w-full z-50" />

            {/* SECTION 1 */}
            <img src='BannerArt.png' className='w-full pt-[50px]' alt="Banner"/>
            <div className="flex h-[538px] py-4 flex-col items-center gap-[25px] shrink-0 self-stretch shadow-[0_-7px_4px_0_rgba(0,0,0,0.25)]
                bg-[linear-gradient(180deg,#EEC33D_59.3%,#FFF_93.72%)]">
                <div className="flex w-[1024px] h-[84px] justify-center items-center gap-2 shrink-0 rounded-[26px]">
                    <p className="text-[#322D2B] font-inter text-[64px] not-italic font-bold leading-normal">
                        BUZZING ALL OVER THE PLACE
                    </p>
                </div>

                {/* Buttons that fade on scroll */}
                <div className={`flex items-center gap-4 transition-opacity duration-500 ${scrolled ? "opacity-0" : "opacity-100"}`}>
                    <HeaderButton variant='gold' to="/about"> About </HeaderButton>
                    <HeaderButton variant='gold'> Talents </HeaderButton>
                    <HeaderButton variant='gold'> Contact </HeaderButton>
                    <HeaderButton variant='gold' to="https://x.com/beedengumi"> News n' Tweets </HeaderButton>
                </div>
            </div>

            {/* PLACEHOLDER SCREEN */}
            <div className="min-h-screen w-full bg-white dark:bg-zinc-900 grid place-items-center font-sans p-4">
                <main className="max-w-7xl mx-auto p-8 flex flex-col items-center">
                    <img src="BeeLogo.png" alt="Bee Logo" className="w-[150px] h-[150px] rounded-[30px]"/>     
                    <h1 className="text-5xl font-bold leading-tight text-zinc-800 dark:text-zinc-200 text-center mt-4">
                        BEE DENGUMI Website in Progress
                    </h1>
                    <div className="p-8 flex flex-col items-center gap-4">
                        <button
                            onClick={() => setCount((count) => count + 1)}
                            className="rounded-lg border border-transparent text-zinc-800 dark:text-zinc-200 bg-zinc-100 px-5 py-2.5 font-medium transition-colors hover:border-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-zinc-800 dark:hover:border-indigo-500 dark:focus:ring-indigo-800"
                        >
                            Buzz is {count}
                        </button>
                        <p className="mt-4 text-zinc-800 dark:text-zinc-200">
                            Buzzing all over the place~!
                        </p>
                    </div>
                    
                    <Link
                        to="/about"
                        className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-colors"
                    >
                        Go to About Page
                    </Link>

                    <p className="mt-8 text-zinc-500 text-center">
                        Website being developed by [ <code className="rounded bg-zinc-200 px-1.5 py-1 font-mono text-sm dark:bg-zinc-700">REKAA_85</code> ]
                    </p>
                </main>
            </div>
        </Transition>
    );
};

export default HomePage;
