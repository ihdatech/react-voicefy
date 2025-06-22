// File: src/features/playback/PlaybackPopup.tsx
import { useEffect, useRef, useState } from 'react'
import { usePlayback } from './hooks/usePlayback'
import Divider from '../../shared/components/Divider'
import PlayPauseButton from './components/PlayPauseButton'
import PlayPauseTimer from './components/PlayPauseTimer'
import SettingsButton from './components/SettingsButton'
import SettingsPopup from './components/SettingsPopup'
import SpeedControlButton from './components/SpeedControlButton'
import SpeedControlPopup from './components/SpeedControlPopup'

export default function PlaybackPopup() {
  const { isPlaying, speed, progress, togglePlay, changeSpeed } = usePlayback()

  const [positionX, setPositionX] = useState<'left' | 'center' | 'right'>('right')
  const [positionY, setPositionY] = useState<'top' | 'center' | 'bottom'>('center')
  const [showSettingsPopup, setShowSettingsPopup] = useState(false)
  const [showSpeedPopup, setShowSpeedPopup] = useState(false)
  const settingsBtnRef = useRef<HTMLButtonElement>(null)
  const settingsRef = useRef<HTMLDivElement>(null)
  const speedBtnRef = useRef<HTMLButtonElement>(null)
  const speedRef = useRef<HTMLDivElement>(null)
  const isHorizontalLayout = (positionY === 'top' || positionY === 'bottom') && positionX === 'center'
  
  const getContainerClass = () => {
    const horizontal = positionX === 'left'
      ? 'justify-start' : positionX === 'right' ? 'justify-end' : 'justify-center'
    const vertical = positionY === 'top'
      ? 'items-start' : positionY === 'bottom' ? 'items-end' : 'items-center'
    return `fixed inset-0 flex ${vertical} ${horizontal}`
  }
  
  const getMainPopupClass = () => {
    const baseClass = "m-2 relative bg-white rounded-3xl shadow-lg font-sans text-gray-900 items-center";
    if (isHorizontalLayout) return `${baseClass} flex flex-row w-auto min-h-0`;
    return `${baseClass} flex flex-col w-auto`;
  }

  const getPopupPosition = () => {
    if (positionX === 'left') return 'ml-2 left-full top-1/2 -translate-y-1/2'
    if (positionX === 'right') return 'mr-2 right-full top-1/2 -translate-y-1/2'
    if (positionY === 'top') return 'mt-2 top-full left-1/2 -translate-x-1/2'
    if (positionY === 'bottom') return 'mb-2 bottom-full left-1/2 -translate-x-1/2'
    return 'right-full top-1/2 -translate-y-1/2'
  }

  const toggleSpeedPopup = () => {
    setShowSpeedPopup((prev) => !prev)
    setShowSettingsPopup(false)
  }

  const toggleSettingsPopup = () => {
    setShowSettingsPopup((prev) => !prev)
    setShowSpeedPopup(false)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node

      if (
        showSpeedPopup && speedRef.current &&
        !speedRef.current.contains(target) && speedBtnRef.current &&
        !speedBtnRef.current.contains(target)
      ) {
        setShowSpeedPopup(false)
      }

      if (
        showSettingsPopup && settingsRef.current &&
        !settingsRef.current.contains(target) && settingsBtnRef.current &&
        !settingsBtnRef.current.contains(target)
      ) {
        setShowSettingsPopup(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showSpeedPopup, showSettingsPopup])

  return (
    <div className={getContainerClass()}>
      <div className={getMainPopupClass()}>
        <PlayPauseButton
          isPlaying={isPlaying}
          togglePlay={togglePlay}
          className='m-2' />
        <PlayPauseTimer
          progress={progress}
          className={isHorizontalLayout ? 'mr-2' : 'mb-2'} />
        <SpeedControlButton
          ref={speedBtnRef}
          positionY={positionY}
          speed={speed}
          onClick={toggleSpeedPopup}
          className={isHorizontalLayout ? 'mr-2' : 'mb-2'} />
        <Divider
          isHorizontal={isHorizontalLayout}
          className={isHorizontalLayout ? 'mr-2' : 'mb-2'} />
        <SettingsButton
          ref={settingsBtnRef}
          onClick={toggleSettingsPopup}
          className={isHorizontalLayout ? 'mr-2' : 'mb-2'} />
        {showSpeedPopup && (
          <SpeedControlPopup
            ref={speedRef}
            speed={speed}
            onChangeSpeed={changeSpeed}
            onClose={() => setShowSpeedPopup(false)}
            getPopupPosition={getPopupPosition} />
        )}
        {showSettingsPopup && (
          <SettingsPopup
            ref={settingsRef}
            positionX={positionX}
            positionY={positionY}
            setPositionX={setPositionX}
            setPositionY={setPositionY}
            getPopupPosition={getPopupPosition}
            onClose={() => setShowSettingsPopup(false)} />
        )}
      </div>
    </div>
  )
}
