import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, ArrowRight, Download } from 'lucide-react';

interface HeroProps {
  profileImage: string;
}

const roles = ['UI/UX Designer', 'Software Developer', 'System Architect'];

export function Hero({ profileImage }: HeroProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#1a1a1a] px-6 lg:px-12 py-20 pt-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B35]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-start lg:items-start relative z-10">
        {/* Left side - Text */}
        <div className="space-y-6 z-10 animate-fadeIn">
          <div className="space-y-2">
            <p className="text-[#FF6B35] text-sm md:text-base tracking-widest uppercase font-medium animate-slideDown">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-2 animate-slideRight">
              Sourav Rajput
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight h-16 md:h-20">
              <span className="bg-gradient-to-r from-[#FF6B35] via-[#ff8c5a] to-[#FF6B35] bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="animate-blink text-[#FF6B35]">|</span>
            </h2>
          </div>

          {/* Star Rating */}
          <div className="flex gap-1 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-[#FF6B35] drop-shadow-[0_0_6px_rgba(255,107,53,0.5)]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg animate-slideUp" style={{ animationDelay: '0.3s' }}>
            Crafting intuitive digital experiences that users love. I blend creativity
            with technical expertise to build solutions that make a difference.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <button className="group bg-[#FF6B35] text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-[#ff7f50] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,53,0.4)] hover:scale-105 flex items-center gap-2">
              Hire me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-gray-600 text-white px-8 py-3 rounded-lg text-sm font-semibold hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              Download CV
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-4 animate-slideUp" style={{ animationDelay: '0.5s' }}>
            <a href="#" className="p-3 border border-gray-700 rounded-full text-gray-400 hover:text-[#FF6B35] hover:border-[#FF6B35] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,107,53,0.3)]">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 border border-gray-700 rounded-full text-gray-400 hover:text-[#FF6B35] hover:border-[#FF6B35] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,107,53,0.3)]">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 border border-gray-700 rounded-full text-gray-400 hover:text-[#FF6B35] hover:border-[#FF6B35] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,107,53,0.3)]">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 max-w-md animate-slideUp" style={{ animationDelay: '0.6s' }}>
            <div className="group cursor-default">
              <p className="text-3xl md:text-4xl font-bold text-[#FF6B35] group-hover:scale-110 transition-transform">3+</p>
              <p className="text-gray-500 text-xs md:text-sm font-medium">Years Experience</p>
            </div>
            <div className="group cursor-default">
              <p className="text-3xl md:text-4xl font-bold text-[#FF6B35] group-hover:scale-110 transition-transform">20+</p>
              <p className="text-gray-500 text-xs md:text-sm font-medium">Projects Done</p>
            </div>
            <div className="group cursor-default">
              <p className="text-3xl md:text-4xl font-bold text-[#FF6B35] group-hover:scale-110 transition-transform">5+</p>
              <p className="text-gray-500 text-xs md:text-sm font-medium">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex justify-center lg:justify-end relative animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Animated glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6B35] via-[#ff8c5a] to-[#FF6B35] rounded-full opacity-20 blur-2xl animate-pulse"></div>

            {/* Background gradient circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/30 to-transparent rounded-full blur-3xl"></div>

            {/* Image with enhanced styling */}
            <img
              src={profileImage}
              alt="Sourav Rajput - Portfolio"
              className="relative w-full h-auto object-contain mix-blend-lighten grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              style={{
                filter: 'grayscale(100%) contrast(1.2) brightness(1.1)',
              }}
            />

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#FF6B35]/30 rounded-full animate-spin-slow"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#FF6B35]/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
