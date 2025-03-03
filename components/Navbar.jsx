import React from 'react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="py-4 px-6 md:px-12 flex justify-between items-center border-b border-lightgray">
      <Logo />
      
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-white hover:text-primary transition-colors">Home</a>
        <a href="#features" className="text-white hover:text-primary transition-colors">Features</a>
        <a href="#pricing" className="text-white hover:text-primary transition-colors">Pricing</a>
        <a href="#testimonials" className="text-white hover:text-primary transition-colors">Testimonials</a>
      </div>
      
      <button className="bg-[#FFD700] text-[#0a0a0a] font-semibold py-2 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300">Join Waitlisting</button>
    </nav>
  );
};

export default Navbar;