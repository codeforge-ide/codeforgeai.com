'use client'

interface SlideProps {
  isActive: boolean
  slideIndex: number
  totalSlides: number
}

export default function TitleSlide({ isActive }: SlideProps) {
  return (
    <div className={`w-full h-full flex flex-col justify-center items-center text-center transition-all duration-700 ${
      isActive ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
    }`}>
      <div className="max-w-4xl px-8">
        <h1 className="text-7xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-green-400 bg-clip-text text-transparent">
          CodeForge AI
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-12 font-light">
          The CLI-Powered Future of AI Development
        </p>
        <div className="flex justify-center items-center space-x-6">
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
          <span className="text-lg text-gray-400 font-mono">codeforgeai.go</span>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-green-500 rounded"></div>
        </div>
      </div>
    </div>
  )
}