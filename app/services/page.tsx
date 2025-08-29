import React from 'react';

export default function Services() {
    return (
        <div className='min-h-screen'>
            <section className='bg-gradient-to-r from-blue-500 to-blue-900 text-white py-20'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center space-y-6'>
                        <h1 className='text-4xl md:text-6xl font-bold'>Our Services</h1>
                        <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
                            Comprehensive safety solutions designed to protect your workforce, ensure compliance,
                            and create a culture of safety in your organization.
                        </p>
                    </div>
                </div>
            </section>

            <section className='bg-gray-50 py-20'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                            Industries We Serve
                        </h2>
                        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                            Our safety experts have experience across a wide range of industries,
                            allowing us to provide specialized solutions for your specific sector.
                        </p>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-6'>
                        <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center'>
                            <h3 className='text-lg font-semibold text-gray-900'>Construction & Building</h3>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center'>
                            <h3 className='text-lg font-semibold text-gray-900'>Manufacturing</h3>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center'>
                            <h3 className='text-lg font-semibold text-gray-900'>Healthcare</h3>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center'>
                            <h3 className='text-lg font-semibold text-gray-900'>Oil & Gas</h3>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center'>
                            <h3 className='text-lg font-semibold text-gray-900'>Transportation & Logistics</h3>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center'>
                            <h3 className='text-lg font-semibold text-gray-900'>Retail & Warehousing</h3>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center'>
                            <h3 className='text-lg font-semibold text-gray-900'>Education</h3>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center'>
                            <h3 className='text-lg font-semibold text-gray-900'>Hospitality</h3>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center'>
                            <h3 className='text-lg font-semibold text-gray-900'>Government & Public Sector</h3>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center'>
                            <h3 className='text-lg font-semibold text-gray-900'>Energy & Utilities</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                
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