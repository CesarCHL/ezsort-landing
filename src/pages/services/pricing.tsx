import Navbar from "@/components/navbar";
import Card from "@/components/ui/pricing_card";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Pricing</h1>
        <section className="py-6">
            <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <Card/>
            </div>
            </div>
        </section>
      </div>
    </div>
  );
}

