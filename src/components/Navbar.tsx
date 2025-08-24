import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="text-2xl">🐐</div>
            <div>
              <div className="text-sm font-semibold">SRM Institute of Science &amp; Technology</div>
              <div className="text-xs text-gray-500">Kattankulathur, Chennai 603203 • India</div>
            </div>
          </div>

          <nav>
            <ul className="hidden md:flex items-center space-x-6 text-sm">
              <li><Link href="#home" className="text-gray-700 hover:text-gray-900">Home</Link></li>
              <li><Link href="#team" className="text-gray-700 hover:text-gray-900">Our Team</Link></li>
              <li><Link href="#story" className="text-gray-700 hover:text-gray-900">Our Story</Link></li>
              <li><Link href="#events" className="text-gray-700 hover:text-gray-900">Events</Link></li>
              <li><Link href="#contact" className="text-gray-700 hover:text-gray-900">Contact Us</Link></li>
              <li>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                  GitHub
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
