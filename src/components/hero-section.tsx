"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const words = ["Sehat", "Segar", "Alami", "Berkhasiat"]

function AnimatedText() {
  const [currentWord, setCurrentWord] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    const typeSpeed = 400
    const deleteSpeed = 200
    const wordPause = 1500
    const delayBeforeTyping = 500

    const handleTyping = () => {
      const currentTarget = words[currentWord]

      if (!isDeleting && !isWaiting) {
        if (text.length < currentTarget.length) {
          setText(currentTarget.slice(0, text.length + 1))
          return typeSpeed
        } else {
          setIsWaiting(true)
          setTimeout(() => {
            setIsWaiting(false)
            setIsDeleting(true)
          }, wordPause)
          return wordPause
        }
      } else if (isDeleting && !isWaiting) {
        if (text.length > 0) {
          setText(currentTarget.slice(0, text.length - 1))
          return deleteSpeed
        } else {
          setIsWaiting(true)
          setTimeout(() => {
            setIsWaiting(false)
            setIsDeleting(false) // Reset to typing mode
            setCurrentWord((prev) => (prev + 1) % words.length)
          }, delayBeforeTyping)
          return delayBeforeTyping
        }
      }
      return isWaiting ? wordPause : typeSpeed
    }

    const timeout = setTimeout(() => {
      handleTyping()
    }, isDeleting ? deleteSpeed : typeSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, currentWord, isWaiting])

  return (
    <p className="text-xl md:text-3xl mb-8 text-white">
      Minuman{" "}
      <span className="inline-block font-medium relative">
        {text}
        <span className="blinking-cursor"></span>
      </span>
    </p>
  )
}

export function HeroSection() {
  const bubbleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const createBubbles = () => {
      if (!bubbleRef.current) return

      const container = bubbleRef.current
      container.innerHTML = ""

      // Increased number of bubbles from 15 to 30
      for (let i = 0; i < 30; i++) {
        const bubble = document.createElement("div")
        bubble.className = "bubble"

        // Increased max size from 50 to 80
        const size = Math.random() * 80 + 10
        bubble.style.width = `${size}px`
        bubble.style.height = `${size}px`

        // Random position
        bubble.style.left = `${Math.random() * 100}%`
        bubble.style.top = `${Math.random() * 100}%`

        // Random animation duration between 3s and 8s
        const duration = Math.random() * 5 + 3
        bubble.style.animation = `float ${duration}s infinite ease-in-out ${Math.random() * 5}s`

        container.appendChild(bubble)
      }
    }

    createBubbles()

    window.addEventListener("resize", createBubbles)
    return () => {
      window.removeEventListener("resize", createBubbles)
    }
  }, [])

  return (
    <section className="relative min-h-[100vh] overflow-hidden hero-gradient pt-20">
      <div ref={bubbleRef} className="absolute inset-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              LEMON <span className="text-black">SEREH</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold mb-4 text-white/90">Natural Booster, Happy Day!</p>
            <AnimatedText />
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/buy">
                <Button size="lg" className="bg-black hover:bg-black/80 text-white">
                  Buy Now
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30 border-white text-white">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut" }}
              className="relative mx-auto"
            >
              <Image
                src="/leman5.png"
                alt="LEMAN Fresh Drinks"
                width={600}
                height={600}
                className="mx-auto drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

