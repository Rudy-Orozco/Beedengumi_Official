import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Make sure Link is imported
import Transition from './components/Transition';
import { motion } from 'framer-motion';

const Playground = () => {
    return (
    <div className="w-full h-screen">
      <Transition playEnterAnimation={false} playExitAnimation={true}>
        <div className="flex w-full pr-[16px] justify-between items-center bg-[#EEC33D] shadow-[0_7px_4px_0_rgba(0,0,0,0.25)]">
            <div className='flex w-[400px] h-[65px] items-center gap-[10px] p-[10px]'>
                <img src='BeeLogoMini.png' className='p-[10px] items-center gap-[10px]'></img>
                <p className='text-[#312F17] font-sans text-2xl font-bold leading-normal not-italic'>BEE DENGUMI</p>
            </div>
        </div>
      </Transition>
    </div>
    );
};

export default Playground;