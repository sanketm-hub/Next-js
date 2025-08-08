'use client';
import Link from 'next/link';
import {useState} from 'react'; 

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className='bg-white shadow-lg sticky top-0 z-50 p-4'>
            <div className='conatiner mx-auto flex justify-between items-center'>
                <h1 className='text-gray-900 text-2xl font-bold'>Wynn Safety</h1>
                {/* Mobile menu button */}
                <button className='md:hidden text-gray-900 focus:outline-none' 
                onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                </svg>
                </button>

                {/* Desktop Navigation */}
                <nav className='hidden md:block'>
                    <ul className='flex space-x-4'>
                        <li>
                            <Link className='' href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/services">Services</Link>
                        </li>
                        <li>
                            <Link href="/products">Products</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Mobile Navigation*/}
            {menuOpen && (
                <nav className='md:hidden mt-2 px-4'>
                    <ul className='flex flex-col space-y-2'>
                        <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                        <li><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
                        <li><Link href="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
                        <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                    </ul>

                </nav>
            )}           
        </header>
    );
}
export default Header;