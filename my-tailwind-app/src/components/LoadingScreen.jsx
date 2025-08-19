import React from 'react';
import { motion } from 'framer-motion';
import Transition from './Transition';

const LoadingScreen = () => {
  return (
    <div className="w-full h-screen">
      <Transition playEnterAnimation={false} playExitAnimation={true}>
        <div className="h-full w-full flex items-center justify-center bg-[#EEC33D] overflow-hidden">
            <div className="relative flex flex-col items-center justify-center">
                <motion.div className="flex items-center justify-center">
                    <motion.img
                        src="BeeLogo.png"
                        alt="Bee Logo"
                        className="w-[250.318px] h-[250.318px] flex-shrink-0 aspect-square rounded-[40.649px]"
                        animate={{ x: [0, 0, -20] }}
                        transition={{ duration: 1, delay: 2.5, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="overflow-hidden"
                        initial={{ width: 0 }}
                        animate={{ width: "auto" }}
                        transition={{ duration: 1, delay: 2.8, ease: "easeInOut" }}
                    >
                        <motion.h1
                            className="font-sans text-[64px] font-bold leading-normal tracking-wider whitespace-nowrap text-[#312F17] mt-[40px]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 3.1, ease: "easeInOut" }}
                        >
                            BEE DENGUMI
                        </motion.h1>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="mt-8"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 2, ease: "easeInOut" }}
                >
                    <div className="flex items-center justify-center font-sans text-5xl font-bold leading-normal text-[#312F17]">
                        <span>Buzzing</span>
                        <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
                        <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>.</span>
                        <span className="inline-block animate-bounce" style={{ animationDelay: '0.6s' }}>.</span>
                    </div>
                </motion.div>
            </div>
        </div>
      </Transition>
    </div>
  );
};

export default LoadingScreen;