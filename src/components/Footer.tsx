// components/SearchBar.tsx
"use client"
import Link from 'next/link';

export default function Navbar() {


    return (


        <footer className="rounded-lg shadow-md">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex flex-col items-center text-center">
                    {/* Optional logo or brand name */}
                    {/* 
          <a href="#" className="flex items-center mb-4 space-x-3 rtl:space-x-reverse">
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">GoGet</span>
          </a>
          */}
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400">
                        <li>
                            <a href="#" className="hover:underline mx-4 md:mx-6">About</a>
                        </li>
                        <li>
                            <a href="https://github.com/xanmoy/goget/blob/main/LICENSE" className="hover:underline mx-4 md:mx-6">Licensing</a>
                        </li>
                        <li>
                            <a href="mailto:contact@xanmoy.me" className="hover:underline mx-4 md:mx-6">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-700" />
                <span className="block text-sm text-gray-400 text-center">
                    © 2024 <a href="/" className="hover:underline">Xanmoy</a>. All Rights Reserved.
                </span>
            </div>
        </footer>


    );
}
