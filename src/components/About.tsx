interface AboutProps {
  profileImage: string;
}

export function About({ profileImage }: AboutProps) {
  const skills = [
    { name: 'Figma', percentage: 85 },
    { name: 'Sketch', percentage: 75 },
    { name: 'Adobe Photoshop', percentage: 90 },
    { name: 'Adobe Illustrator', percentage: 80 },
    { name: 'Adobe Premier', percentage: 70 },
  ];

  // Function to create circle path for progress
  const getCircleProgress = (percentage: number) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    return { circumference, offset };
  };

  return (
    <section id="about" className="min-h-screen bg-[#1a1a1a] px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm mb-2 font-light">About</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor auctor, 
            tincidunt lectus vitae.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 to-transparent rounded-lg blur-2xl"></div>
              
              <img 
                src={profileImage} 
                alt="About me" 
                className="relative w-full h-auto object-contain rounded-lg mix-blend-lighten grayscale"
                style={{ 
                  filter: 'grayscale(100%) contrast(1.2) brightness(1.1)',
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl text-white font-bold">
              I'm a UI/UX Designer
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat 
              placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat 
              placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus. Lorem 
              ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat 
              placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat 
              placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus. Lorem 
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-[#FF6B35] text-white px-8 py-3 rounded text-sm font-medium hover:bg-[#ff7f50] transition-colors mt-4">
              Contact Me
            </button>
          </div>
        </div>

        {/* Circular Progress Indicators */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {skills.map((skill, index) => {
            const { circumference, offset } = getCircleProgress(skill.percentage);
            
            return (
              <div key={index} className="flex flex-col items-center space-y-4">
                <div className="relative w-32 h-32">
                  {/* SVG Circle */}
                  <svg className="w-32 h-32 transform -rotate-90">
                    {/* Background circle */}
                    <circle
                      cx="64"
                      cy="64"
                      r="50"
                      stroke="#2a2a2a"
                      strokeWidth="8"
                      fill="none"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="64"
                      cy="64"
                      r="50"
                      stroke="#FF6B35"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  {/* Percentage in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{skill.percentage}%</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm font-light text-center">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
