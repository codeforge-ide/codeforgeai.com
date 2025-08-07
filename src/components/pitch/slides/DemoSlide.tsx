'use client'

interface SlideProps {
  isActive: boolean
  slideIndex: number
  totalSlides: number
}

export default function DemoSlide({ isActive }: SlideProps) {
  const demoSteps = [
    { command: '$ codeforge agent deploy --type api', description: 'Launch API development agent' },
    { command: '$ codeforge code --generate user-auth', description: 'Generate authentication system' },
    { command: '$ codeforge review --ai --security', description: 'AI-powered security review' },
    { command: '$ codeforge deploy --optimize', description: 'Intelligent deployment with optimizations' }
  ]

  return (
    <div className={`w-full h-full flex flex-col justify-center px-16 transition-all duration-700 ${
      isActive ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
    }`}>
      <div className="max-w-6xl">
        <h2 className="text-6xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          See It In Action
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-semibold text-cyan-400 mb-4">
                From Idea to Production in Minutes
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Watch how CodeForge AI CLI transforms complex development workflows 
                into simple, intelligent commands.
              </p>
            </div>
            
            <div className="space-y-4">
              {demoSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`transform transition-all duration-700 ${
                    isActive ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: isActive ? `${200 + index * 200}ms` : '0ms' }}
                >
                  <div className="flex items-start space-x-4 p-4 bg-black/20 rounded-lg border border-cyan-500/20">
                    <div className="text-cyan-400 font-bold text-lg">{index + 1}</div>
                    <div>
                      <div className="font-mono text-green-400 text-sm mb-1">{step.command}</div>
                      <div className="text-gray-300">{step.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`bg-black/60 rounded-2xl p-8 border border-cyan-500/30 transform transition-all duration-1000 ${
            isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`} style={{ transitionDelay: isActive ? '800ms' : '0ms' }}>
            <div className="font-mono text-sm space-y-4">
              <div className="text-cyan-400 border-b border-cyan-500/30 pb-2">
                CodeForge AI Terminal Session
              </div>
              
              <div className="space-y-3">
                <div>
                  <span className="text-green-400">user@dev:~$</span> 
                  <span className="text-white"> codeforge agent deploy --type api</span>
                </div>
                <div className="text-blue-300 ml-4">✓ API agent initialized</div>
                <div className="text-blue-300 ml-4">✓ Project structure analyzed</div>
                <div className="text-blue-300 ml-4">✓ Dependencies optimized</div>
                
                <div className="mt-4">
                  <span className="text-green-400">user@dev:~$</span> 
                  <span className="text-white"> codeforge code --generate user-auth</span>
                </div>
                <div className="text-yellow-300 ml-4">🤖 Generating secure authentication...</div>
                <div className="text-green-300 ml-4">✅ JWT implementation complete</div>
                <div className="text-green-300 ml-4">✅ Tests generated and passing</div>
                
                <div className="mt-4 text-purple-300">
                  🚀 Ready for deployment in 2m 34s
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}