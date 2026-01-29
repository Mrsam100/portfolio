import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-[#1a1a1a] px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm mb-2 font-light">Contact</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4">
            Contact me
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed tortor auctor, 
            tincidunt lectus vitae.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Form */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:border-[#FF6B35] focus:outline-none transition-colors font-light"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:border-[#FF6B35] focus:outline-none transition-colors font-light"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:border-[#FF6B35] focus:outline-none transition-colors font-light"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:border-[#FF6B35] focus:outline-none transition-colors font-light"
              />
            </div>

            <textarea
              placeholder="Message"
              rows={6}
              className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:border-[#FF6B35] focus:outline-none transition-colors resize-none font-light"
            ></textarea>

            <button className="w-full bg-[#FF6B35] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#ff7f50] transition-colors">
              Send Message
            </button>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-8">
            <div className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1 font-light">Phone</p>
                  <p className="text-white text-sm">+91 9467342853</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1 font-light">Email</p>
                  <p className="text-white text-sm">souravrajput10234@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1 font-light">Address</p>
                  <p className="text-white text-sm">Mohali, Chandigarh, India</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg h-64 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.05373758498!2d76.64608829453122!3d30.704648599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee906da6f81f%3A0x512998f16ce508d8!2sSahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mohali, Chandigarh Location"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-[#2a2a2a] text-center">
          <p className="text-gray-500 text-sm font-light">
            © 2026 <span className="text-[#FF6B35]">Sourav</span>. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
