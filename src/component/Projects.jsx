import React from 'react'

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-gray-800">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer transform hover:-translate-y-2" onClick={() => alert(`Opening ${project.name}`)}>
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition duration-300"></div>
                <span className="text-6xl relative z-10 transform group-hover:scale-110 transition duration-300">{project.icon}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition duration-300">{project.name}</h3>
                <p className="text-blue-600 font-medium mb-3 text-sm">{project.tech}</p>
                <p className="text-gray-600 mb-4 text-sm">{project.desc}</p>
                <button className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition duration-300" onClick={(e) => { e.stopPropagation(); alert(`More details about ${project.name}`); }}>
                  View Details
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
