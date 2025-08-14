import Navbar from "@/components/navbar";

export default function Services(){
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Our Services</h1>
        <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl w-full">
            <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">What We Offer</h2>
            <p className="text-gray-600 leading-relaxed">
                We provide a range of services designed to meet the needs of our clients, ensuring quality and satisfaction in every project we undertake.
            </p>
            </section>
        </div>
        </div>
        </div>
    );
}