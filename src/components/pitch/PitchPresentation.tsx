'use client'

import { useState, useEffect } from 'react'
import TitleSlide from './slides/TitleSlide'
import ProblemSlide from './slides/ProblemSlide'
import SolutionSlide from './slides/SolutionSlide'
import FeaturesSlide from './slides/FeaturesSlide'
import DemoSlide from './slides/DemoSlide'
import CTASlide from './slides/CTASlide'

const slides = [
  { component: TitleSlide, title: 'Title' },
  { component: ProblemSlide, title: 'Problem' },
  { component: SolutionSlide, title: 'Solution' },
  { component: FeaturesSlide, title: 'Features' },
  { component: DemoSlide, title: 'Demo' },
  { component: CTASlide, title: 'Get Started' }
]

export default function PitchPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 8000) // 8 seconds per slide
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlay])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault()
          nextSlide()
          break
        case 'ArrowLeft':
          e.preventDefault()
          prevSlide()
          break
        case 'Home':
          e.preventDefault()
          setCurrentSlide(0)
          break
        case 'End':
          e.preventDefault()
          setCurrentSlide(slides.length - 1)
          break
        case 'p':
        case 'P':
          e.preventDefault()
          setIsAutoPlay(!isAutoPlay)
          break
        case 'Escape':
          e.preventDefault()
          setIsAutoPlay(false)
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isAutoPlay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="min-h-screen bg-gradient-to-bl from-black to-[#0a0a0a] relative overflow-hidden">
      {/* Animated background */}
      <div className="breathing-bg"></div>
      
      {/* Main slide area */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Slide content */}
        <main className="flex-1 relative">
          <CurrentSlideComponent 
            isActive={true}
            slideIndex={currentSlide}
            totalSlides={slides.length}
          />
        </main>

        {/* Navigation controls */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-gray-600/20">
            <div className="flex items-center space-x-6">
              {/* Slide indicators */}
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                        : 'bg-gray-600 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}: ${slides[index].title}`}
                  />
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                  aria-label="Previous slide"
                >
                  ←
                </button>
                
                <button
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isAutoPlay 
                      ? 'bg-green-600/50 hover:bg-green-500/50' 
                      : 'bg-gray-700/50 hover:bg-gray-600/50'
                  }`}
                  aria-label={isAutoPlay ? 'Pause autoplay' : 'Start autoplay'}
                >
                  {isAutoPlay ? '⏸' : '▶'}
                </button>
                
                <button
                  onClick={nextSlide}
                  disabled={currentSlide === slides.length - 1}
                  className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                  aria-label="Next slide"
                >
                  →
                </button>
              </div>

              {/* Slide counter */}
              <div className="text-sm text-gray-400 font-mono">
                {currentSlide + 1} / {slides.length}
              </div>
            </div>
          </div>
        </div>

        {/* Keyboard shortcuts help */}
        <div className="fixed top-8 right-8 z-20">
          <div className="bg-black/40 backdrop-blur-md rounded-lg p-4 border border-gray-600/20">
            <div className="text-xs text-gray-400 space-y-1">
              <div>→ / Space: Next</div>
              <div>← : Previous</div>
              <div>P: Play/Pause</div>
              <div>Esc: Stop autoplay</div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-30">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-green-500 transition-all duration-500 ease-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}