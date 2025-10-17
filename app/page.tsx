"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { ProtectionScript } from "@/app/protection"

export default function HomePage() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play()
        } catch (error) {
          console.log('Autoplay prevented:', error)
        }
      }
    }

    // Try to play on mount
    playAudio()

    // Also try to play on any user interaction
    const handleUserInteraction = () => {
      playAudio()
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
    }

    document.addEventListener('click', handleUserInteraction)
    document.addEventListener('touchstart', handleUserInteraction)

    return () => {
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
    }
  }, [])

  return (
    <>
      <ProtectionScript />
      <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-8 relative overflow-hidden turn-on-animation">
      {/* Background Audio */}
      <audio 
        ref={audioRef}
        src="https://dwvo2npct47gg.cloudfront.net/audio/grim.mp3" 
        type="audio/mp3" 
        loop 
        preload="auto"
      />
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
          &lt;CA :&gt;
        </p>

        <div className="border-2 sm:border-4 border-[#F7931A] p-4 sm:p-6 md:p-8 lg:p-12 space-y-4 sm:space-y-6 bg-black/40 backdrop-blur-sm">
          <h2 className="font-[family-name:var(--font-press-start)] text-white text-sm sm:text-base md:text-lg lg:text-xl tracking-wide mb-4 sm:mb-6">
            IT AIN'T MUCH. BUT IT'S HONEST WORK.
          </h2>

          <div className="space-y-3 sm:space-y-4 text-left">
            <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
              CORN DOESN'T ASK FOR MUCH.
              JUST SUNLIGHT, WATER, AND YOUR WILL TO LIVE. SOME CALL IT A CROP.
              WE CALL IT SOMETHING TO STARE AT WHILE THINKING ABOUT TAXES.
            </p>
            <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
              EVERY YEAR WE PLANT, PRETEND WE KNOW WHAT WE'RE DOING,
              AND WATCH WEATHER RUIN EVERYTHING ANYWAY.
            </p>
            <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
              CORN IS PATIENT.
              CORN DOESN'T CARE ABOUT YOUR PLANS, YOUR FEELINGS, OR YOUR LITTLE STARTUP.
              CORN WAITS WHILE YOU PANIC.
              CORN JUST GROWS.
            </p>
            <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
              WE DON'T DREAM OUT HERE.
              WE JUST RUN OUT OF DIESEL AND HOPE THE BANK FORGETS ABOUT US.
              CORN WAS, IS, AND ALWAYS WILL BE JUST A CORN.
              STUBBORN. USELESSLY HONEST. AND STILL GROWING ANYWAY.
            </p>
          </div>
        </div>

        {/* Animated GIF Navigation */}
        <div className="mt-8 sm:mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          {/* Forum GIF - Links to Twitter */}
          <a 
            href="https://x.com/memecornfun" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-200"
          >
            <img 
              src="https://dwvo2npct47gg.cloudfront.net/gifs/awgeForum.gif" 
              alt="Twitter" 
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
            <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm mt-2">X</p>
          </a>

          {/* VHS Camera GIF - Links to Feed */}
          <Link href="/feed" className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-200">
            <img 
              src="https://dwvo2npct47gg.cloudfront.net/gifs/vhs-camera.gif" 
              alt="Enter Feed" 
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
            <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm mt-2">MEDIA</p>
          </Link>

          {/* Pager GIF - Links to Contact */}
          <Link href="/contact" className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-200">
            <img 
              src="https://dwvo2npct47gg.cloudfront.net/gifs/pager.gif" 
              alt="Contact" 
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
            <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm mt-2">CONTACT</p>
          </Link>

                  {/* About - Question Block GIF */}
                  <Link href="/about" className="flex flex-col items-center justify-center hover:scale-110 transition-transform duration-200">
                    <img 
                      src="https://dwvo2npct47gg.cloudfront.net/gifs/question-block-red.gif" 
                      alt="About" 
                      className="w-16 h-16 sm:w-20 sm:h-20"
                    />
                    <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm mt-2">ABOUT</p>
                  </Link>
        </div>
      </div>
      </div>
    </>
  )
}
