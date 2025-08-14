import Navbar from "@/components/navbar";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Pricing</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl w-full">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Our Pricing Plans</h2>
          <p className="text-gray-600 leading-relaxed">
            We offer competitive pricing plans tailored to meet the needs of our clients. Choose the plan that best fits your requirements and budget.
          </p>
        </section>
      </div>
    </div>
    </div>
  );
}