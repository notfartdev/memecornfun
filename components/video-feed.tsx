"use client"

import { useRef, useState, useEffect } from "react"
import { VideoCard } from "./video-card"

interface Video {
  id: number
  title: string
  url: string
}

interface VideoFeedProps {
  videos: Video[]
}

export function VideoFeed({ videos }: VideoFeedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollPosition = container.scrollTop
      const itemHeight = window.innerHeight
      const index = Math.round(scrollPosition / itemHeight)
      const newIndex = Math.min(index, videos.length - 1)
      
      // Only update if the index actually changed
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex)
      }
    }

    // Handle wheel events for smoother scrolling
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      const container = containerRef.current
      if (!container) return

      const delta = e.deltaY
      const currentScroll = container.scrollTop
      const maxScroll = container.scrollHeight - window.innerHeight
      
      if (delta > 0 && currentScroll < maxScroll) {
        // Scroll down
        container.scrollTo({
          top: currentScroll + window.innerHeight,
          behavior: 'smooth'
        })
      } else if (delta < 0 && currentScroll > 0) {
        // Scroll up
        container.scrollTo({
          top: currentScroll - window.innerHeight,
          behavior: 'smooth'
        })
      }
    }

    // Handle touch events for mobile
    let startY = 0
    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const endY = e.changedTouches[0].clientY
      const diff = startY - endY
      const container = containerRef.current
      if (!container) return

      if (Math.abs(diff) > 50) { // Minimum swipe distance
        const currentScroll = container.scrollTop
        if (diff > 0) {
          // Swipe up - next video
          container.scrollTo({
            top: currentScroll + window.innerHeight,
            behavior: 'smooth'
          })
        } else {
          // Swipe down - previous video
          container.scrollTo({
            top: currentScroll - window.innerHeight,
            behavior: 'smooth'
          })
        }
      }
    }

    container.addEventListener("scroll", handleScroll)
    container.addEventListener("wheel", handleWheel, { passive: false })
    container.addEventListener("touchstart", handleTouchStart, { passive: true })
    container.addEventListener("touchend", handleTouchEnd, { passive: true })

    return () => {
      container.removeEventListener("scroll", handleScroll)
      container.removeEventListener("wheel", handleWheel)
      container.removeEventListener("touchstart", handleTouchStart)
      container.removeEventListener("touchend", handleTouchEnd)
    }
  }, [videos.length])

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      style={{ 
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
        msOverflowStyle: "none"
      }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {videos.map((video, index) => (
        <div key={video.id} className="h-screen w-full snap-start relative">
          <VideoCard video={video} isActive={index === currentIndex} />
        </div>
      ))}
    </div>
  )
}
