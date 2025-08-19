import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Make sure Link is imported
import { useAnimationState } from '../App';
import Transition from '../components/Transition';

const HomePage = () => {
    const [count, setCount] = useState(0);
    const { hasPlayedHomeAnimation, handleAnimationComplete } = useAnimationState();
    const playAnimation = !hasPlayedHomeAnimation;

    useEffect(() => {
        if (playAnimation) {
            handleAnimationComplete();
        }
    }, [playAnimation, handleAnimationComplete]);

    return (
        <Transition playEnterAnimation={playAnimation} playExitAnimation={playAnimation}>
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
                    
                    {/* Add the link to the about page */}
                    <Link
                        to="/about"
                        className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-colors"
                    >
                        Go to About Page
                    </Link>

                    <p className="mt-8 text-zinc-500 text-center">
                        Website being developed by [ <code className="rounded bg-zinc-200 px-1.5 py-1 font-mono text-sm dark:bg-zinc-700">Rudy (REKAA) Orozco</code> ]
                    </p>
                </main>
            </div>
        </Transition>
    );
};

export default HomePage;