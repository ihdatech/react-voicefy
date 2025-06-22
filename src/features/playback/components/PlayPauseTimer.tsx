// File: src/features/playback/components/PlayPauseTimer.tsx
type Props = {
  progress: number
  className?: string
}

export default function PlayPauseTimer({ progress, className }: Props) {
  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60)
    const s = sec % 60
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }
  return (
    <div className={`flex items-center
      text-[13px] text-gray-500 font-medium tracking-wide select-none text-center
      ${className ?? ''}`}>
      {formatTime(progress)}
    </div>
  )
}
