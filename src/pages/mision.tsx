import Navbar from '../components/navbar';

export default function Mision() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#424d70] to-[#525d80] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Our <span className="text-[#fe661b]">Mission</span> and <span className="text-[#fe661b]">Vision</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover the values and goals that drive our commitment to excellence
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-r from-[#fe661b]/5 to-transparent p-8 rounded-2xl border-l-4 border-[#fe661b]">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#424d70]">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To provide innovative and efficient solutions that make our users' lives easier, promoting efficiency through technology.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#fe661b]/10 text-[#fe661b] rounded-full text-sm font-medium">
                    Innovation
                  </span>
                  <span className="px-4 py-2 bg-[#424d70]/10 text-[#424d70] rounded-full text-sm font-medium">
                    Efficiency
                  </span>
                  <span className="px-4 py-2 bg-[#fe661b]/10 text-[#fe661b] rounded-full text-sm font-medium">
                    Sustainability
                  </span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                  alt="Team collaboration representing our mission"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#424d70]/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                  alt="Future vision and growth representing our aspirations"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fe661b]/40 to-transparent"></div>
              </div>
            </div>
            <div className="order-2">
              <div className="bg-gradient-to-r from-[#424d70]/5 to-transparent p-8 rounded-2xl border-l-4 border-[#424d70]">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#424d70]">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We aspire to be leaders in our sector, recognized for our ability to transform ideas into tangible realities that generate a positive impact on the global community.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#424d70]/10 text-[#424d70] rounded-full text-sm font-medium">
                    Leadership
                  </span>
                  <span className="px-4 py-2 bg-[#fe661b]/10 text-[#fe661b] rounded-full text-sm font-medium">
                    Transformation
                  </span>
                  <span className="px-4 py-2 bg-[#424d70]/10 text-[#424d70] rounded-full text-sm font-medium">
                    Global Impact
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-[#424d70] to-[#525d80]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Want to be part of our vision?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join us on this journey toward a more innovative and sustainable future
          </p>
          <button className="bg-[#fe661b] hover:bg-[#e55a18] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            Meet Our Team
          </button>
        </div>
      </section>
    </div>
  );
}