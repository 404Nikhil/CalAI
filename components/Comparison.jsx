import React from 'react';

const ComparisonSection = () => {
    return (
        <div className="py-20 px-6 md:px-12 border-t border-[#2a2a2a]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Transform Your Course Creation Experience
            </h2>
            
            <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-16">
                Traditional course creation methods are time-consuming and lack engagement features
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-[#121212] p-8 rounded-xl border border-[#FFD700]">
                    <h3 className="text-2xl font-bold text-[#FFD700] mb-6">With AI Course Creator</h3>
                    <p className="text-lg mb-8">
                        Create engaging quizzes and animations instantly with AI-powered tools
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-[#FFD700] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Generate quizzes in seconds with AI</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-[#FFD700] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Create custom animations automatically</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-[#FFD700] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Interactive and engaging learning content</span>
                        </li>
                    </ul>
                </div>
                
                <div className="bg-[#121212] p-8 rounded-xl border border-[#2a2a2a]">
                    <h3 className="text-2xl font-bold text-gray-400 mb-6">Traditional Method</h3>
                    <p className="text-lg mb-8">
                        Manual creation of quizzes and basic static content
                    </p>
                    <ul className="space-y-4 text-gray-400">
                        <li className="flex items-start">
                            <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                            <span>Hours spent writing quiz questions</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                            <span>Limited to static images and text</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                            <span>Basic, non-interactive content</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ComparisonSection;