import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-20 mr-4">
              <a href="/"><img src="src/photos/LOGO EZ SORT-01.png" alt="ezsort logo" className="h-20 w-auto max-h-28" /></a>
            </div>
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="/mision&vision" className="text-[#424d70] hover:text-[#fe661b] transition-colors duration-200 font-medium text-sm lg:text-base">
                Mission & Vision
              </a>
              
              {/* Company Dropdown */}
              <div className="relative group">
                <button className="text-[#424d70] hover:text-[#fe661b] transition-colors duration-200 font-medium text-sm lg:text-base flex items-center hover:cursor-pointer">
                  Company
                  <svg className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                  <div className="py-2">
                    <a href="/team" className="block px-4 py-2 text-sm text-[#424d70] hover:text-[#fe661b] hover:bg-gray-50 transition-colors">
                      Our Team
                    </a>
                    <a href="/facilities" className="block px-4 py-2 text-sm text-[#424d70] hover:text-[#fe661b] hover:bg-gray-50 transition-colors">
                      Facilities
                    </a>
                  </div>
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-[#424d70] hover:text-[#fe661b] transition-colors duration-200 font-medium text-sm lg:text-base flex items-center hover:cursor-pointer">
                  Services
                  <svg className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                  <div className="py-2">
                    <a href="/services" className="block px-4 py-2 text-sm text-[#424d70] hover:text-[#fe661b] hover:bg-gray-50 transition-colors">
                      Our Services
                    </a>
                    <a href="/pricing" className="block px-4 py-2 text-sm text-[#424d70] hover:text-[#fe661b] hover:bg-gray-50 transition-colors">
                      Pricing
                    </a>
                  </div>
                </div>
              </div>

              <a href="/testimonies" className="text-[#424d70] hover:text-[#fe661b] transition-colors duration-200 font-medium text-sm lg:text-base">
                Testimonies
              </a>
              <a href="/#contact" className="text-[#424d70] hover:text-[#fe661b] transition-colors duration-200 font-medium text-sm lg:text-base">
                Contact
              </a>
            </div>
            <Button className="bg-[#fe661b] hover:bg-[#525d80] hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer text-white text-sm px-4 py-2 sm:px-6 sm:py-2 relative overflow-hidden group flex items-center">
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
        </div>
      </nav>
    )
}