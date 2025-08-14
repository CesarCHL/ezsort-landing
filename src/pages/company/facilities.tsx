import Navbar from "@/components/navbar";

export default function Facilities() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Facilities</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl w-full">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Our Facilities</h2>
          <p className="text-gray-600 leading-relaxed">
            Our facilities are designed to provide a comfortable and efficient environment for our team and clients. We prioritize safety, accessibility, and sustainability in all our spaces.
          </p>
        </section>
      </div>
    </div>
  </div>
  );
}