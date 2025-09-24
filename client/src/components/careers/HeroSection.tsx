"use client";

import { motion, type Variants } from "framer-motion"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
}

interface HeroSectionProps {
  title?: string
  subtitle?: string
}

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="mx-auto max-w-7xl padding">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={{}}
        >
          <motion.h1 className="text-bold-5xl" variants={fadeInUp} custom={0}>
            {title ?? "Join Our Team"}
          </motion.h1>
          <motion.p
            className="mt-6 desc leading-8 max-w-3xl mx-auto"
            variants={fadeInUp}
            custom={1}
          >
            {subtitle ??
              "Help us revolutionize how companies hire engineering talent. We're looking for passionate individuals who want to make a real impact."}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
