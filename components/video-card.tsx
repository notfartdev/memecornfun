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
      {/* Video/Image Container - Properly Sized */}
      <div 
        className="relative w-full max-w-sm h-[80vh] cursor-pointer"
        onClick={handleVideoClick}
        style={{ pointerEvents: 'auto' }}
      >
        {/* Video Player */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          onLoadStart={() => console.log('Video loading started:', video.url)}
          onCanPlay={() => console.log('Video can play:', video.url)}
          onError={(e) => console.error('Video error:', video.url, e)}
        >
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        {/* Video Info Overlay - Bottom Left */}
        <div className="absolute bottom-4 left-4 text-white max-w-xs">
          <div className="bg-black/60 backdrop-blur-sm border border-[#F7931A] p-3">
            <h3 className="font-[family-name:var(--font-press-start)] text-[#F7931A] text-sm tracking-wide mb-2">
              @your_video
            </h3>
            <p className="font-[family-name:var(--font-press-start)] text-white text-xs tracking-wide leading-relaxed">
              {video.title}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons - Right Side */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-6">
        {/* Home Button */}
        <Link href="/" className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
          <div className="w-14 h-14 border-4 border-[#F7931A] bg-black/50 flex items-center justify-center rounded-full">
            <span className="text-[#F7931A] text-2xl">🏠</span>
          </div>
          <span className="font-[family-name:var(--font-press-start)] text-[#F7931A] text-xs bg-black/50 px-2 py-1 border border-[#F7931A]">
            HOME
          </span>
        </Link>

        {/* Comment Button */}
        <button className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
          <div className="w-14 h-14 border-4 border-[#F7931A] bg-black/50 flex items-center justify-center rounded-full">
            <span className="text-[#F7931A] text-2xl">💬</span>
          </div>
          <span className="font-[family-name:var(--font-press-start)] text-[#F7931A] text-xs bg-black/50 px-2 py-1 border border-[#F7931A]">
            {Math.floor((video.id * 17 + 89) % 100)}
          </span>
        </button>

        {/* Share Button */}
        <button className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
          <div className="w-14 h-14 border-4 border-[#F7931A] bg-black/50 flex items-center justify-center rounded-full">
            <span className="text-[#F7931A] text-2xl">→</span>
          </div>
        </button>

        {/* Mute/Unmute Button */}
        <button onClick={handleMuteToggle} className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
          <div className="w-14 h-14 border-4 border-[#F7931A] bg-black/50 flex items-center justify-center rounded-full">
            <span className="text-[#F7931A] text-2xl">
              {isMuted ? "🔇" : "🔊"}
            </span>
          </div>
          <span className="font-[family-name:var(--font-press-start)] text-[#F7931A] text-xs bg-black/50 px-2 py-1 border border-[#F7931A]">
            VOLUME
          </span>
        </button>

        {/* Twitter Link */}
        <a 
          href="https://x.com/memecornfun" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
        >
          <div className="w-14 h-14 border-4 border-[#F7931A] bg-gradient-to-br from-[#F7931A] to-[#FF8C00] rounded-full flex items-center justify-center">
            <span className="text-2xl">🌽</span>
          </div>
          <span className="font-[family-name:var(--font-press-start)] text-[#F7931A] text-xs bg-black/50 px-2 py-1 border border-[#F7931A]">
            @MEMECORNFUN
          </span>
        </a>
      </div>

    </div>
  )
}
