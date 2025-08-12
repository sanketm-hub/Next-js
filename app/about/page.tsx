import React from 'react';
export default function About() {
    return (
        <div className='min-h-screen'>
            <section className='bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center space-y-6'>
                        <h1 className='text-4xl md:text-6xl font-bold'>About Wynn Safety</h1>
                        <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
                            Your trusted partner in creating safer workplaces through expert consultation,
                            comprehensive training, and innovative safety solutions.
                        </p>
                    </div>
                </div>

            </section>

            <section className='bg-white py-20'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <div className='space-y-6'>
                            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'> Our Story</h2>
                            <p className='text-lg text-gray-600'>
                                Founded in 2010 by former OSHA inspector Michael Wynn, our company was born from a simple mission:
                                to make workplaces safer for everyone. What started as a small consulting firm has grown into a
                                comprehensive safety solutions provider serving hundreds of companies across various industries.
                            </p>
                            <p className='text-lg text-gray-600'>
                                Our team of certified safety professionals brings decades of combined experience in workplace safety,
                                regulatory compliance, and emergency response planning. We understand that every workplace is unique,
                                which is why we tailor our solutions to meet the specific needs of each client.
                            </p>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
                                <div>
                                    <div className='text-3xl font-bold text-blue-700 mb-2'>500+</div>
                                    <div className='text-gray-600'>Companies Served</div>
                                </div>
                                <div>
                                    <div className='text-3xl font-bold text-blue-700 mb-2'>15+</div>
                                    <div className='text-gray-600'>Years Experience</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src='/_next/static/media/pexels-photo-5691625.6bc660fe.webp' 
                            alt="Safety team meeting" className='rounded-lg shadow-xl' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}