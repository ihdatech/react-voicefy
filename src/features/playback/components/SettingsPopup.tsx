// File: src/features/playback/components/SettingsPopup.tsx
import type { Ref } from "react"
import type { Horizontal, Vertical } from "../../../shared/types"

type Props = {
  ref: Ref<HTMLDivElement>
  positionX: Horizontal
  positionY: Vertical
  setPositionX: (pos: Horizontal) => void
  setPositionY: (pos: Vertical) => void
  getPopupPosition: () => void
  onClose: () => void
}

export default function SettingsPopup({ ref, positionX, positionY, setPositionX, setPositionY, getPopupPosition, onClose }: Props) {
  const popupBoxStyle = "bg-white border border-purple-100 shadow-xl rounded-xl p-4 w-48 z-50 transition-all duration-300 ease-out scale-95";
  return (
    <div
      ref={ref}
      className={`absolute ${getPopupPosition()} ${popupBoxStyle}`}>
      <label className="block text-sm text-purple-700 font-semibold mb-2">Position</label>
      <div className="mb-2">
        <select
          value={positionX}
          onChange={(e) => setPositionX(e.target.value as Horizontal)}
          className="w-full mt-1 text-sm border rounded px-2 py-1">
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>
      <div className="mb-2">
        <select
          value={positionY}
          onChange={(e) => setPositionY(e.target.value as Vertical)}
          className="w-full mt-1 text-sm border rounded px-2 py-1">
          <option value="top">Top</option>
          <option value="center">Center</option>
          <option value="bottom">Bottom</option>
        </select>
      </div>
      <button onClick={onClose} className="mt-1 text-xs text-purple-600 hover:underline">
        Close
      </button>
    </div>
  )
}
