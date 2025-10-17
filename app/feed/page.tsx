"use client"

import { useState, useEffect } from "react"
import { VideoFeed } from "@/components/video-feed"

export default function FeedPage() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [videos, setVideos] = useState<{id: number, title: string, url: string}[]>([])

  // Randomize videos on component mount
  useEffect(() => {
    const allVideos = [
    {
      id: 1,
      title: "Testing my own video! 🌽 #test #myvideo #memecorn",
      url: "/video1.mp4",
    },
    {
      id: 2,
      title: "I just wanted a snack, not a tiny, crunchy attitude problem. The disrespect is real. 🍿🖕 #popcorn #funny #fail #snacktime #unexpected #comedy #viral #fyp #middlefinger #attitude",
      url: "/video2.mp4",
    },
    {
      id: 3,
      title: "Memecorn is life! 🌽💚 #memecorn #life #green #nature #healthy",
      url: "/video3.mp4",
    },
    {
      id: 4,
      title: "Popcorn machine working overtime! 🍿⚡ #popcorn #machine #work #overtime",
      url: "/video4.mp4",
    },
    {
      id: 5,
      title: "Fresh corn harvest season! 🌽🚜 #harvest #farm #fresh #corn",
      url: "/video5.mp4",
    },
    {
      id: 6,
      title: "Corn maze adventures! 🧭🌽 #maze #adventure #lost #fun",
      url: "/video6.mp4",
    },
    {
      id: 7,
      title: "Popcorn art! 🍿🎨 #art #popcorn #creative #design",
      url: "/video7.mp4",
    },
    {
      id: 8,
      title: "Corn on the cob perfection! 🌽✨ #perfect #delicious #summer",
      url: "/video8.mp4",
    },
    {
      id: 9,
      title: "Epic corn battle! 🌽⚔️ #battle #corn #epic #fight",
      url: "/video9.mp4",
    },
    {
      id: 10,
      title: "Corn dance party! 🕺🌽 #dance #party #corn #fun",
      url: "/video10.mp4",
    },
    {
      id: 11,
      title: "Corn cooking masterclass! 👨‍🍳🌽 #cooking #masterclass #corn #chef",
      url: "/video11.mp4",
    },
    {
      id: 12,
      title: "Corn jokes compilation! 😂🌽 #jokes #comedy #corn #funny",
      url: "/video12.mp4",
    },
    {
      id: 13,
      title: "Corn workout routine! 💪🌽 #workout #fitness #corn #exercise",
      url: "/video13.mp4",
    },
    {
      id: 14,
      title: "Corn science experiment! 🧪🌽 #science #experiment #corn #education",
      url: "/video14.mp4",
    },
    {
      id: 15,
      title: "Corn music video! 🎵🌽 #music #video #corn #song",
      url: "/video15.mp4",
    },
    {
      id: 16,
      title: "Corn magic tricks! ✨🌽 #magic #tricks #corn #illusion",
      url: "/video16.mp4",
    },
    {
      id: 17,
      title: "Corn travel vlog! ✈️🌽 #travel #vlog #corn #adventure",
      url: "/video17.mp4",
    },
    {
      id: 18,
      title: "Corn gaming session! 🎮🌽 #gaming #corn #stream #fun",
      url: "/video18.mp4",
    },
    {
      id: 19,
      title: "Corn fashion show! 👗🌽 #fashion #show #corn #style",
      url: "/video19.mp4",
    },
    {
      id: 20,
      title: "Corn pet training! 🐕🌽 #pet #training #corn #cute",
      url: "/video20.mp4",
    },
    {
      id: 21,
      title: "Corn final episode! 🎬🌽 #final #episode #corn #ending",
      url: "/video21.mp4",
    },
    {
      id: 22,
      title: "Corn sequel begins! 🌽🎬 #sequel #corn #new #beginning",
      url: "/video22.mp4",
    },
    {
      id: 23,
      title: "Corn superhero origin! 🦸🌽 #superhero #corn #origin #powers",
      url: "/video23.mp4",
    },
    {
      id: 24,
      title: "Corn time travel! ⏰🌽 #timetravel #corn #adventure #future",
      url: "/video24.mp4",
    },
    {
      id: 25,
      title: "Corn space mission! 🚀🌽 #space #mission #corn #astronaut",
      url: "/video25.mp4",
    },
    {
      id: 26,
      title: "Corn detective story! 🕵️🌽 #detective #mystery #corn #clues",
      url: "/video26.mp4",
    },
    {
      id: 27,
      title: "Corn cooking show! 👨‍🍳🌽 #cooking #show #corn #chef #recipe",
      url: "/video27.mp4",
    },
    {
      id: 28,
      title: "Corn sports highlights! ⚽🌽 #sports #highlights #corn #athlete",
      url: "/video28.mp4",
    },
    {
      id: 29,
      title: "Corn news report! 📺🌽 #news #report #corn #breaking",
      url: "/video29.mp4",
    },
    {
      id: 30,
      title: "Corn weather forecast! 🌤️🌽 #weather #forecast #corn #meteorology",
      url: "/video30.mp4",
    },
    {
      id: 31,
      title: "Corn documentary! 📽️🌽 #documentary #corn #nature #wildlife",
      url: "/video31.mp4",
    },
    {
      id: 32,
      title: "Corn comedy special! 😂🌽 #comedy #special #corn #standup",
      url: "/video32.mp4",
    },
    {
      id: 33,
      title: "Corn horror movie! 👻🌽 #horror #movie #corn #scary #thriller",
      url: "/video33.mp4",
    },
    {
      id: 34,
      title: "Corn romance story! 💕🌽 #romance #love #corn #relationship",
      url: "/video34.mp4",
    },
    {
      id: 35,
      title: "Corn action movie! 💥🌽 #action #movie #corn #explosions #thrills",
      url: "/video35.mp4",
    },
    {
      id: 36,
      title: "Corn sci-fi adventure! 🤖🌽 #scifi #adventure #corn #technology",
      url: "/video36.mp4",
    },
    {
      id: 37,
      title: "Corn fantasy quest! 🧙🌽 #fantasy #quest #corn #magic #adventure",
      url: "/video37.mp4",
    },
    {
      id: 38,
      title: "Corn western movie! 🤠🌽 #western #movie #corn #cowboy #frontier",
      url: "/video38.mp4",
    },
    {
      id: 39,
      title: "Corn musical! 🎵🌽 #musical #corn #song #dance #performance",
      url: "/video39.mp4",
    },
    {
      id: 40,
      title: "Corn thriller! 😱🌽 #thriller #suspense #corn #mystery #tension",
      url: "/video40.mp4",
    },
    {
      id: 41,
      title: "Corn family drama! 👨‍👩‍👧‍👦🌽 #family #drama #corn #relationships #emotions",
      url: "/video41.mp4",
    },
    {
      id: 42,
      title: "Corn epic finale! 🎆🌽 #epic #finale #corn #grand #ending #spectacular",
      url: "/video42.mp4",
    },
    ]

    // Shuffle the videos array randomly
    const shuffledVideos = [...allVideos].sort(() => Math.random() - 0.5)
    setVideos(shuffledVideos)
  }, [])

  return (
    <div className="h-screen overflow-hidden bg-black relative">
      {/* Static Noise Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-10">
        <div className="h-full w-full" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(247,147,26,0.2) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 1px, transparent 1px),
            radial-gradient(circle at 40% 80%, rgba(247,147,26,0.15) 1px, transparent 1px),
            radial-gradient(circle at 60% 40%, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '200px 200px, 150px 150px, 100px 100px, 250px 250px',
          animation: 'static 0.1s infinite linear'
        }} />
      </div>
      
      {/* Video Feed - Full Screen */}
      <VideoFeed videos={videos} />
      
      {/* Welcome overlay - dismissible */}
      {showWelcome && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setShowWelcome(false)}
        >
                  <div className="text-center text-white border-4 border-[#F7931A] p-8 bg-black/60 backdrop-blur-sm">
                    <h1 className="font-[family-name:var(--font-press-start)] text-white text-4xl md:text-6xl tracking-wider mb-4">
                      ARE YOU CORNY ENOUGH?
                    </h1>
                    <p className="font-[family-name:var(--font-press-start)] text-white text-lg tracking-wide mb-4">
                      WELCOME TO MEMECORN FEED!
                    </p>
                    <p className="font-[family-name:var(--font-press-start)] text-white text-lg tracking-wide">
                      Click anywhere to start watching
                    </p>
                    <p className="font-[family-name:var(--font-press-start)] text-[#F7931A] text-sm tracking-wide mt-2">
                      Scroll to discover more content
                    </p>
                  </div>
        </div>
      )}
    </div>
  )
}
