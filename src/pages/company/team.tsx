import Navbar from "@/components/navbar";

export default function Team() {
  const teamMembers = [
    {
      name: "María González",
      position: "CEO & Founder",
      message: "Always at your service to help grow your business!",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Carlos Rodríguez",
      position: "Operations Manager",
      message: "Ready to optimize your logistics to the fullest!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Ana Martínez",
      position: "Customer Success",
      message: "Your satisfaction is our number one priority!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Diego López",
      position: "Tech Lead",
      message: "We constantly innovate to offer you the best!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#424d70] to-[#525d80] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-white">
              Meet the Team
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Meet the passionate professionals behind EZ Sort. 
              Each team member is committed to providing you the best service.
            </p>
          </div>

          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <section
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Section */}
                <div className="flex-1 max-w-md mx-auto lg:mx-0">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-[#fe661b] rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                      {member.name}
                    </h3>
                    <div className="inline-block bg-[#fe661b] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
                      {member.position}
                    </div>
                    <blockquote className="text-lg lg:text-xl text-gray-200 italic leading-relaxed mb-6">
                      "{member.message}"
                    </blockquote>
                    <div className="flex justify-center lg:justify-start">
                      <div className="w-20 h-1 bg-[#fe661b] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[#424d70] mb-4">
                Ready to work with us?
              </h2>
              <p className="text-gray-600 mb-6">
                Our team is here to help you optimize your logistics and grow your business.
              </p>
              <button className="bg-[#fe661b] hover:bg-[#e55a18] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Contact Us Today!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
