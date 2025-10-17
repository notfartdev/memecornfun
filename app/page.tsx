"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Static Noise Effect */}
      <div className="absolute inset-0 opacity-20 sm:opacity-30 pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(247,147,26,0.2) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 1px, transparent 1px),
            radial-gradient(circle at 40% 80%, rgba(247,147,26,0.15) 1px, transparent 1px),
            radial-gradient(circle at 60% 40%, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '150px 150px, 100px 100px, 80px 80px, 200px 200px',
          animation: 'static 0.1s infinite linear'
        }} />
      </div>
      
      {/* CRT Scan Lines Effect */}
      <div className="absolute inset-0 opacity-15 sm:opacity-20 pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(247,147,26,0.1) 2px, rgba(247,147,26,0.1) 4px)',
        }} />
      </div>
      
      <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8 relative z-10 px-4 sm:px-0">
        <h1 className="font-[family-name:var(--font-press-start)] text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-wider mb-4">
          MEMECORN
        </h1>

        <p className="font-[family-name:var(--font-press-start)] text-white text-lg sm:text-xl md:text-2xl tracking-wide mb-8 sm:mb-12">
          &lt;ABOUT CORN&gt;
        </p>

        <div className="border-2 sm:border-4 border-[#F7931A] p-4 sm:p-6 md:p-8 lg:p-12 space-y-4 sm:space-y-6 bg-black/40 backdrop-blur-sm">
          <h2 className="font-[family-name:var(--font-press-start)] text-white text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide mb-4 sm:mb-6">
            ABOUT CORN
          </h2>

          <div className="space-y-3 sm:space-y-4 text-left">
            <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
              CORN IS A BRAND BUILDING APPS, PROTOCOLS, GAMES, AND CULTURE, UNITED BY THE GOAL OF MAKING WEB3 ENGAGING, ACCESSIBLE, AND FUN.
            </p>
            <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
              THE CORN TOKEN IS THE ENGINE OF VALUE, CONNECTING THE BRAND AND ITS EFFORTS TO CREATE A SHARED ECONOMY THAT FUELS CULTURE AND REWARDS PARTICIPATION.
            </p>
            <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
              CORN BLENDS FINANCIAL INNOVATION WITH CULTURE, FINDING CREATIVE WAYS TO HARNESS BOTH WHILE PROVING THAT CRYPTO WAS, IS AND ALWAYS WILL BE FUN.
            </p>
          </div>
        </div>

        {/* Navigation Button */}
        <div className="mt-8 sm:mt-12">
          <Link href="/feed">
            <button className="font-[family-name:var(--font-press-start)] text-white bg-black border-2 sm:border-4 border-[#F7931A] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg md:text-xl tracking-wide hover:bg-[#F7931A] hover:text-black transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-[#F7931A]/50 w-full sm:w-auto">
              &lt;ENTER FEED&gt;
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
