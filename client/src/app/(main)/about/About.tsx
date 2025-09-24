"use client";

import { CheckCircle, Globe, Target, Users } from "lucide-react";
import { motion } from "framer-motion";


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  return (
    <div className="min-h-screen bg-white">
  
      <main className="py-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="mx-auto max-w-7xl padding">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-bold-5xl mb-6"
              >
                About Inkaer
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="desc leading-8 max-w-3xl mx-auto"
              >
                We’re changing how companies hire engineering talent by delivering
                verified candidates, backed by originality checks, industry fit
                tagging, and technical interviews recording, so you know their
                skills are real before you speak to them.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl padding">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
              >
                <h2 className="text-bold-3xl mb-6">Our Mission</h2>
                <p className="desc mb-6">
                  We’re revolutionizing how companies hire engineering talent by
                  delivering verified candidates, backed by originality checks,
                  industry fit tagging, and technical interviews recording, so you
                  know their skills are real before you speak to them.
                </p>
                <p className="desc">
                  We combine advanced verification tools such as plagiarism
                  detection, AI-content forensics, and industry fit tagging with
                  human expertise to ensure every candidate we present is
                  technically capable and ready to contribute from day one.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
                className="mt-12 lg:mt-0"
              >
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      icon: <Users className="w-8 h-8 text-blue-600" />,
                      bg: "bg-blue-100",
                      value: "1,000+",
                      label: "Verified Engineers",
                    },
                    {
                      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
                      bg: "bg-green-100",
                      value: "50+",
                      label: "Successful Hires",
                    },
                    {
                      icon: <Target className="w-8 h-8 text-purple-600" />,
                      bg: "bg-purple-100",
                      value: "95%",
                      label: "Match Success Rate",
                    },
                    {
                      icon: <Globe className="w-8 h-8 text-orange-600" />,
                      bg: "bg-orange-100",
                      value: "5+",
                      label: "Countries",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      className="text-center"
                    >
                      <div
                        className={`mx-auto w-12 h-12 xs:w-16 xs:h-16 ${item.bg} rounded-xl flex items-center justify-center mb-4 shadow-md`}
                      >
                        {item.icon}
                      </div>
                      <h3 className="desc-bold text-xl">{item.value}</h3>
                      <p className="text-small text-gray-600">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl padding">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Our Values
              </h2>
              <p className="mt-4 desc">
                The principles that guide everything we do
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {[ 
                {
                  title: "Quality First",
                  text: "Every engineer is verified for originality, technical skill, and industry relevance before reaching you.",
                },
                {
                  title: "Transparency",
                  text: "We show you exactly how each candidate was verified. No black box, no inflated claims.",
                },
                {
                  title: "Partnership",
                  text: "We’re more than a service provider, we work with you to reduce bad hires and speed up your hiring process.",
                },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <h3 className="desc-bold mb-4 text-lg">{value.title}</h3>
                  <p className="text-small text-gray-600">{value.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
