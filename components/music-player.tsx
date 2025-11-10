"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX, X } from "lucide-react"
import { useTranslation } from "@/components/language-context"

export default function MusicPlayer() {
  const [showPopup, setShowPopup] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [userPreference, setUserPreference] = useState<boolean | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const t = useTranslation()

  useEffect(() => {
    // Check if user has a saved preference
    const savedPreference = localStorage.getItem('music-preference')
    if (savedPreference === 'dismissed') {
      // User dismissed, don't show popup but keep small button available
      return
    }
    
    if (savedPreference === 'playing') {
      // User already playing, don't show popup
      setUserPreference(true)
      setHasInteracted(true)
      return
    }
    
    // Show popup after a short delay (first time visit)
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Load saved volume preference
    const savedVolume = localStorage.getItem('music-volume')
    if (savedVolume) {
      audio.volume = parseFloat(savedVolume)
    } else {
      audio.volume = 0.3 // Default volume (30%)
    }

    // Handle audio events
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => {
      setIsPlaying(false)
      // Loop the audio
      audio.currentTime = 0
      if (userPreference) {
        audio.play()
      }
    }

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [userPreference])

  const handlePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (!hasInteracted) {
      // First interaction - user needs to interact to play audio
      audio.play().then(() => {
        setIsPlaying(true)
        setHasInteracted(true)
        setUserPreference(true)
        setShowPopup(false)
        localStorage.setItem('music-preference', 'playing')
      }).catch((error) => {
        console.error('Error playing audio:', error)
      })
    } else {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        audio.play()
        setIsPlaying(true)
      }
    }
  }

  const handleDismiss = () => {
    setShowPopup(false)
    // Save preference so popup doesn't show again, but keep small button available
    localStorage.setItem('music-preference', 'dismissed')
  }
  
  const handleCloseWithX = () => {
    setShowPopup(false)
    // Save preference so popup doesn't show again, but keep small button available
    localStorage.setItem('music-preference', 'dismissed')
  }

  const handleToggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.muted = !audio.muted
    setIsMuted(audio.muted)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return

    const volume = parseFloat(e.target.value)
    audio.volume = volume
    localStorage.setItem('music-volume', volume.toString())
    setIsMuted(volume === 0)
  }

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        style={{ display: 'none' }}
      >
        <source src="/Daft Punk - Something About Us.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Player Popup - Bottom Left (smaller) - Floating over all sections */}
      {showPopup && (
        <div 
          className="fixed bottom-6 left-6 z-[99999] animate-fade-in pointer-events-auto" 
          style={{ 
            position: 'fixed',
            pointerEvents: 'auto',
            isolation: 'isolate'
          }}
        >
          <div className="bg-background/95 backdrop-blur-md border-2 border-primary/30 rounded-2xl shadow-2xl p-4 max-w-xs relative">
            {/* Close button */}
            <button
              onClick={handleCloseWithX}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            
            {/* Content */}
            <div className="flex flex-col gap-3 pr-6">
              <div>
                <h3 className="text-lg font-bold mb-1 text-foreground">
                  {t.music?.title || "🎵 Background Music"}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {t.music?.description || "Would you like to play background music while browsing?"}
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  onClick={handlePlay}
                  className="flex-1 rounded-full px-4 py-3 text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ 
                    background: 'linear-gradient(90deg, #b6d464 0%, #ffe066 100%)', 
                    color: '#222' 
                  }}
                >
                  <Play className="w-3.5 h-3.5 mr-1.5" />
                  {t.music?.play || "Play Music"}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDismiss}
                  className="flex-1 rounded-full px-4 py-3 text-sm border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {t.music?.dismiss || "No Thanks"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Small Play Button (shown when popup is closed and music is not playing) - Floating over all sections */}
      {!showPopup && !isPlaying && (
        <div 
          className="fixed bottom-6 left-6 z-[99999] animate-fade-in pointer-events-auto" 
          style={{ 
            position: 'fixed',
            pointerEvents: 'auto',
            isolation: 'isolate'
          }}
        >
          <Button
            size="icon"
            onClick={() => setShowPopup(true)}
            className="rounded-full w-12 h-12 shadow-lg hover:scale-110 transition-all duration-300"
            style={{ 
              background: 'linear-gradient(90deg, #b6d464 0%, #ffe066 100%)', 
              color: '#222',
              border: '2px solid rgba(182, 212, 100, 0.3)'
            }}
            aria-label="Open music player"
          >
            <Play className="w-5 h-5" />
          </Button>
        </div>
      )}

      {/* Floating Music Control (shown when music is playing) - Floating over all sections */}
      {hasInteracted && userPreference && !showPopup && (
        <div
          className="fixed bottom-4 right-4 z-[99999] pointer-events-auto"
          style={{
            position: 'fixed',
            pointerEvents: 'auto',
            isolation: 'isolate',
          }}
        >
          <div className="flex items-center gap-1 bg-background/85 backdrop-blur-md border border-primary/20 rounded-full px-2.5 py-1.5 shadow-lg">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePlay}
              className="h-8 w-8 rounded-full hover:bg-primary/10"
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 text-primary" />
              ) : (
                <Play className="w-3.5 h-3.5 text-primary" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggleMute}
              className="h-8 w-8 rounded-full hover:bg-primary/10"
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-muted-foreground" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-primary" />
              )}
            </Button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={audioRef.current?.volume || 0.3}
              onChange={handleVolumeChange}
              className="hidden sm:block w-16 h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
        </div>
      )}
    </>
  )
}

