"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section 
    className="relative bg-gradient-to-br from-blue-50 to-orange-50 py-20 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Hero content */}
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
              Get <span className="text-blue-600">5 Verified</span>{" "}
              <span className="text-orange-500">Engineers</span> in <br />
              <span className="text-blue-400">48 Hours</span>
              <span className="text-gray-900">.</span>
            </motion.h1>

            <motion.p
              className="mt-6 subtitle-2xl leading-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Every shortlist includes an Inkaer-verified portfolio, a human
              reviewed resume, and a condensed technical interview recording.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4 items-center gap-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="#request-shortlist"
                className="btn-responsive  bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
              >
                Request Shortlist
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#candidate-package"
                className="bg-white flex  btn-responsive text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50"
              >
                 See Sample Shortlist
              </a>
            </motion.div>

           <motion.p
  className="mt-4 text-xs xs:text-sm text-gray-500 text-center sm:text-left"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8, duration: 0.8 }}
>
  92% of Inkaer candidates pass their first interview.
</motion.p>

          </motion.div>

          {/* Right side - Portfolio certificate */}
          <motion.div
            className="relative" 
             initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            >
           <motion.div 
                         whileHover={{ rotate: 0, scale: 1.05 }}
              initial={{ rotate: 3 }}
              animate={{ rotate: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
           className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <Image
                src="/pdf/pdf.jpg"
                alt="Inkaer Portfolio Verification Certificate"
                width={800}
                height={600}
                 priority
                className="w-full h-auto rounded-lg"
              />

              <motion.div
                className="absolute -top-4 xl:-right-4 -right-0 bg-blue-600 text-white px-2 xs:px-4 py-2 rounded-full text-xs xs:text-sm font-semibold shadow-lg"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Verified Portfolio
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
