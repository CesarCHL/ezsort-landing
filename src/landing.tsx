// import { useEffect } from "react"
import {
  Check,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Star,
  Users,
  Shield,
  Database,
  Workflow,
  Puzzle,
  PhoneOff,
  CircleDollarSign,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
// import { gsap } from "gsap"
import Navbar from "@/components/navbar"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { useRef, useState, useContext } from "react"

export default function EzsortLanding() {
// const main = useRef();
//   const scrollTween = useRef();
//   const [ctx] = useState(gsap.context(() => {}, main));
//   const { completed } = useContext(TransitionContext);

//   const goToSection = (i) => {
//     // Remove the GSAP instance with the specific ID
//     // to prevent memory leak
//     ctx.data.forEach((e) => {
//       if (e.vars && e.vars.id === 'scrollTween') {
//         e.kill();
//       }
//     });
//     ctx.add(() => {
//       scrollTween.current = gsap.to(window, {
//         scrollTo: { y: i * window.innerHeight, autoKill: false },
//         duration: 1,
//         id: 'scrollTween',
//         onComplete: () => (scrollTween.current = null),
//         overwrite: true,
//       });
//     });
//   };

//   useIsomorphicLayoutEffect(() => {
//     if (!completed) return;
//     ctx.add(() => {
//       const panels = gsap.utils.toArray('.panel');
//       panels.forEach((panel, i) => {
//         ScrollTrigger.create({
//           trigger: panel,
//           start: 'top bottom',
//           end: '+=200%',
//           onToggle: (self) =>
//             self.isActive && !scrollTween.current && goToSection(i),
//         });
//       });
//       ScrollTrigger.create({
//         start: 0,
//         end: 'max',
//         snap: 1 / (panels.length - 1),
//       });
//     });
//     return () => ctx.revert();
//   }, [completed]);

  return (
    <div className="w-full">
      {/* <section className="landing-image h-screen w-full flex items-center justify-center bg-gray-100 relative overflow-hidden">
        <img 
          src="src/photos/LOGO EZ SORT-01.png" 
          alt="Landing Image" 
          className="max-w-lg w-full h-auto object-contain"
        />
      </section> */}
      <section className="landing-page relative z-10 bg-white">
        <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section - Mobile First */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#424d70] to-[#525d80]">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 sm:mb-6 bg-[#fe661b]/10 text-[#fe661b] border-[#fe661b]/20 text-xs sm:text-sm">
            Trusted by 1000+ businesses
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Sorting,
            <span className="text-[#fe661b] block sm:inline"> Made Easy</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Transform chaotic data into organized insights with EZ-Sort's management sorting platform. Save hours of
            manual work and make better business decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" className="bg-[#fe661b] hover:bg-[#e55a18] hover: cursor-pointer text-white px-6 sm:px-8 w-full sm:w-auto hover:-translate-y-1 transition-transform duration-200">
              Start Free Trial <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="relative overflow-hidden border-white text-white hover:text-[#424d70] bg-transparent w-full sm:w-auto transition-transform duration-200 hover:-translate-y-1 group hover: cursor-pointer"
            >
              <span className="relative z-10">Learn More</span>
              <span
                className="absolute left-0 bottom-0 w-full h-0 group-hover:h-full bg-white transition-all duration-300 ease-in-out z-0"
                style={{ pointerEvents: "none" }}
                aria-hidden="true"
              />
            </Button>
          </div>
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-300 text-sm sm:text-base">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#fe661b]" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#fe661b]" />
              <span>10,000+ Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#fe661b]" />
              <span>Enterprise Secure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section - Mobile First */}
      <section id="problems" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#424d70] mb-3 sm:mb-4">
              The Data Chaos That's Costing You
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Every day, businesses struggle with these critical data management challenges
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Puzzle className="w-5 h-5 sm:w-6 sm:h-6 text-[#424d70]" />
                </div>
                <CardTitle className="text-[#424d70] text-lg sm:text-xl">The Progress Puzzle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base">
                  Limited access to quality progress creates uncertainty, complications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <PhoneOff className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                </div>
                <CardTitle className="text-[#424d70] text-lg sm:text-xl">The Communication Black Hole</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base">
                  Problems in communication with providers cause delays and inefficiencies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <CircleDollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                </div>
                <CardTitle className="text-[#424d70] text-lg sm:text-xl">The Hidden Cost Trap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base">
                  Hidden fees and unclear pricing complicate service costs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#424d70] mb-3 sm:mb-4">
              Smart Solutions That Actually Work
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              EZ-Sort transforms your data chaos into competitive advantages
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-l-4 border-l-[#fe661b] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#fe661b]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Database className="w-5 h-5 sm:w-6 sm:h-6 text-[#fe661b]" />
                </div>
                <CardTitle className="text-[#424d70] text-lg sm:text-xl">Crystal-Clear Clarity, Always</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  EZ-Sort ensures complete transparency with real-time data, giving you an immediate, precise view of every detail.
                </p>
                {/* <ul className="space-y-2">
                  <li className="flex items-center text-xs sm:text-sm text-gray-600">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#fe661b] mr-2 flex-shrink-0" />
                    EZ-Sort streamlines the execution of all your services, making sure everything runs smoothly and on schedule.
                  </li>
                  <li className="flex items-center text-xs sm:text-sm text-gray-600">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#fe661b] mr-2 flex-shrink-0" />
                    Real-time synchronization
                  </li>
                </ul> */}
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#fe661b] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#fe661b]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Workflow className="w-5 h-5 sm:w-6 sm:h-6 text-[#fe661b]" />
                </div>
                <CardTitle className="text-[#424d70] text-lg sm:text-xl">Seamless Service, Every Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
EZ-Sort streamlines the execution of all your services, making sure everything runs smoothly and on schedule.                </p>
                <ul className="space-y-2">
                  {/* <li className="flex items-center text-xs sm:text-sm text-gray-600">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#fe661b] mr-2 flex-shrink-0" />
                    95% accuracy rate
                  </li>
                  <li className="flex items-center text-xs sm:text-sm text-gray-600">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#fe661b] mr-2 flex-shrink-0" />
                    Custom sorting rules
                  </li> */}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#fe661b] hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#fe661b]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#fe661b]" />
                </div>
                <CardTitle className="text-[#424d70] text-lg sm:text-xl">Predictable Costs, No Surprises</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
Our transparent pricing means no hidden fees or surprise charges. Our straightforward plans fit your budget, no matter the size of your business, without sacrificing quality.

                </p>
                <ul className="space-y-2">
                  {/* <li className="flex items-center text-xs sm:text-sm text-gray-600">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#fe661b] mr-2 flex-shrink-0" />
                    Duplicate detection
                  </li>
                  <li className="flex items-center text-xs sm:text-sm text-gray-600">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#fe661b] mr-2 flex-shrink-0" />
                    Format standardization
                  </li> */}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#424d70]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-stretch md:space-x-12">
          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Why Choose EZ-Sort?</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-4xl mx-auto md:mx-0 mb-8 sm:mb-12 px-4 md:px-0 leading-relaxed">
          EZ-Sort offers businesses a comprehensive platform for managing quality services with real-time visibility, seamless communication, and transparent cost structures.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-4xl mx-auto md:mx-0 mb-0 px-4 md:px-0 leading-relaxed">
          By providing up-to-date reports, and clear pricing breakdowns, EZ-Sort enables businesses
          to streamline operations, improve decision making, and optimize budgets, ensuring efficient, accurate service delivery and cost management.
        </p>
          </div>
          {/* Image */}
            <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0 pr-4">
              <img
              src="src/photos/ELEMENTOS EZ SORT-07.png"
              alt="EZ-Sort dashboard mockup"
              className="rounded-lg w-40 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto object-contain mx-auto"
              style={{ minHeight: "180px", maxWidth: "100%" }}
              />
            </div>
        </div>
      </section>


      {/* How It Works - Mobile First */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#424d70] mb-3 sm:mb-4">How EZ-Sort Works</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Streamlined Service Management with EZ-Sort            </p>
          </div>
          <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#fe661b] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-lg sm:text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#424d70] mb-3 sm:mb-4">Tell Us What You Need</h3>
              <p className="text-gray-600 text-sm sm:text-base px-4">
                Easily share your requirements through our intuitive platform. Just a few clicks and we'll have a clear understanding of your goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#fe661b] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-lg sm:text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#424d70] mb-3 sm:mb-4">We Connect You</h3>
              <p className="text-gray-600 text-sm sm:text-base px-4">
                Our smart system matches you with top-tier providers tailored to your specific needs. No more sifting through endless options we do the work for you.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#fe661b] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-lg sm:text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#424d70] mb-3 sm:mb-4">Get Clear Results</h3>
              <p className="text-gray-600 text-sm sm:text-base px-4">
                Receive transparent proposals and quality progress updates, so you always know what to expect and can track your service's success every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Mobile First */}
      <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#424d70] mb-3 sm:mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Choose the plan that fits your business needs
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader className="text-center">
          <CardTitle className="text-[#424d70] text-lg sm:text-xl">Basic</CardTitle>
          <CardDescription className="text-sm sm:text-base">Perfect for small teams</CardDescription>
          <div className="mt-3 sm:mt-4">
            <span className="text-3xl sm:text-4xl font-bold text-[#424d70]">$600</span>
            <span className="text-gray-600 text-sm sm:text-base">/year</span>
          </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
          <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            <li className="flex items-center text-sm sm:text-base">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#fe661b] mr-2 sm:mr-3 flex-shrink-0" />
              Up to 10,000 records
            </li>
            <li className="flex items-center text-sm sm:text-base">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#fe661b] mr-2 sm:mr-3 flex-shrink-0" />5 data sources
            </li>
            <li className="flex items-center text-sm sm:text-base">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#fe661b] mr-2 sm:mr-3 flex-shrink-0" />
              Basic sorting rules
            </li>
            <li className="flex items-center text-sm sm:text-base">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#fe661b] mr-2 sm:mr-3 flex-shrink-0" />
              Email support
            </li>
          </ul>
          <div className="mt-auto">
            <Button className="w-full bg-[#424d70] hover:bg-[#525d80] text-white hover: cursor-pointer">
              Get Basic
            </Button>
          </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#fe661b] hover:shadow-lg transition-shadow relative lg:col-span-1 flex flex-col h-full">
              <Badge className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 bg-[#fe661b] text-white text-xs sm:text-sm">
          Most Popular
              </Badge>
              <CardHeader className="text-center">
          <CardTitle className="text-[#424d70] text-lg sm:text-xl">Premium</CardTitle>
          <CardDescription className="text-sm sm:text-base">For growing businesses</CardDescription>
          <div className="mt-3 sm:mt-4">
            <span className="text-3xl sm:text-4xl font-bold text-[#424d70]">$1000</span>
            <span className="text-gray-600 text-sm sm:text-base">/year</span>
          </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
          <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            <li className="flex items-center text-sm sm:text-base">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#fe661b] mr-2 sm:mr-3 flex-shrink-0" />
              Up to 100,000 records
            </li>
            <li className="flex items-center text-sm sm:text-base">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#fe661b] mr-2 sm:mr-3 flex-shrink-0" />
              Unlimited data sources
            </li>
            <li className="flex items-center text-sm sm:text-base">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#fe661b] mr-2 sm:mr-3 flex-shrink-0" />
              Advanced AI sorting
            </li>
            <li className="flex items-center text-sm sm:text-base">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#fe661b] mr-2 sm:mr-3 flex-shrink-0" />
              Priority support
            </li>
            <li className="flex items-center text-sm sm:text-base">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#fe661b] mr-2 sm:mr-3 flex-shrink-0" />
              API access
            </li>
          </ul>
          <div className="mt-auto">
            <Button className="w-full bg-[#fe661b] hover:bg-[#e55a18] text-white hover: cursor-pointer">
              Get Premium
            </Button>
          </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1 flex flex-col h-full">
              <CardHeader className="text-center">
          <CardTitle className="text-[#424d70] text-lg sm:text-xl">Enterprise</CardTitle>
          <CardDescription className="text-sm sm:text-base">For large organizations</CardDescription>
          <div className="mt-3 sm:mt-4">
            <span className="text-3xl sm:text-4xl font-bold text-[#424d70]">$1800</span>
            <span className="text-gray-600 text-sm sm:text-base">/year</span>
          </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
          <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            <li className="flex items-center text-sm sm:text-base">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#fe661b] mr-2 sm:mr-3 flex-shrink-0" />
              Unlimited records
            </li>
            <li className="flex items-center text-sm sm:text-base">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#fe661b] mr-2 sm:mr-3 flex-shrink-0" />
              Custom integrations
            </li>
            <li className="flex items-center text-sm sm:text-base">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#fe661b] mr-2 sm:mr-3 flex-shrink-0" />
              White-label options
            </li>
            <li className="flex items-center text-sm sm:text-base">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#fe661b] mr-2 sm:mr-3 flex-shrink-0" />
              Dedicated support
            </li>
            <li className="flex items-center text-sm sm:text-base">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#fe661b] mr-2 sm:mr-3 flex-shrink-0" />
              SLA guarantee
            </li>
          </ul>
          <div className="mt-auto">
            <Button className="w-full bg-[#424d70] hover:bg-[#525d80] text-white hover: cursor-pointer">
              Get Enterprise
            </Button>
          </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Where to Purchase - Mobile First */}
      {/* <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#424d70] mb-4 sm:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Choose your preferred way to purchase EZ-Sort and start organizing your data today
          </p>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#fe661b]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Database className="w-6 h-6 sm:w-8 sm:h-8 text-[#fe661b]" />
                </div>
                <CardTitle className="text-[#424d70] text-lg sm:text-xl">Direct Purchase</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Buy directly from our website with instant access and setup
                </p>
                <Button className="bg-[#fe661b] hover:bg-[#e55a18] text-white w-full sm:w-auto">Buy Now</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#fe661b]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#fe661b]" />
                </div>
                <CardTitle className="text-[#424d70] text-lg sm:text-xl">Partner Resellers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Purchase through our certified partner network for local support
                </p>
                <Button
                  variant="outline"
                  className="border-[#424d70] text-[#424d70] hover:bg-[#424d70] hover:text-white bg-transparent w-full sm:w-auto"
                >
                  Find Partners
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#fe661b]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-[#fe661b]" />
                </div>
                <CardTitle className="text-[#424d70] text-lg sm:text-xl">Sales Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Speak with our sales team for custom pricing and enterprise solutions
                </p>
                <Button
                  variant="outline"
                  className="border-[#424d70] text-[#424d70] hover:bg-[#424d70] hover:text-white bg-transparent w-full sm:w-auto"
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* What's Happening Next - Mobile First */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#424d70]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">What Happens Next?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto px-4">
              Your journey to organized data starts here
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#fe661b] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-base sm:text-lg font-bold text-white">1</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Sign Up</h3>
              <p className="text-gray-300 text-xs sm:text-sm px-2">
                Create your account and start your free 30-day trial instantly
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#fe661b] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-base sm:text-lg font-bold text-white">2</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Onboarding</h3>
              <p className="text-gray-300 text-xs sm:text-sm px-2">
                Our team will help you set up and configure EZ-Sort for your needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#fe661b] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-base sm:text-lg font-bold text-white">3</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Upload Data</h3>
              <p className="text-gray-300 text-xs sm:text-sm px-2">
                Upload your first dataset and watch EZ-Sort work its magic
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#fe661b] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-base sm:text-lg font-bold text-white">4</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">See Results</h3>
              <p className="text-gray-300 text-xs sm:text-sm px-2">
                Experience the power of perfectly organized data in minutes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Mobile First */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#fe661b] to-[#ff7a2e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
Call to Action          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
Our dedicated team is ready to offer the
support and guidance you need, ensuring a
smooth start as you explore the powerful
capabilities of EZ-Sort and transform your
service management experience.          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
        <Button className="bg-white hover:bg-[#525d80] hover:text-white text-[#fe661b] hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer text-sm px-4 py-2 sm:px-6 sm:py-2 relative overflow-hidden group flex items-center">
          <span className="relative z-10 flex items-center">
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </span>
          <span
            className="absolute inset-0 bg-[#525d80] transition-all duration-200 ease-in-out scale-x-0 group-hover:scale-x-100 origin-left z-0"
            aria-hidden="true"
          />
        </Button>
          </div>
          <p className="text-white/80 text-xs sm:text-sm mt-3 sm:mt-4">
        30-day free trial &bull; Cancel anytime
          </p>
        </div>
      </section>

      {/* Contact Us - Mobile First */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#424d70] mb-3 sm:mb-4">Get in Touch</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Have questions? We're here to help you succeed with EZ-Sort
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#fe661b]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-[#fe661b]" />
                </div>
                <CardTitle className="text-[#424d70] text-lg sm:text-xl">Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Get help from our support team</p>
                <p className="font-semibold text-[#424d70] text-sm sm:text-base">support@ezsort.com</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">Response within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#fe661b]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-[#fe661b]" />
                </div>
                <CardTitle className="text-[#424d70] text-lg sm:text-xl">Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Speak directly with our team</p>
                <p className="font-semibold text-[#424d70] text-sm sm:text-base">+1 219 786 9078</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">Mon-Fri, 9AM-6PM EST</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#fe661b]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#fe661b]" />
                </div>
                <CardTitle className="text-[#424d70] text-lg sm:text-xl">Office Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Visit our headquarters</p>
                <p className="font-semibold text-[#424d70] text-sm sm:text-base">
                  3680 Tierra Alba Dr
                  <br />
                  El Paso, TX 79938
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">By appointment only</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer - Mobile First */}
      <footer className="bg-[#424d70] text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="md:col-span-2 lg:col-span-1">
                <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                  <img src="public/photos/ELEMENTOS EZ SORT-04 (1).png" alt="ezsort logo" className="h-28 w-auto max-h-36" />
                  {/* <Database className="w-4 h-4 sm:w-5 sm:h-5 text-white" /> */}
                </div>
              {/* <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Transforming how businesses manage and organize their data with intelligent sorting solutions.
              </p> */}
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-[#fe661b] transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fe661b] transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fe661b] transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fe661b] transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-[#fe661b] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fe661b] transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fe661b] transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fe661b] transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-[#fe661b] transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fe661b] transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fe661b] transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fe661b] transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-300">
            <p>&copy; 2024 ezsort. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
        </div>
      </section>
    </div>
  )
}
