import { motion } from 'framer-motion';

const Transition = ({ children, playEnterAnimation = true, playExitAnimation = true }) => {
  return (
    <>
      {children}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-yellow-400 origin-bottom z-30"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={playExitAnimation ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-yellow-400 origin-top z-30"
        initial={playEnterAnimation ? { scaleY: 1 } : { scaleY: 0 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default Transition;