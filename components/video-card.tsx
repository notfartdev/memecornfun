"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

interface VideoCardProps {
  video: {
    id: number
    title: string
    url: string
  }
  isActive: boolean
}

export function VideoCard({ video, isActive }: VideoCardProps) {
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // TikTok-style autoplay: only current video plays
  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        // Play current video
        videoRef.current.play().catch((error) => {
          console.log('Autoplay failed for video:', video.id, error)
        })
        setIsPlaying(true)
      } else {
        // Pause and reset all other videos
        videoRef.current.pause()
        videoRef.current.currentTime = 0
        setIsPlaying(false)
      }
    }
  }, [isActive, video.id])

  // Ensure first video plays when component mounts
  useEffect(() => {
    if (videoRef.current && isActive) {
      // Small delay to ensure video is ready
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch((error) => {
            console.log('Initial play failed for video:', video.id, error)
          })
        }
      }, 100)
      
      return () => clearTimeout(timer)
    }
  }, [])


  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play().catch((error) => {
          console.log('Play failed for video:', video.id, error)
        })
        setIsPlaying(true)
      }
    }
  }

  const handleMuteToggle = () => {
    if (videoRef.current) {
      setIsMuted(!isMuted)
      videoRef.current.muted = !isMuted
    }
  }



  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Video/Image Container - Mobile Responsive */}
      <div 
        className="relative w-full max-w-xs sm:max-w-sm h-[70vh] sm:h-[80vh] cursor-pointer"
        onClick={handleVideoClick}
        style={{ pointerEvents: 'auto' }}
      >
        {/* Video Player */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover bg-black"
          loop
          muted={isMuted}
          playsInline
          preload="none"
          loading="lazy"
          data-video-id={video.id}
          onLoadStart={() => console.log('Video loading started:', video.url)}
          onCanPlay={() => console.log('Video can play:', video.url)}
          onError={(e) => console.error('Video error:', video.url, e)}
          onLoad={() => console.log('Video loaded:', video.url)}
          onWaiting={() => console.log('Video buffering:', video.url)}
        >
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>


      </div>

      {/* Action Buttons - Right Side */}
      <div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 sm:gap-6">
        {/* Home Button */}
        <Link href="/" className="flex flex-col items-center gap-1 sm:gap-2 hover:scale-110 transition-transform">
          <span className="font-[family-name:var(--font-press-start)] text-[#F7931A] text-xs bg-black/50 px-1 sm:px-2 py-1 border border-[#F7931A]">
            HOME
          </span>
        </Link>


        {/* Mute/Unmute Button */}
        <button onClick={handleMuteToggle} className="flex flex-col items-center gap-1 sm:gap-2 hover:scale-110 transition-transform">
          <span className="font-[family-name:var(--font-press-start)] text-[#F7931A] text-xs bg-black/50 px-1 sm:px-2 py-1 border border-[#F7931A]">
            {isMuted ? "UNMUTE" : "MUTE"}
          </span>
        </button>

        {/* Twitter Link */}
        <a 
          href="https://x.com/memecornfun" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 sm:gap-2 hover:scale-110 transition-transform"
        >
          <div className="w-10 h-10 sm:w-14 sm:h-14 border-2 sm:border-4 border-[#F7931A] bg-gradient-to-br from-[#F7931A] to-[#FF8C00] rounded-full flex items-center justify-center">
            <span className="text-lg sm:text-2xl">🌽</span>
          </div>
          <span className="font-[family-name:var(--font-press-start)] text-[#F7931A] text-xs bg-black/50 px-1 sm:px-2 py-1 border border-[#F7931A] hidden sm:block">
            @MEMECORNFUN
          </span>
        </a>
      </div>

    </div>
  )
}
