"use client"

import { useState } from "react"
import { VideoFeed } from "@/components/video-feed"

export default function FeedPage() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [videos, setVideos] = useState([
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
  ])

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
              MEMECORN
            </h1>
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
