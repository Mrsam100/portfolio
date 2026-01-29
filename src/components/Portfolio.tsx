import { useState } from 'react';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'UI/UX', 'Web Design', 'App Design', 'Graphic Design'];

  const projects = [
    {
      title: 'Graphic Design',
      category: 'Graphic Design',
      image: 'https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
    {
      title: 'Web Design',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
    {
      title: 'App Design',
      category: 'App Design',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
    {
      title: 'UI/UX Design',
      category: 'UI/UX',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
    {
      title: 'Dashboard',
      category: 'UI/UX',
      image: 'https://images.unsplash.com/photo-1691725909676-105654d24649?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
    {
      title: 'App Screens',
      category: 'App Design',
      image: 'https://images.unsplash.com/photo-1719464521902-4dc9595b182d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
    {
      title: 'Graphic Design',
      category: 'Graphic Design',
      image: 'https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
    {
      title: 'Web Design',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
    {
      title: 'App Design',
      category: 'App Design',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="min-h-screen bg-[#0f0f0f] px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-500 text-sm mb-2 font-light">Portfolio</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-8">
            Portfolio
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-[#FF6B35] text-white'
                    : 'bg-transparent text-gray-400 border border-gray-700 hover:border-[#FF6B35]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#2a2a2a] hover:border-[#FF6B35] transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                <h3 className="text-xl text-white font-semibold">{project.title}</h3>
                <p className="text-[#FF6B35] text-sm">{project.category}</p>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-4 left-4 bg-[#FF6B35] text-white px-4 py-1 rounded text-xs font-medium">
                {project.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
