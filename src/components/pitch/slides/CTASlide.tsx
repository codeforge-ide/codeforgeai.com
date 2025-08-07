'use client'

interface SlideProps {
  isActive: boolean
  slideIndex: number
  totalSlides: number
}

export default function CTASlide({ isActive }: SlideProps) {
  return (
    <div className={`w-full h-full flex flex-col justify-center items-center text-center transition-all duration-700 ${
      isActive ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
    }`}>
      <div className="max-w-5xl px-8">
        <div className={`transform transition-all duration-1000 ${
          isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Ready to Transform Your Workflow?
          </h2>
        </div>
        
        <div className={`space-y-8 transform transition-all duration-1000 ${
          isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`} style={{ transitionDelay: isActive ? '300ms' : '0ms' }}>
          <p className="text-2xl text-gray-300 mb-12 font-light">
            Join thousands of developers who are already building faster with CodeForge AI
          </p>
          
          <div className="bg-black/40 rounded-2xl p-8 border border-green-500/20 max-w-2xl mx-auto">
            <div className="font-mono text-lg space-y-4">
              <div className="text-green-400">Get started in seconds:</div>
              <div className="bg-black/60 p-4 rounded-lg">
                <span className="text-gray-400">$</span> 
                <span className="text-white"> curl -sSL install.codeforgeai.com | bash</span>
              </div>
              <div className="bg-black/60 p-4 rounded-lg">
                <span className="text-gray-400">$</span> 
                <span className="text-white"> codeforge agent deploy</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`mt-16 space-y-6 transform transition-all duration-1000 ${
          isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`} style={{ transitionDelay: isActive ? '600ms' : '0ms' }}>
          <div className="flex justify-center items-center space-x-8 text-lg text-gray-400">
            <span>✓ Free tier available</span>
            <span>✓ Open source core</span>
            <span>✓ Enterprise ready</span>
          </div>
          
          <div className="flex justify-center space-x-6">
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
          </div>
          
          <p className="text-xl text-gray-400 italic">
            "The future of development is here. Make it yours."
          </p>
        </div>
      </div>
    </div>
  )
}