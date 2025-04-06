"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Siap Mencoba Minuman Lemon Terbaik?</h2>
          <p className="text-lg text-white/90 mb-8">
            Rasakan kesegaran LEMAN Lemon Sereh hari ini. Kombinasi sempurna rasa asam manis lemon dengan aroma sereh
            yang menenangkan untuk pengalaman yang istimewa.
          </p>
          <Link href="/buy">
            <Button size="lg" className="bg-black hover:bg-black/80 text-white">
              Dapatkan LEMAN Sekarang
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

