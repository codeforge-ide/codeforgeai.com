'use client'

interface SlideProps {
  isActive: boolean
  slideIndex: number
  totalSlides: number
}

export default function FeaturesSlide({ isActive }: SlideProps) {
  const features = [
    {
      title: 'Intelligent Agent System',
      description: 'Deploy specialized AI agents for different tasks - coding, testing, documentation, and deployment.',
      icon: '🤖',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Context-Aware Assistance',
      description: 'CLI understands your project structure, dependencies, and coding patterns for relevant suggestions.',
      icon: '🧠',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Seamless Integration',
      description: 'Works with any development environment - VS Code, terminal, CI/CD pipelines, and existing tools.',
      icon: '🔗',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Extensible Architecture',
      description: 'Build custom agents and workflows. Plugin system supports team-specific requirements.',
      icon: '🔧',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <div className={`w-full h-full flex flex-col justify-center px-16 transition-all duration-700 ${
      isActive ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
    }`}>
      <div className="max-w-6xl">
        <h2 className="text-6xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Core Features
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group bg-gradient-to-br from-black/40 to-gray-900/40 p-8 rounded-2xl border border-gray-600/20 hover:border-gray-400/40 transition-all duration-500 transform ${
                isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: isActive ? `${index * 150}ms` : '0ms' }}
            >
              <div className="flex items-start space-x-4">
                <div className={`text-4xl p-3 rounded-xl bg-gradient-to-r ${feature.color} bg-opacity-20`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-semibold mb-3 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <div className={`mt-6 h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}