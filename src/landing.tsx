import {
  Check,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Star,
  Users,
  Zap,
  Shield,
  BarChart3,
  Database,
  Workflow,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EzsortLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Mobile First */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#fe661b] rounded-lg flex items-center justify-center">
                <img src="" alt="" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-[#424d70]">ezsort</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#problems" className="text-[#424d70] hover:text-[#fe661b] transition-colors">
                Problems
              </a>
              <a href="#solutions" className="text-[#424d70] hover:text-[#fe661b] transition-colors">
                Solutions
              </a>
              <a href="#pricing" className="text-[#424d70] hover:text-[#fe661b] transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-[#424d70] hover:text-[#fe661b] transition-colors">
                Contact
              </a>
            </div>
            <Button className="bg-[#fe661b] hover:bg-[#e55a18] hover: cursor-pointer text-white text-sm px-4 py-2 sm:px-6 sm:py-2">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Mobile First */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#424d70] to-[#525d80]">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 sm:mb-6 bg-[#fe661b]/10 text-[#fe661b] border-[#fe661b]/20 text-xs sm:text-sm">
            Trusted by 1000+ businesses
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Sort Your Data,
            <span className="text-[#fe661b] block sm:inline"> Simplify Your Life</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Transform chaotic data into organized insights with ezsort's intelligent sorting platform. Save hours of
            manual work and make better business decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" className="bg-[#fe661b] hover:bg-[#e55a18] text-white px-6 sm:px-8 w-full sm:w-auto">
              Start Free Trial <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#424d70] bg-transparent w-full sm:w-auto"
            >
              Watch Demo
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
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                </div>
                <CardTitle className="text-[#424d70] text-lg sm:text-xl">Scattered Data Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base">
                  Your valuable business data is trapped across multiple spreadsheets, databases, and systems, making it
                  impossible to get a complete picture of your operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                </div>
                <CardTitle className="text-[#424d70] text-lg sm:text-xl">Manual Sorting Nightmare</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base">
                  Hours wasted every week manually organizing, categorizing, and sorting data. Your team could be
                  focusing on strategy instead of tedious data entry tasks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Database className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                </div>
                <CardTitle className="text-[#424d70] text-lg sm:text-xl">Inconsistent Data Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base">
                  Duplicate entries, formatting errors, and inconsistent categorization lead to unreliable reports and
                  poor business decisions based on flawed data.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section - Mobile First */}
      <section id="solutions" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#424d70] mb-3 sm:mb-4">
              Smart Solutions That Actually Work
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              ezsort transforms your data challenges into competitive advantages
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-l-4 border-l-[#fe661b] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#fe661b]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Database className="w-5 h-5 sm:w-6 sm:h-6 text-[#fe661b]" />
                </div>
                <CardTitle className="text-[#424d70] text-lg sm:text-xl">Unified Data Hub</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  Connect all your data sources into one centralized platform. Import from Excel, CSV, databases, and
                  APIs with just a few clicks.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-xs sm:text-sm text-gray-600">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#fe661b] mr-2 flex-shrink-0" />
                    50+ integration options
                  </li>
                  <li className="flex items-center text-xs sm:text-sm text-gray-600">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#fe661b] mr-2 flex-shrink-0" />
                    Real-time synchronization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#fe661b] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#fe661b]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Workflow className="w-5 h-5 sm:w-6 sm:h-6 text-[#fe661b]" />
                </div>
                <CardTitle className="text-[#424d70] text-lg sm:text-xl">AI-Powered Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  Let our intelligent algorithms automatically sort, categorize, and organize your data based on
                  patterns and business rules you define.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-xs sm:text-sm text-gray-600">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#fe661b] mr-2 flex-shrink-0" />
                    95% accuracy rate
                  </li>
                  <li className="flex items-center text-xs sm:text-sm text-gray-600">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#fe661b] mr-2 flex-shrink-0" />
                    Custom sorting rules
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#fe661b] hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#fe661b]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#fe661b]" />
                </div>
                <CardTitle className="text-[#424d70] text-lg sm:text-xl">Quality Assurance Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  Automatically detect and fix duplicates, standardize formats, and ensure data consistency across all
                  your records.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-xs sm:text-sm text-gray-600">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#fe661b] mr-2 flex-shrink-0" />
                    Duplicate detection
                  </li>
                  <li className="flex items-center text-xs sm:text-sm text-gray-600">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#fe661b] mr-2 flex-shrink-0" />
                    Format standardization
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition - Mobile First */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#424d70]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Why Choose ezsort?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-8 sm:mb-12 px-4 leading-relaxed">
            ezsort is the intelligent data sorting platform that transforms how businesses manage their information.
            Instead of spending hours manually organizing spreadsheets and databases, our AI-powered system
            automatically sorts, categorizes, and cleans your data in minutes. Whether you're managing customer records,
            inventory lists, or financial data, ezsort ensures everything is perfectly organized, easily searchable, and
            always up-to-date. Join thousands of businesses who've already saved hundreds of hours and made better
            decisions with cleaner, more organized data.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8 mt-8 sm:mt-12 md:mt-16">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#fe661b] mb-1 sm:mb-2">10,000+</div>
              <div className="text-gray-300 text-sm sm:text-base">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#fe661b] mb-1 sm:mb-2">95%</div>
              <div className="text-gray-300 text-sm sm:text-base">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#fe661b] mb-1 sm:mb-2">50+</div>
              <div className="text-gray-300 text-sm sm:text-base">Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#fe661b] mb-1 sm:mb-2">24/7</div>
              <div className="text-gray-300 text-sm sm:text-base">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Mobile First */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#424d70] mb-3 sm:mb-4">How ezsort Works</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Get organized in three simple steps
            </p>
          </div>
          <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#fe661b] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-lg sm:text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#424d70] mb-3 sm:mb-4">Upload Your Data</h3>
              <p className="text-gray-600 text-sm sm:text-base px-4">
                Simply upload your files or connect your existing data sources. We support Excel, CSV, databases, and
                50+ other formats.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#fe661b] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-lg sm:text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#424d70] mb-3 sm:mb-4">AI Does the Work</h3>
              <p className="text-gray-600 text-sm sm:text-base px-4">
                Our intelligent algorithms analyze your data, identify patterns, and automatically sort everything
                according to your business rules.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#fe661b] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-lg sm:text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#424d70] mb-3 sm:mb-4">Export & Use</h3>
              <p className="text-gray-600 text-sm sm:text-base px-4">
                Download your perfectly organized data or sync it directly to your favorite tools and platforms. It's
                that simple!
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
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-[#424d70] text-lg sm:text-xl">Starter</CardTitle>
                <CardDescription className="text-sm sm:text-base">Perfect for small teams</CardDescription>
                <div className="mt-3 sm:mt-4">
                  <span className="text-3xl sm:text-4xl font-bold text-[#424d70]">$600</span>
                  <span className="text-gray-600 text-sm sm:text-base">/year</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 sm:space-y-3">
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
                <Button className="w-full bg-[#424d70] hover:bg-[#525d80] text-white mt-4 sm:mt-6">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#fe661b] hover:shadow-lg transition-shadow relative lg:col-span-1">
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
              <CardContent>
                <ul className="space-y-2 sm:space-y-3">
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
                <Button className="w-full mt-4 sm:mt-6 bg-[#fe661b] hover:bg-[#e55a18] text-white">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center">
                <CardTitle className="text-[#424d70] text-lg sm:text-xl">Enterprise</CardTitle>
                <CardDescription className="text-sm sm:text-base">For large organizations</CardDescription>
                <div className="mt-3 sm:mt-4">
                  <span className="text-3xl sm:text-4xl font-bold text-[#424d70]">$1800</span>
                  <span className="text-gray-600 text-sm sm:text-base">/year</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 sm:space-y-3">
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
                <Button className="w-full mt-4 sm:mt-6 bg-[#424d70] hover:bg-[#525d80] text-white">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Where to Purchase - Mobile First */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#424d70] mb-4 sm:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Choose your preferred way to purchase ezsort and start organizing your data today
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
      </section>

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
                Create your account and start your free 14-day trial instantly
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#fe661b] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-base sm:text-lg font-bold text-white">2</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Onboarding</h3>
              <p className="text-gray-300 text-xs sm:text-sm px-2">
                Our team will help you set up and configure ezsort for your needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#fe661b] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-base sm:text-lg font-bold text-white">3</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Import Data</h3>
              <p className="text-gray-300 text-xs sm:text-sm px-2">
                Upload your first dataset and watch ezsort work its magic
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
            Stop Wasting Time on Manual Data Sorting
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join 10,000+ businesses who've already transformed their data management with ezsort. Start your free trial
            today and see the difference in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" className="bg-white text-[#fe661b] hover:bg-gray-100 px-6 sm:px-8 w-full sm:w-auto">
              Start Free Trial <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#fe661b] px-6 sm:px-8 bg-transparent w-full sm:w-auto"
            >
              Schedule Demo
            </Button>
          </div>
          <p className="text-white/80 text-xs sm:text-sm mt-3 sm:mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Contact Us - Mobile First */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#424d70] mb-3 sm:mb-4">Get in Touch</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Have questions? We're here to help you succeed with ezsort
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
                <p className="font-semibold text-[#424d70] text-sm sm:text-base">1-800-EZSORT</p>
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
                  123 Data Street
                  <br />
                  Tech City, TC 12345
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
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#fe661b] rounded-lg flex items-center justify-center">
                  <Database className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-xl sm:text-2xl font-bold">ezsort</span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Transforming how businesses manage and organize their data with intelligent sorting solutions.
              </p>
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
  )
}
