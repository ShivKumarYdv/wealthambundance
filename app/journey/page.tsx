"use client"

import { useEffect } from "react"
import { Loader2 } from "lucide-react"

export default function JourneyPage() {
  useEffect(() => {
    // Redirect to Instagram profile
    window.location.href = "https://www.instagram.com/purvanchalkingofficial?igsh=MWM1Yjh1NzdibzZxcQ=="
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      <Loader2 className="h-12 w-12 text-green-600 animate-spin mb-4" />
      <h1 className="text-2xl font-semibold text-green-800">Redirecting to Instagram...</h1>
      <p className="text-green-600 mt-2">You'll be connected with Shiv Kumar Yadav momentarily</p>
    </div>
  )
}
