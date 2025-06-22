// File: src/features/playback/components/PlayPauseButton.tsx
import { FaPlay, FaPause } from 'react-icons/fa'

type Props = {
  isPlaying: boolean
  className?: string
  togglePlay: () => void
}

export default function PlayPauseButton({ isPlaying, className, togglePlay }: Props) {
  // const outline = 'w-10 h-10 rounded-full border-2 border-purple-500 text-purple-500 hover:bg-purple-50 transition-all flex items-center justify-center'
  const gradient = 'w-10 h-10 text-white text-xl shadow-md transition-all duration-300 flex justify-center items-center rounded-full bg-gradient-to-br'
  const pauseStyle = 'from-red-400 to-red-600 hover:from-red-500 hover:to-red-700'
  const playStyle = 'from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
  return (
    <button
      onClick={togglePlay}
      aria-label={isPlaying ? 'Pause' : 'Play'}
      className={`${gradient} ${isPlaying ? pauseStyle : playStyle} ${className ?? ''}`}>
      {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
    </button>
  )
}
