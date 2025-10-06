"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingIntroProps {
  onComplete?: () => void;
}

export default function LoadingIntro({ onComplete }: LoadingIntroProps = {}) {
  const [isVisible, setIsVisible] = useState(true);
  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    // Start transition after text finishes building
    const transitionTimer = setTimeout(() => {
      setStartTransition(true);
    }, 1800);

    // Hide loading component and show Hero content
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 3600);

    return () => {
      clearTimeout(transitionTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  // Animation for each character - falls and blurs into place
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      filter: "blur(10px)",
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.03,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // Animation for the info lines
  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.6,
      },
    }),
  };

  const name = "Nicholas Pianfetti";
  const letters = name.split("");

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-gradient-to-br from-white via-cyan-50 to-white"
      >
        {/* Content that slides right then up */}
        <motion.div
          className="absolute px-4"
          style={{
            width: "fit-content",
            whiteSpace: "nowrap",
          }}
          initial={{
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
          animate={startTransition ? {
            top: "50%",
            left: "calc(50% + 15vw)",
            x: "-25%",
            y: "calc(-50% - 100px)",
            transition: {
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }
          } : {}}
        >
          <div className="flex flex-col space-y-4">
          {/* Name with building animation */}
          <div className="flex justify-start" style={{ whiteSpace: "nowrap" }}>
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 bg-clip-text text-transparent inline-block"
                style={{ display: "inline-block" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>

          {/* Major and School info */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            custom={1.0}
            className="space-y-1"
            style={{ whiteSpace: "nowrap" }}
          >
            <p className="text-xl sm:text-2xl lg:text-xl text-gray-800 font-light">
              Mechanical Engineering | CS Minor @ Georgia Tech
            </p>
          </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
