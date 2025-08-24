import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Make sure Link is imported
import Transition from './components/Transition';
import { motion } from 'framer-motion';
import NavBar from './components/NavBar';
import NavButtons from './components/NavButtons';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'

const Playground = () => {
    return (
    <div className="w-full h-screen">
      <Transition playEnterAnimation={false} playExitAnimation={true}>
        <BrowserRouter>
          <NavBar className="fixed top-0 left-0 w-full z-50"/>
          <img src='BannerArt.png' className='w-full pt-[50px]'></img>
          <div class="flex h-[538px] py-4 flex-col items-center gap-[25px] shrink-0 self-stretch 
            bg-[linear-gradient(180deg,#EEC33D_59.3%,#FFF_93.72%)]">
              <div class="flex w-[1024px] h-[84px] justify-center items-center gap-2 shrink-0 rounded-[26px]">
                <p class="text-[#322D2B] font-inter text-[64px] not-italic font-bold leading-normal">
                  BUZZING ALL OVER THE PLACE
                </p>
              </div>
          </div>
        </BrowserRouter>
      </Transition>
    </div>
    );
};

export default Playground;