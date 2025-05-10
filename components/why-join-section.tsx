"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function WhyJoinSection() {
  const benefits = [
    {
      title: "5+ Years in MLM & Herbal Business",
      description: "Benefit from Shiv's extensive experience and proven track record in the wellness industry.",
    },
    {
      title: "Trusted Mentor to 100+ Wellnesspreneurs",
      description: "Join a growing community of successful entrepreneurs guided by Shiv's expertise.",
    },
    {
      title: "Transparent, Ethical & Growth-Focused",
      description: "Build your business on a foundation of integrity with clear, ethical practices.",
    },
    {
      title: "Personal WhatsApp Support from Day 1",
      description: "Get direct access to Shiv for guidance, motivation, and business strategy.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Why Join Shiv?</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-green-100 hover:border-green-300 transition-colors shadow-sm hover:shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-green-800 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
