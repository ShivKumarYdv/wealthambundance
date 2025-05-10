"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import ParticleAnimation from "./particle-animation"
import { useMediaQuery } from "../hooks/use-media-query"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <section className="relative overflow-hidden">
      {/* Background with animated particles */}
      <div className="absolute inset-0 z-0">
        <ParticleAnimation />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-3/5 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 leading-tight">
                Join Shiv Kumar Yadav&apos;s Wellness Revolution
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-green-800">Start with ₹1,00,000. Earn up to ₹1,00,00,000.</p>
              <p className="text-lg md:text-xl text-green-700 mt-2">
                Your mentor. Your guide. Your herbal success path.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/journey">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-6 h-auto text-lg w-full sm:w-auto"
                >
                  Start My Journey with Shiv
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-700 hover:bg-green-50 font-semibold px-6 py-6 h-auto text-lg"
                onClick={() => window.open("https://wa.me/919005727700", "_blank")}
              >
                WhatsApp Shiv Now
              </Button>
            </motion.div>
          </div>

          <div className="w-full md:w-2/5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              <div className="rounded-full w-full h-full overflow-hidden border-4 border-green-500 shadow-xl">
                <Image
                  src="/images/shiv-kumar-yadav.jpeg"
                  alt="Shiv Kumar Yadav"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Animated coins and herbs around the image */}
              <div className="absolute -top-4 -right-4">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-yellow-800 font-bold shadow-lg">
                    ₹
                  </div>
                </motion.div>
              </div>

              <div className="absolute -bottom-2 -left-4">
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    🌿
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
