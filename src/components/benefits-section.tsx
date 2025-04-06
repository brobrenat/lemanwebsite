"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Droplets, Leaf, Zap } from "lucide-react"

export function BenefitsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const benefits = [
    {
      icon: <Droplets className="h-10 w-10 text-primary" />,
      title: "Pencernaan Lancar",
      description: "Membantu melancarkan pencernaan dan membuat tubuh lebih sehat dengan kandungan alami.",
    },
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: "Rendah Kalori",
      description:
        "Menggunakan stevia sebagai pemanis alami yang rendah kalori, cocok untuk yang menghindari gula pasir.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Menjaga Daya Tahan",
      description:
        "Kaya akan Vitamin C yang memberikan manfaat antioksidan untuk menjaga daya tahan tubuh dan kesehatan kulit.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="benefits" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kenapa Harus LEMAN?</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Minuman lemon kami tidak hanya lezat - tapi juga kaya manfaat yang menjadikannya pilihan sempurna untuk
            setiap waktu.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

