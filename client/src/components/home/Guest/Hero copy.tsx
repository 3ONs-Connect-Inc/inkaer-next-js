import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const fullText =
    "Every engineer comes with a verified portfolio, reviewed resume, and a condensed 10-minute technical interview recording so your team never wastes time screening.";

  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter effect
  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(timeout);
    } else {
      // stop typing when finished
      setIsTyping(false);
    }

    return () => {}(timeout);
    }
  }, [currentIndex, isTyping, fullText]);

  // Hard restart every 2 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText("");
      setCurrentIndex(0);
      setIsTyping(true);
    }, 2 * 60 * 1000);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-orange-50 py-20 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              We Run Your <span className="text-blue-600">Technical</span>{" "}
              <span className="text-orange-500">Interview</span>
              <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl xl:text-4xl">
                Get Verified Engineers in 48 Hours.
              </p>
            </motion.h1>

            <motion.p
              className="mt-6 subtitle-2xl leading-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {displayedText}
              {isTyping && <span className="animate-pulse ml-1">|</span>}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
