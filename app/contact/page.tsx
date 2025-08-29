"use client"; // only if you are using Next.js App Router

import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert("Form submitted successfully!");
    };

    const handleChange = (
        field: string,
        value: string
    ) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className='min-h-screen'>
            {/* Hero Section */}
            <section className='bg-gradient-to-r from-green-500 to-green-700 text-white py-20'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center space-y-6'>
                        <h1 className='text-4xl md:text-6xl font-bold'>Contact Us</h1>
                        <p className='text-xl text-green-100 max-w-3xl mx-auto'>
                            Ready to improve your workplace safety? Get in touch with our experts for a free consultation
                            and custom quote tailored to your needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className='bg-white py-20'>
                <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='bg-white rounded-lg shadow-xl p-8'>
                        <h2 className='text-2xl font-bold text-gray-900 text-center mb-8'>
                            Send Us A Message
                        </h2>
                        <form onSubmit={handleSubmit} className='space-y-6'>
                            {/* Full Name */}
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                    required
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                    placeholder="Your Full Name"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    required
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                    placeholder='your@email'
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => handleChange('phone', e.target.value)}
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                    placeholder='(Optional)'
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>
                                    Message
                                </label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => handleChange('message', e.target.value)}
                                    rows={5}
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                    placeholder='Tell us more about your needs...'
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type='submit'
                                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
