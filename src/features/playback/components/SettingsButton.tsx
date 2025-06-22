// File: src/features/playback/components/SettingsButton.tsx
import type { Ref } from "react"
import { FaCog } from "react-icons/fa"

type Props = {
  ref: Ref<HTMLButtonElement>
  onClick: () => void
  className?: string
}

export default function SettingsButton({ ref, onClick, className }: Props) {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-all
        ${className ?? ''}`}>
      <FaCog size={16} />
    </button>
  )
}
