// File: src/features/playback/hooks/usePlayback.ts
import { useState, useEffect } from 'react'

export function usePlayback() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [progress, setProgress] = useState(0)
  const [duration] = useState(225)

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= duration) {
          setIsPlaying(false)
          return duration
        }
        return p + 1
      })
    }, 1000 / speed)
    return () => clearInterval(interval)
  }, [isPlaying, speed, duration])

  const togglePlay = () => {
    if (progress >= duration) setProgress(0)
    setIsPlaying(!isPlaying)
  }

  const changeSpeed = (newSpeed: number) => {
    setSpeed(newSpeed)
  }

  return {
    isPlaying,
    speed,
    progress,
    duration,
    togglePlay,
    changeSpeed,
  }
}
