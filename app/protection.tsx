"use client"

import { useEffect } from "react"

export function ProtectionScript() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Disable F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault()
        return false
      }
      
      // Ctrl+Shift+I (Developer Tools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault()
        return false
      }
      
      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault()
        return false
      }
      
      // Ctrl+S (Save Page)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault()
        return false
      }
      
      // Ctrl+Shift+C (Element Inspector)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault()
        return false
      }
      
      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault()
        return false
      }
    }

    // Disable text selection
    const handleSelectStart = (e: Event) => {
      e.preventDefault()
      return false
    }

    // Disable drag and drop
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault()
      return false
    }

    // Detect and prevent developer tools
    let devtools = false
    const detectDevTools = () => {
      const threshold = 160
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        if (!devtools) {
          devtools = true
          // Show corn-themed warning
          console.clear()
          document.body.innerHTML = `
            <div style="
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              height: 100vh;
              background: black;
              color: #F7931A;
              font-family: 'Courier New', monospace;
              text-align: center;
              padding: 20px;
            ">
              <h1 style="font-size: 48px; margin-bottom: 20px; color: #F7931A;">🌽</h1>
              <h2 style="font-size: 32px; margin-bottom: 10px; color: white;">STOP PEEKING</h2>
              <p style="font-size: 24px; color: #F7931A; margin-bottom: 20px;">BUY A MEMECORN</p>
              <p style="font-size: 16px; color: white; opacity: 0.7;">Close developer tools to continue</p>
            </div>
          `
        }
      } else {
        devtools = false
      }
    }

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('selectstart', handleSelectStart)
    document.addEventListener('dragstart', handleDragStart)
    
    // Monitor for developer tools
    const interval = setInterval(detectDevTools, 500)

    // Disable console methods
    const noop = () => {}
    console.log = noop
    console.warn = noop
    console.error = noop
    console.info = noop
    console.debug = noop
    console.trace = noop
    console.table = noop
    console.group = noop
    console.groupEnd = noop
    console.time = noop
    console.timeEnd = noop
    console.count = noop
    console.clear = noop

    // Disable common debugging methods (safer approach)
    if (typeof window !== 'undefined') {
      try {
        // Override eval and Function with noop functions instead of undefined
        (window as any).eval = noop
        (window as any).Function = noop
      } catch (e) {
        // Silently ignore if we can't override these
      }
    }

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('selectstart', handleSelectStart)
      document.removeEventListener('dragstart', handleDragStart)
      clearInterval(interval)
    }
  }, [])

  return null
}
