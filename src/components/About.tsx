interface AboutProps {
  profileImage: string;
}

export function About({ profileImage }: AboutProps) {
  const skills = [
    { name: 'React', percentage: 85 },
    { name: 'DSA', percentage: 80 },
    { name: 'Node.js', percentage: 75 },
    { name: 'SQL', percentage: 70 },
    { name: 'Docker', percentage: 65 },
  ];

  const techBadges = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express',
    'HTML5', 'CSS3', 'Tailwind CSS', 'SQL', 'PostgreSQL',
    'Docker', 'Git', 'GitHub', 'Vercel', 'REST APIs',
    'Data Structures', 'Algorithms', 'Linux', 'MongoDB', 'Python',
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
            A passionate learner who loves turning ideas into real-world applications.
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
              I'm an Aspiring Software Engineer
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              I'm Sourav Rajput, a 2nd year engineering student with a strong passion
              for software development. I enjoy building full-stack applications and
              solving complex problems through clean, efficient code.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              My journey in tech started with curiosity and has grown into a deep
              commitment to mastering both frontend and backend technologies. I spend
              my time sharpening my DSA skills, building projects with React and
              Node.js, and exploring DevOps tools like Docker.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              I believe in learning by building. Every project I take on is a chance
              to grow, experiment, and push my limits as a developer.
            </p>

            {/* Tech Badges */}
            <div className="pt-4">
              <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-xs font-medium rounded-full border border-[#FF6B35]/30 text-gray-300 bg-[#FF6B35]/5 hover:bg-[#FF6B35]/20 hover:border-[#FF6B35] hover:text-white transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <button className="bg-[#FF6B35] text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-[#ff7f50] hover:shadow-[0_0_30px_rgba(255,107,53,0.4)] hover:scale-105 transition-all duration-300 mt-4">
              Contact Me
            </button>
          </div>
        </div>

        {/* Circular Progress Indicators */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {skills.map((skill, index) => {
            const { circumference, offset } = getCircleProgress(skill.percentage);

            return (
              <div key={index} className="flex flex-col items-center space-y-4 group">
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
                    <span className="text-2xl font-bold text-white group-hover:text-[#FF6B35] transition-colors">{skill.percentage}%</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm font-medium text-center">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
