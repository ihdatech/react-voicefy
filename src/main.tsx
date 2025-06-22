import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StrictMode } from 'react'
import { PlaybackPopup } from './features/playback/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/playback-popup" element={<PlaybackPopup />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
