"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

export default function AboutPage() {
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
          &lt;COMING SOON&gt;
        </p>

        <div className="border-2 sm:border-4 border-[#F7931A] p-4 sm:p-6 md:p-8 lg:p-12 space-y-4 sm:space-y-6 bg-black/40 backdrop-blur-sm">
          <h2 className="font-[family-name:var(--font-press-start)] text-white text-sm sm:text-base md:text-lg lg:text-xl tracking-wide mb-4 sm:mb-6">
            THIS PAGE WILL BE UPDATED SOONEST.
          </h2>

          <div className="space-y-3 sm:space-y-4 text-left">
            <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
              RULE #1 BUY A MEMECORN
            </p>
            <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
              RULE #2 GO BACK TO RULE #1
            </p>
            <p className="font-[family-name:var(--font-press-start)] text-[#F7931A] text-xs sm:text-sm md:text-base tracking-wide leading-relaxed mt-4">
              IT'S A CORN FLYWHEEL, WAIT FOR THIS PAGE TO GET UPDATED AND KNOW MORE.
            </p>
            
            <div className="mt-6 pt-4 border-t border-[#F7931A]/30">
              <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
                THIS IS A CORN WEBSITE. AND IT'S PERFECT.
              </p>
              <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
                SERIOUSLY, WHAT ELSE DO YOU WANT? YOU PROBABLY BUY TOKENS AND THINK YOUR SHIT IS SPECIAL. 
                YOU THINK YOUR 13 MEGABYTE DEFI PROTOCOL IS GOING TO GET YOU SOME MOON BANNER YOU CAN GLUE TO THE TOP CORNER OF YOUR WALLET. 
                YOU THINK YOUR 40-POUND SMART CONTRACT AND 83 GOVERNANCE TOKENS GIVE ETHEREUM A BONER BECAUSE IT FINALLY HAS YIELD FARMING. 
                WRONG. LET ME DESCRIBE YOUR PERFECT CORN TOKEN:
              </p>
              <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
                SHIT'S LIGHTWEIGHT AND LOADS FAST
              </p>
              <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
                FITS ON ALL YOUR SHITTY SCREENS
              </p>
              <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
                LOOKS THE SAME IN ALL YOUR SHITTY BROWSERS
              </p>
              <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
                THE MOTHERFUCKER'S ACCESSIBLE TO EVERY ASSHOLE THAT VISITS YOUR SITE
              </p>
              <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
                SHIT'S LEGIBLE AND GETS YOUR POINT ACROSS (IF YOU HAD ONE INSTEAD OF JUST 5MB PICS OF CORN DRINKING COFFEE)
              </p>
              <p className="font-[family-name:var(--font-press-start)] text-[#F7931A] text-xs sm:text-sm md:text-base tracking-wide leading-relaxed mt-4">
                WELL GUESS WHAT:
              </p>
              <p className="font-[family-name:var(--font-press-start)] text-[#F7931A] text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
                YOU. ARE. OVER-DESIGNING. LOOK AT THIS SHIT. IT'S A CORN WEBSITE. WHY DO YOU NEED TO ANIMATE A TRENDY-ASS BANNER FLAG WHEN I HOVER OVER THAT USELESS PIECE OF SHIT? 
                YOU SPENT HOURS ON IT AND ADDED 80 KILOBYTES TO YOUR SITE, AND SOME MOTHERFUCKER JABBING AT IT ON THEIR IPAD WITH FAT SAUSAGE FINGERS WILL NEVER SEE THAT SHIT. 
                NOT TO MENTION BLIND PEOPLE WILL NEVER SEE THAT SHIT, BUT THEY DON'T SEE ANY OF YOUR SHITTY SHIT.
              </p>
              <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed mt-4">
                YOU NEVER KNEW IT, BUT THIS IS YOUR PERFECT CORN WEBSITE. HERE'S WHY.
              </p>
              <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
                IT'S LIGHTWEIGHT. THIS ENTIRE PAGE WEIGHS LESS THAN THE GRADIENT-MESHED FACEBOOK LOGO ON YOUR WORDPRESS SITE. 
                DID YOU SERIOUSLY LOAD 100KB OF JQUERY UI JUST SO YOU COULD ANIMATE THE BACKGROUND COLOR OF A DIV? 
                YOU LOADED ALL 7 FONTFACES OF A SHITTY WEBFONT JUST SO YOU COULD SAY "HI." AT 100PX HEIGHT AT THE BEGINNING OF YOUR SITE? 
                YOU PIECE OF SHIT.
              </p>
              <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
                IT'S RESPONSIVE. YOU DUMBASS. YOU THOUGHT YOU NEEDED MEDIA QUERIES TO BE RESPONSIVE, BUT NO. 
                RESPONSIVE MEANS THAT IT RESPONDS TO WHATEVER SCREENSIZE IT'S VIEWED ON. 
                THIS SITE DOESN'T CARE IF YOU'RE ON AN IMAC OR A TAMAGOTCHI.
              </p>
              <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
                IT WORKS. LOOK AT THIS SHIT. YOU CAN READ IT ... THAT IS, IF YOU CAN READ. IT MAKES SENSE. 
                IT HAS HIERARCHY. IT'S USING HTML5 TAGS SO YOU AND YOUR BROWSER KNOW WHAT'S IN THIS SITE. THAT'S SEMANTICS.
              </p>
              <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
                IT HAS CONTENT ON THE SCREEN. YOUR SITE HAS THREE BYLINES AND LINK TO YOUR DRIBBBLE ACCOUNT, 
                BUT YOU SPREAD IT OVER 7 FULL SCREENS AND MAKE ME CLICK SOME BOBBING BUTTON TO SHOW ME HOW COOL THE JQUERY SCROLLTO PLUGIN IS.
              </p>
              <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
                CROSS-BROWSER COMPATIBILITY? LOAD THIS IN IE6. I DARE YOU.
              </p>
              <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
                THIS IS A CORN WEBSITE. LOOK AT IT. YOU'VE NEVER SEEN ONE BEFORE.
              </p>
              <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
                LIKE THE MAN WHO'S NEVER GROWN OUT HIS BEARD HAS NO IDEA WHAT HIS TRUE NATURAL STATE IS, 
                YOU HAVE NO IDEA WHAT A CORN WEBSITE IS. ALL YOU HAVE EVER SEEN ARE SHITTY SKEUOMORPHIC BASTARDIZATIONS OF WHAT SHOULD BE TEXT COMMUNICATING A MESSAGE. 
                THIS IS A REAL, NAKED CORN WEBSITE. LOOK AT IT. IT'S BEAUTIFUL.
              </p>
              <p className="font-[family-name:var(--font-press-start)] text-[#F7931A] text-xs sm:text-sm md:text-base tracking-wide leading-relaxed mt-4">
                YES, THIS IS SATIRE
              </p>
              <p className="font-[family-name:var(--font-press-start)] text-[#F7931A] text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
                I'M NOT ACTUALLY SAYING YOUR SITE SHOULD LOOK LIKE THIS. WHAT I'M SAYING IS THAT ALL THE PROBLEMS WE HAVE WITH CORN WEBSITES ARE ONES WE CREATE OURSELVES. 
                CORN WEBSITES AREN'T BROKEN BY DEFAULT, THEY ARE FUNCTIONAL, HIGH-PERFORMING, AND ACCESSIBLE. YOU BREAK THEM.
              </p>
              <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed mt-4">
                "GOOD CORN IS AS LITTLE CORN AS POSSIBLE."
              </p>
              <p className="font-[family-name:var(--font-press-start)] text-white text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
                - SOME GERMAN GUY
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Back to Home */}
        <div className="mt-8 sm:mt-12">
          <Link 
            href="/" 
            className="inline-block font-[family-name:var(--font-press-start)] text-[#F7931A] text-sm sm:text-base md:text-lg tracking-wide border-2 border-[#F7931A] px-4 sm:px-6 py-2 sm:py-3 hover:bg-[#F7931A] hover:text-black transition-colors duration-200"
          >
            ← BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  )
}
