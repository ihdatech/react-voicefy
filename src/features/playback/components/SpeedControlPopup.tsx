// File: src/features/playback/components/SpeedControlPopup.tsx
import { type Ref } from "react"

type Props = {
  ref: Ref<HTMLDivElement>
  speed: number
  onChangeSpeed: (speed: number) => void
  onClose: () => void
  getPopupPosition: () => string
}

export default function SpeedControlPopup({ ref, speed, onChangeSpeed, getPopupPosition, onClose }: Props) {
  const popupBoxStyle = "bg-white border border-purple-100 shadow-xl rounded-xl p-4 w-48 z-50 transition-all duration-300 ease-out scale-95";
  return (
    <div ref={ref} className={`absolute ${getPopupPosition()} ${popupBoxStyle}`}>
      <label className="block text-sm text-purple-700 font-semibold mb-2">
        Speed: <span className="text-purple-600">{speed.toFixed(1)}x</span>
      </label>
      <input
        type="range"
        min="0.5"
        max="2"
        step="0.1"
        value={speed}
        onChange={(e) => onChangeSpeed(parseFloat(e.target.value))}
        className="w-full accent-purple-500" />
      <button onClick={onClose} className="mt-2 text-xs text-purple-600 hover:underline">
        Close
      </button>
    </div>
  )
}
