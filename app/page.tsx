import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                Your Partner in
                <span className="text-orange-400">Workplace Safety</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Comprehensive safety solutions, training, and compliance services to protect your workforce and ensure regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-8">

                <a href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-center">
                  Get Started Today
                </a>

                {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                  Get Started Today
                </button> */}
                {/* <button className="border-white text-white px-8 py-3">
                  Call (555) 555-5555
                </button> */}
                <a href="tel:5555555555" className="border-white bg-white text-black px-8 py-3 hover:bg-orange-600 border-orange hover:text-white transition-colors">
                  Call (555) 555-5555
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text4xl font-bold text-blue-700 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Companies Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text4xl font-bold text-blue-700 mb-2">10,000+</div>
              <div className="text-gray-600 font-medium">Employees Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text4xl font-bold text-blue-700 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text4xl font-bold text-blue-700 mb-2">99%</div>
              <div className="text-gray-600 font-medium">client Satisfication</div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Safety Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From training and assessment to compliance and emergency planning, we provide comprehensive safety solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="rounded-lg bg-card text-card-foreground hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <div className="text-center pb-4 pt-4">
                <h5 className="text-xl font-semibold text-gray-900">Safety Training</h5>
              </div>
              <div className="text-center pb-4">
                <p className="text-gray-900">Comprehensive safety training programs tailored to your industry needs.</p>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <div className="text-center pb-4 pt-4">
                <h5 className="text-xl font-semibold text-gray-900">Risk Assessment</h5>
              </div>
              <div className="text-center pb-4">
                <p className="text-gray-900">Thorough evaluation of workplace hazards and safety protocols.</p>
              </div>
            </div>

            <div className="rounded-lg bg-card text-card-foreground hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <div className="text-center pb-4 pt-4">
                <h5 className="text-xl font-semibold text-gray-900">Compliance Auditing</h5>
              </div>
              <div className="text-center pb-4">
                <p className="text-gray-900">Ensure your business meets all safety regulations and standards.</p>
              </div>
            </div>

            <div className="rounded-lg bg-card text-card-foreground hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <div className="text-center pb-4 pt-4">
                <h5 className="text-xl font-semibold text-gray-900">Emergency Planning</h5>
              </div>
              <div className="text-center pb-4">
                <p className="text-gray-900">Strategic emergency response planning and crisis management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
