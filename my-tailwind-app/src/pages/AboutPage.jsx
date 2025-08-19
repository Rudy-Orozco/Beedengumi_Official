import React from 'react';
import { Link } from 'react-router-dom';
import { useAnimationState } from '../App';
import Transition from '../components/Transition';

const AboutPage = () => {
  // Get the animation state from the context
  const { hasPlayedHomeAnimation } = useAnimationState();
  const playAnimation = !hasPlayedHomeAnimation;

  return (
    <Transition playEnterAnimation={playAnimation} playExitAnimation={playAnimation}>
      <div className="min-h-screen w-full bg-blue-100 dark:bg-blue-900 grid place-items-center font-sans p-4">
        <main className="max-w-7xl mx-auto p-8 flex flex-col items-center">
          <h1 className="text-5xl font-bold leading-tight text-blue-800 dark:text-blue-200 text-center mt-4">
            About Me
          </h1>
          <p className="mt-4 text-blue-600 dark:text-blue-300">
            This is where the about me content will go!
          </p>
          <Link
            to="/"
            className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
          >
            Go Back Home
          </Link>
        </main>
      </div>
    </Transition>
  );
};

export default AboutPage;