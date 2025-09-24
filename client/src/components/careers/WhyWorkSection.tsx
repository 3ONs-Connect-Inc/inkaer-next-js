"use client";

import { Users, Clock, DollarSign, MapPin } from "lucide-react"
import { motion, type Variants } from "framer-motion"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
}

const perks = [
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    bg: "bg-blue-100",
    title: "Great Team",
    desc: "Work with brilliant, passionate people who care about making a difference.",
  },
  {
    icon: <Clock className="w-8 h-8 text-green-600" />,
    bg: "bg-green-100",
    title: "Work-Life Balance",
    desc: "Flexible hours, remote work options, and unlimited PTO.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-purple-600" />,
    bg: "bg-purple-100",
    title: "Competitive Pay",
    desc: "Competitive salaries, equity, and comprehensive benefits.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-orange-600" />,
    bg: "bg-orange-100",
    title: "Global Impact",
    desc: "Make a difference in how companies worldwide find great talent.",
  },
]

const WhyWorkSection = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl padding">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{}}
        >
          <motion.h2 className="text-bold-3xl" variants={fadeInUp}>
            Why Work at Inkaer?
          </motion.h2>
          <motion.p className="mt-4 desc" variants={fadeInUp} custom={1}>
            We offer more than just a job - we offer a chance to shape the
            future of hiring
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((item, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={i}
            >
              <div
                className={`mx-auto sm:w-16 sm:h-16 w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center mb-4`}
              >
                {item.icon}
              </div>
              <h3 className="desc-bold mb-2">{item.title}</h3>
              <p className="text-small">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyWorkSection
