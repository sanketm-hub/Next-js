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