import React from 'react';
import Image from 'next/image';
import Secimage from '../media/pexels-photo-5691625.webp'; // Adjust the path as necessary
import Layer1 from '../media/Layer_1.svg';

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
                            <Image src={Secimage} alt="Safety team meeting" className="rounded-lg shadow-xl" /> 
                            {/* <img src='/_next/static/media/pexels-photo-5691625.6bc660fe.webp'
                                alt="Safety team meeting" className='rounded-lg shadow-xl' /> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-gray-50 py-20'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl md:4xl font-bold text-gray-900 mb-4'>Our Values</h2>
                        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                            These core values guide everything we do and shape how we serve our clients.
                        </p>
                    </div>
                    <div className='grid grid-cols1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        <div className='text-center rounded-lg border-0 border-b-gray-700 py-8 px-2 shadow-sm hover:shadow-lg transition-shadow duration-300'>
                            <div className='mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                                {/* <img className="h-8 w-8 text-blue-700" src="/media/Layer_1.svg" alt="image1" /> */}
                                <Image src={Layer1} alt="Layer 1" className="h-8 w-8 text-blue-700" />                               
                            </div>
                            <div className='text-center mb-4'>
                                <h3 className='text-xl font-semibold'> Safety first</h3>
                            </div>
                            <div className='text-center'>
                                <p className='text-gray-600 text-sm'>We prioritize safety above all else, ensuring every solution protects lives and prevents accidents.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}