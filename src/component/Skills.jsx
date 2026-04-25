import React from 'react'

export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">My Expertise</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-gray-800">Skills & Technologies</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 cursor-pointer group" onClick={() => alert(`${skill.name}: ${skill.level}`)}>
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4 group-hover:scale-110 transition duration-300">{skill.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-1">{skill.name}</h3>
                  <p className="text-sm text-gray-600">{skill.level}</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`} style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
