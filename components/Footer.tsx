import React from 'react';
import Link from 'next/link';
// import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <Shield className="h-8 w-8 text-orange-500" /> */}
              <span className="text-xl font-bold">Wynn Safety</span>
            </div>
            <p className="text-gray-400 text-sm">
              Leading provider of comprehensive safety solutions and training services. 
              Protecting workplaces and communities since 2010.
            </p>
            <div className="flex space-x-4">
              {/* <Facebook className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" /> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-orange-500 transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-orange-500 transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Safety Training</li>
              <li className="text-gray-400">Risk Assessment</li>
              <li className="text-gray-400">Compliance Auditing</li>
              <li className="text-gray-400">Emergency Planning</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                {/* <Phone className="h-4 w-4 text-orange-500" /> */}
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                {/* <Mail className="h-4 w-4 text-orange-500" /> */}
                <span className="text-gray-400">info@wynnsafety.com</span>
              </div>
              <div className="flex items-start space-x-2">
                {/* <MapPin className="h-4 w-4 text-orange-500 mt-0.5" /> */}
                <span className="text-gray-400">123 Safety Street<br />Business District<br />City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Wynn Safety. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;