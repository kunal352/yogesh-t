import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-gray-800">Know Me Better</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 h-80 sm:h-96 rounded-2xl shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition duration-500">
                <span className="text-8xl animate-bounce">👨‍💻</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Web Developer</span>
            </h3>

            <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
              With 3+ years of experience in creating modern, responsive websites. I specialize in React.js and Tailwind CSS to build fast, efficient, and beautiful web applications that users love.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100 hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                <p className="font-bold text-blue-600 text-3xl mb-2">50+</p>
                <p className="text-gray-700 font-medium">Projects Completed</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100 hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                <p className="font-bold text-purple-600 text-3xl mb-2">100%</p>
                <p className="text-gray-700 font-medium">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
