"use client";

import { Clock, DollarSign, MapPin, Users } from "lucide-react"
import { motion, type Variants } from "framer-motion"
import type { CareerPost } from "@/types"
import { useRouter } from "next/navigation";



const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
}



interface OpenPositionsProps {
  jobs: CareerPost[]
  footerTitle?: string
  footerSubtitle?: string
}

const OpenPositions = ({ jobs, footerTitle, footerSubtitle }: OpenPositionsProps) => {
    const router = useRouter();

  return (  
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl padding">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{}}
        >
          <motion.h2 className="text-bold-3xl" variants={fadeInUp}>
            {footerTitle ?? "Open Positions"}
          </motion.h2>
          <motion.p className="mt-4 desc" variants={fadeInUp} custom={1}>
            {footerSubtitle ?? "Find your next career opportunity with us"}
          </motion.p>
        </motion.div>
  
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id ?? index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={index * 0.3}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="desc-bold mb-2">{job.title}</h3>
                  <p className="text-small mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {job.department}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.type}
                    </span>  
                    <span className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {job.salary}
                    </span>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <button   onClick={() => router.push(`/careers/application/?jobId=${job.id}`)}
                  className="btn-responsive bg-blue-600 text-white rounded-lg hover:bg-blue-700 ">
                    Apply Now
                  </button>  
                </div>  
              </div>
            </motion.div>
          ))}
          {jobs.length === 0 && (
            <div className="text-center text-gray-500">
              No openings right now. Check back soon.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default OpenPositions
