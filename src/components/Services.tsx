import { Palette, Code, Smartphone, Layout, Search, Zap } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Palette,
      title: 'App Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor auctor, tincidunt lectus vitae.',
    },
    {
      icon: Code,
      title: 'Web Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor auctor, tincidunt lectus vitae.',
    },
    {
      icon: Smartphone,
      title: 'App Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor auctor, tincidunt lectus vitae.',
    },
    {
      icon: Layout,
      title: 'App Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor auctor, tincidunt lectus vitae.',
    },
    {
      icon: Search,
      title: 'Seo Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor auctor, tincidunt lectus vitae.',
    },
    {
      icon: Zap,
      title: 'App Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor auctor, tincidunt lectus vitae.',
    },
  ];

  return (
    <section id="services" className="min-h-screen bg-[#0f0f0f] px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm mb-2 font-light">Services</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4">
            Services
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor auctor, 
            tincidunt lectus vitae.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg p-8 border border-[#2a2a2a] hover:border-[#FF6B35] transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FF6B35]/20 transition-colors">
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
