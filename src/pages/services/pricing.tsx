import Navbar from "@/components/navbar";
import Card from "@/components/ui/pricing_card";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="min-h-screen bg-gray-100">
        {/* Page header with landing palette */}
        <header className="w-full bg-gradient-to-br from-[#424d70] to-[#525d80] text-white py-12 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="inline-block bg-[#fe661b]/10 text-[#fe661b] px-3 py-1 rounded-full text-sm font-medium mb-4">

              Pricing
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Simple pricing that scales with you
            </h1>
            <p className="mt-3 text-lg text-gray-200 max-w-2xl mx-auto">
              Choose a plan, start for free, and scale as your business grows. No
              hidden fees — just clear value.
            </p>
          </div>
        </header>

        {/* Cards panel */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white shadow-2xl rounded-2xl p-8 -mt-16">
              <div className="flex justify-center">
                <div className="w-full max-w-5xl">
                  <Card />
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-start p-6 rounded-xl border border-gray-100 bg-gray-50">
                  <h4 className="text-lg font-semibold text-[#424d70] mb-2">
                    Everything you need
                  </h4>
                  <p className="text-gray-600">
                    Core sorting features, flexible rules, and integrations—so you
                    can onboard quickly and scale safely.
                  </p>
                </div>

                <div className="flex flex-col items-start p-6 rounded-xl border border-gray-100 bg-gray-50">
                  <h4 className="text-lg font-semibold text-[#424d70] mb-2">
                    Transparent billing
                  </h4>
                  <p className="text-gray-600">
                    Flat yearly options with clear limits — upgrade any
                    time without surprises.
                  </p>
                </div>

                <div className="flex flex-col items-start p-6 rounded-xl border border-gray-100 bg-gray-50">
                  <h4 className="text-lg font-semibold text-[#424d70] mb-2">
                    Enterprise-ready
                  </h4>
                  <p className="text-gray-600">
                    SLA, dedicated onboarding and priority support for larger teams
                    and custom workflows.
                  </p>
                </div>
              </div>

              {/* Comparison / small note row */}
              <div className="mt-8 text-center text-sm text-gray-500">
                <span>
                  All plans include secure storage, audit logs and email support.
                  Need a custom plan?{" "}
                </span>
                <a
                  href="#contact"
                  className="text-[#fe661b] font-semibold hover:underline"
                >
                  Contact sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="py-8 bg-gradient-to-r from-[#fe661b] to-[#e55a18] text-white">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">Ready to get started?</h3>
              <p className="text-sm text-[#fff]/90">
                Start your free trial today. No credit card required.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <a
                className="inline-block bg-white text-[#fe661b] font-semibold px-6 py-3 rounded-full shadow-lg hover:opacity-90"
                href="#"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

