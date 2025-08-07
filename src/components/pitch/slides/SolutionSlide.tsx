'use client'

interface SlideProps {
  isActive: boolean
  slideIndex: number
  totalSlides: number
}

export default function SolutionSlide({ isActive }: SlideProps) {
  return (
    <div className={`w-full h-full flex flex-col justify-center px-16 transition-all duration-700 ${
      isActive ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
    }`}>
      <div className="max-w-5xl">
        <h2 className="text-6xl font-bold mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Our Solution
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className={`transform transition-all duration-700 ${
              isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: isActive ? '200ms' : '0ms' }}>
              <h3 className="text-3xl font-semibold text-green-400 mb-4">CodeForge AI CLI</h3>
              <p className="text-xl text-gray-300">
                A powerful command-line interface that integrates AI assistance directly 
                into your development workflow.
              </p>
            </div>
            
            <div className={`transform transition-all duration-700 ${
              isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: isActive ? '400ms' : '0ms' }}>
              <h4 className="text-2xl font-semibold text-blue-400 mb-3">Key Benefits:</h4>
              <ul className="space-y-3 text-lg text-gray-300">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Zero-configuration AI agents</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Seamless terminal integration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Extensible agent ecosystem</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className={`bg-black/40 rounded-2xl p-6 border border-green-500/20 transform transition-all duration-700 ${
            isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`} style={{ transitionDelay: isActive ? '600ms' : '0ms' }}>
            <div className="font-mono text-sm">
              <div className="text-green-400 mb-2">$ codeforge --help</div>
              <div className="text-gray-400 space-y-1">
                <div>CodeForge AI CLI v2.0.0</div>
                <div className="text-blue-300">
                  ⚡ Lightning-fast AI development
                </div>
                <div className="mt-4 space-y-1">
                  <div className="text-yellow-300">Commands:</div>
                  <div>  agent    Launch AI agents</div>
                  <div>  code     Generate & refactor</div>
                  <div>  review   AI code reviews</div>
                  <div>  deploy   Smart deployments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}