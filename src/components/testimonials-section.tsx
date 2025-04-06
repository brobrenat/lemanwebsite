"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: "Budi S.",
      role: "Pekerja Kantoran",
      content:
        "LEMAN jadi minuman wajib saya di kantor. Rasanya segar, tidak terlalu manis, dan bikin badan jadi rileks saat kerja!",
      rating: 5,
    },
    {
      name: "Dina R.",
      role: "Fitness Enthusiast",
      content:
        "Setelah olahraga, LEMAN jadi pilihan terbaik. Kombinasi lemon dan sereh bikin badan segar dan mood jadi baik.",
      rating: 5,
    },
    {
      name: "Andi P.",
      role: "Mahasiswa",
      content:
        "Sebagai mahasiswa, saya butuh minuman yang menyegarkan dan bikin fokus saat belajar. LEMAN cocok banget!",
      rating: 4,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kata Pelanggan Kami</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-primary fill-primary" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <span className="font-bold text-primary">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

