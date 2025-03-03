import React from 'react';
import Logo from './Logo';

const Hero = () => {
  return (
    <div className="py-20 px-6 md:px-12 text-center">
      <div className="inline-flex items-center bg-[#121212] rounded-full px-4 py-2 mb-6">
        <span className="text-primary font-semibold mr-2">Providing</span>
      <span className="bg-[#FFD700] text-[#0a0a0a] font-semibold py-2 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300 text-dark ">Quality</span>
        <span className="ml-2">Education</span>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        <span className="text-gray-400">Generate</span> Courses, Quizzes and Animation <span className="text-gray-400"> in an instant</     span>
      </h1>
      
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#FFD700]">
        with AI-Powered Intelligence
      </h2>
      
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
        We provide a platform for educators to create and generate courses, quizzes and animations in an instant with AI-Powered Intelligence.
      </p>
      
      <button className="bg-[#FFD700] text-[#0a0a0a] font-semibold py-2 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300 text-lg px-8 py-3">Join Waitlist</button>
      
      <div className="mt-16 max-w-5xl mx-auto">
        <div className="bg-darkgray rounded-xl overflow-hidden border border-lightgray">
          <div className="border-b border-lightgray p-4 flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span className="ml-2 text-gray-400">CalAI Dashboard</span>
          </div>
          <div className="p-4 bg-[#0f0f0f]">
            <div className="flex">
              <div className="w-1/4 border-r border-lightgray p-4">
                <div className="flex items-center mb-6">
                  <Logo />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-400 hover:text-primary cursor-pointer">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    Dashboard
                  </div>
                  <div className="flex items-center text-primary font-medium">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                    </svg>
                    Course Generation
                  </div>
                  <div className="flex items-center text-gray-400 hover:text-primary cursor-pointer">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    Visualizer
                  </div>
                  <div className="flex items-center text-gray-400 hover:text-primary cursor-pointer">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                    </svg>
                    Speech Assistant
                  </div>
                </div>
              </div>
              <div className="w-3/4 p-4">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Course Generation</h3>
                  <div className="flex justify-between mb-4">
                    <div className="flex space-x-2">
                      <button className="bg-lightgray px-3 py-1 rounded text-sm"></button>
                      <button className="bg-lightgray px-3 py-1 rounded text-sm"></button>
                    </div>
                    <div>
                      <button className="bg-primary text-dark px-3 py-1 rounded text-sm"></button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-darkgray p-4 rounded-lg border border-lightgray flex justify-between items-center">
                      <div>
                        <div className="flex items-center mb-1">
                          <div className="w-8 h-8 rounded-full bg-blue-500 mr-2 flex items-center justify-center text-white font-bold">
                            {String.fromCharCode(64 + item)}
                          </div>
                          <span className="font-medium">Course {item}</span>
                          <span className="ml-2 text-xs bg-green-900 text-green-400 px-2 py-0.5 rounded-full">Physics</span>
                        </div>
                        <p className="text-sm text-gray-400">     Course description </p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="bg-primary text-dark px-3 py-1 rounded-sm text-sm">Review</button>
                        <button className="border border-lightgray px-3 py-1 rounded-sm text-sm">Quizzes</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;