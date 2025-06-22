// File: src/features/playback/components/SpeedControlButton.tsx
import type { Ref } from "react"

type Props = {
  ref: Ref<HTMLButtonElement>
  positionY: String
  speed: number
  onClick: () => void
  className?: string
}

export default function SpeedControlButton({ ref, positionY, speed, onClick, className }: Props) {
  return (
    <div className={`flex items-center text-sm font-medium text-purple-600 cursor-pointer hover:underline
      ${positionY === 'top' || positionY === 'bottom' ? 'flex-row' : 'flex-col'}
      ${className ?? ''}`}>
      <button
        ref={ref}
        onClick={onClick}
        className="leading-none flex items-center justify-center">
        {speed.toFixed(1)}x
      </button>
    </div>
  )
}
