"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tentang LEMAN</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            LEMAN Fresh Drinks hadir untuk memberikan minuman sehat dan menyegarkan. Lemon Sereh kami menggabungkan
            kesegaran lemon dengan aroma sereh yang menenangkan untuk pengalaman yang unik.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-primary/20 rounded-full w-64 h-64 md:w-80 md:h-80 mx-auto flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40"
              ></motion.div>
              <Image
                src="/leman2.png"
                alt="LEMAN Fresh Drinks"
                width={200}
                height={400}
                className="relative z-10"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">LEMON SEREH</h3>
            <p className="text-gray-600 mb-6">
              Minuman signature kami menggabungkan keseimbangan sempurna antara lemon yang segar dan sereh yang
              aromatik. Setiap botol dibuat dengan hati-hati untuk memberikan pengalaman menyegarkan yang menyegarkan
              indra Anda.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Sehat & Aman</h4>
                  <p className="text-gray-600">Menggunakan stevia sebagai pemanis alami yang rendah kalori</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Kaya Vitamin C</h4>
                  <p className="text-gray-600">Memberikan manfaat antioksidan untuk menjaga daya tahan tubuh</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Menyegarkan</h4>
                  <p className="text-gray-600">Kombinasi lemon yang asam manis dengan aroma sereh yang menenangkan</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

