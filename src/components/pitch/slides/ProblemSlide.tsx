'use client'

interface SlideProps {
  isActive: boolean
  slideIndex: number
  totalSlides: number
}

export default function ProblemSlide({ isActive }: SlideProps) {
  const problems = [
    'Developers spend 40% of time on repetitive tasks',
    'Context switching between multiple tools slows productivity',
    'AI assistance is fragmented across different platforms',
    'Complex setups prevent teams from adopting AI workflows'
  ]

  return (
    <div className={`w-full h-full flex flex-col justify-center px-16 transition-all duration-700 ${
      isActive ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
    }`}>
      <div className="max-w-5xl">
        <h2 className="text-6xl font-bold mb-16 text-red-400">The Problem</h2>
        <div className="space-y-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className={`flex items-center space-x-6 transform transition-all duration-500 ${
                isActive ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
              }`}
              style={{ transitionDelay: isActive ? `${index * 200}ms` : '0ms' }}
            >
              <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
              <p className="text-2xl text-gray-300">{problem}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 p-8 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl border border-red-500/20">
          <p className="text-xl text-gray-400 italic">
            &ldquo;Development teams need a unified, intelligent CLI that brings AI assistance 
            directly into their existing workflows.&rdquo;
          </p>
        </div>
      </div>
    </div>
  )
}