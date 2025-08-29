import React, { useState } from 'react';

export default function Contact() {
    return (
        <div className='min-h-screen'>
            <section className='bg-gradient-to-r from-green-500 to-green-700 text-white py-20'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center space-y-6'>
                        <h1 className='text4xl md:text-6xl font-bold'>Contact US</h1>
                        <p className='text-xl text-green-100 max-w-3xl mx-auto'>
                            Ready to improve your workplace safety? Get in touch with our experts for a free consultation
                            and custom quote tailored to your needs.
                        </p>
                    </div>
                </div>
            </section>
            <section className='bg-white py-20'>
                <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'>
                   <div className='bg-white rounded-lg shadow-xl p-8'>
                        <h2 className='text-2xl font-bold text-gray-900 text-center mb-8'>
                            Send Us A Message
                        </h2>
                    </div> 
                </div>
            </section>
        </div>
    );
}