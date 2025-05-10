import Hero from "@/components/hero"
import WhyJoinSection from "@/components/why-join-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Hero />
      <WhyJoinSection />
      <ContactSection />
    </main>
  )
}
