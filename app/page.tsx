import React from "react";

import Image from "next/image";
import Safetyimg1 from "./media/Layer_1.svg";
import Safetyimg2 from "./media/Layer_2.svg";
import Safetyimg3 from "./media/Layer_3.svg";
import Safetyimg4 from "./media/Layer_4.svg";
import RightImage from "./media/pexels-photo-5691630.jpeg"


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
                <span className="text-orange-400"> Workplace Safety</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
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
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Safety Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From training and assessment to compliance and emergency planning, we provide comprehensive safety solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 md:gap-4 sm:gap-2">
            <div className="mt-2 rounded-lg bg-card text-card-foreground hover:shadow-lg transition-shadow duration-300 border-0 shadow-2xl">
              <div className="text-center mt-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {/* <img src={Image.src} alt="layer" /> */}
                  <Image src={Safetyimg1} alt="Layer1" />
                </div>
              </div>
              <div className="text-center pb-4">
                <h5 className="text-xl font-semibold text-gray-900">Safety Training</h5>
              </div>
              <div className="text-center pb-4">
                <p className="text-gray-900 px-4">Comprehensive safety training programs tailored to your industry needs.</p>
              </div>
            </div>
            <div className="mt-2 rounded-lg bg-card text-card-foreground hover:shadow-lg transition-shadow duration-300 border-0 shadow-2xl">
              <div className="text-center mt-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {/* <img src={ImageLayer2.src} alt="layer" /> */}
                  <Image src={Safetyimg2} alt="layer2" />
                </div>
              </div>
              <div className="text-center pb-4">
                <h5 className="text-xl font-semibold text-gray-900">Compliance Services</h5>
              </div>
              <div className="text-center pb-4">
                <p className="text-gray-900 px-4">Ensure your business meets all safety regulations and standards.</p>
              </div>
            </div>
            <div className="mt-2 rounded-lg bg-card text-card-foreground hover:shadow-lg transition-shadow duration-300 border-0 shadow-2xl">
              <div className="text-center mt-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {/* <img src={ImageLayer3.src} alt="layer" /> */}
                  <Image src={Safetyimg3} alt="layer3" />
                </div>
              </div>
              <div className="text-center pb-4">
                <h5 className="text-xl font-semibold text-gray-900">Risk Assessment</h5>
              </div>
              <div className="text-center pb-4">
                <p className="text-gray-900 px-4">Identify and mitigate potential safety risks in your workplace.</p>
              </div>
            </div>
            <div className="mt-2 rounded-lg bg-card text-card-foreground hover:shadow-lg transition-shadow duration-300 border-0 shadow-2xl">
              <div className="text-center mt-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {/* <img src={ImageLayer4.src} alt="layer" /> */}
                  <Image src={Safetyimg4} alt="layer4" />
                </div>
              </div>
              <div className="text-center pb-4">
                <h5 className="text-xl font-semibold text-gray-900">Emergency Planning</h5>
              </div>
              <div className="text-center pb-4">
                <p className="text-gray-900 px-4">Strategic emergency response planning and crisis management.</p>
              </div>
            </div>

          </div>

          <div className="text-center mt-12">
            <a href="/services" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3">
                  View All Services
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                {/* <img src={RightImage.src} alt="Safety Training Session" className="rounded-lg shadow-xl" /> */}
                <Image alt="Safety Training Session" src={RightImage} className="rounded-lg shadow-xl" />
              </div>
              <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Why Choose Wynn Safety?
                  </h2>
                  <p className="text-lg text-gray-600">
                    With over 15 years of experience in workplace safety, we have helped hundreds of companies create safer work environments and maintain regulatory compliance.
                  </p>
                  <ol className="space-y-4 text-gray-600 list-decimal px-4">
                    <li className="text-md">
                      Certified safety professionals with industry expertise
                    </li>
                    <li className="text-md">
                      Customized solutions for your specific industry needs
                    </li>
                    <li className="text-md">
                      24/7 support and emergency response planning
                    </li>
                    <li className="text-md">
                      Proven track record of regulatory compliance
                    </li>
                  </ol>
              </div>
            </div>      
        </div>
      </section>


      <section className="bg-blue-700 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to Improve Your Workplace Safety?
              </h2>
              <p className="text-xl text-blue-100">
                  Get a free consultation and learn how we can help protect your workforce and ensure compliance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                    Get Free Consultation
                  </a>
                  <a href="#" className="border-white bg-white text-black px-8 py-3 hover:bg-orange-600 border-orange hover:text-white transition-colors">
                    Call Now
                  </a>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
