import Navbar from '../components/navbar';

export default function Mision() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Misión y Visión</h1>
        <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl w-full">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Misión</h2>
          <p className="text-gray-600 leading-relaxed">
            Nuestra misión es proporcionar soluciones innovadoras y eficientes que faciliten la vida de nuestros usuarios, promoviendo la sostenibilidad y el bienestar social a través de la tecnología.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Visión</h2>
          <p className="text-gray-600 leading-relaxed">
            Aspiramos a ser líderes en nuestro sector, reconocidos por nuestra capacidad para transformar ideas en realidades tangibles que generen un impacto positivo en la comunidad global.
          </p>
        </section>
        </div>
      </div>
    </div>
  );
}