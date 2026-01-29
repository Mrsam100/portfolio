import { Code, Server, Database, Container, GitBranch, Rocket } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building responsive, interactive user interfaces using React, TypeScript, and modern CSS frameworks like Tailwind.',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Designing and developing RESTful APIs and server-side logic with Node.js, Express, and scalable architectures.',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Structuring and managing data with SQL databases like PostgreSQL and MySQL, along with NoSQL solutions like MongoDB.',
    },
    {
      icon: Container,
      title: 'DevOps & Deployment',
      description: 'Containerizing applications with Docker and deploying seamlessly using platforms like Vercel and cloud services.',
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Managing codebases efficiently with Git and GitHub — branching, pull requests, code reviews, and CI/CD workflows.',
    },
    {
      icon: Rocket,
      title: 'DSA & Problem Solving',
      description: 'Solving complex algorithmic challenges and building efficient solutions with strong fundamentals in data structures and algorithms.',
    },
  ];

  return (
    <section id="services" className="min-h-screen bg-[#0f0f0f] px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm mb-2 font-light">Services</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4">
            What I Do
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto font-light">
            From crafting pixel-perfect UIs to building robust backends — here's what I bring to the table.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg p-8 border border-[#2a2a2a] hover:border-[#FF6B35] transition-all duration-300 group hover:shadow-[0_0_30px_rgba(255,107,53,0.1)] hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FF6B35]/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-[#FF6B35]" />
              </div>

              {/* Content */}
              <h3 className="text-xl text-white font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
