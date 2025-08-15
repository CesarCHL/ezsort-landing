import Navbar from "@/components/navbar";

export default function Services() {
  const services = [
    {
      title: "Warehouse Management",
      description: "Complete warehouse optimization with advanced sorting and inventory management systems.",
      icon: "🏭",
      favorablePoints: [
        "Reduces processing time by up to 70%",
        "Real-time inventory tracking",
        "Automated sorting systems",
        "24/7 monitoring and support",
        "Scalable solutions for any business size"
      ],
      color: "from-[#424d70] to-[#525d80]"
    },
    {
      title: "Logistics Optimization",
      description: "Smart routing and delivery solutions to maximize efficiency and minimize costs.",
      icon: "🚚",
      favorablePoints: [
        "AI-powered route optimization",
        "Cost reduction up to 45%",
        "Real-time delivery tracking",
        "Multi-platform integration",
        "Environmental impact reduction"
      ],
      color: "from-[#525d80] to-[#424d70]"
    },
    {
      title: "Data Analytics & Insights",
      description: "Advanced analytics to help you make informed business decisions and predict trends.",
      icon: "📊",
      favorablePoints: [
        "Predictive analytics and forecasting",
        "Custom dashboard creation",
        "Performance metrics tracking",
        "Business intelligence reports",
        "Integration with existing systems"
      ],
      color: "from-[#424d70] via-[#525d80] to-[#424d70]"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#424d70] to-[#525d80] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
              Our Services
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of logistics and warehouse management solutions 
              designed to streamline your operations and boost your business efficiency.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#fe661b] to-[#e55a18] rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-80"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-2xl group-hover:scale-105 transition-all duration-300 h-full">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#424d70] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-[#424d70] mb-4 flex items-center">
                      <span className="w-2 h-2 bg-[#fe661b] rounded-full mr-3"></span>
                      Key Benefits
                    </h4>
                    {service.favorablePoints.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-[#fe661b] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button className="w-full bg-gradient-to-r from-[#fe661b] to-[#e55a18] hover:from-[#e55a18] hover:to-[#d54f16] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-12 shadow-2xl max-w-5xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bol  d text-[#424d70] mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join hundreds of satisfied clients who have revolutionized their operations with EZ Sort. 
                Let us help you optimize your logistics and unlock your business potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-[#fe661b] to-[#e55a18] hover:from-[#e55a18] hover:to-[#d54f16] text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Get Started Today
                </button>
                <button className="bg-transparent border-2 border-[#424d70] text-[#424d70] hover:bg-[#424d70] hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}