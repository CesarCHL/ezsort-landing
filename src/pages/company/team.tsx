import Navbar from "@/components/navbar";

export default function Team() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">The Team</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl w-full">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Meet the team</h2>
          <p className="text-gray-600 leading-relaxed">
            Nuestro equipo está compuesto por profesionales apasionados y dedicados que trabajan juntos para lograr nuestros objetivos y brindar el mejor servicio a nuestros clientes.
          </p>
        </section>
      </div>
    </div>
  </div>
  );
}
