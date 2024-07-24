// components/SearchBar.tsx
"use client"
import { FormEvent } from 'react';
import React, { useContext, useState } from "react";


export default function SearchBar() {
    const [query, setQuery] = useState<string>('');
    const [results, setResults] = useState<string>('');

    
    const [isInputEmpty, setIsInputEmpty] = useState(true);

    // Function to handle input change
    // const handleInputChange = (e) => {
    //     setInput(e.target.value);
    //     setIsInputEmpty(e.target.value.trim() === "");
    // };


    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!query.trim()) return;

        try {
            const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
            const data = await res.text();
            setResults(data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <div >
            

            <form onSubmit={handleSearch} className='bg-zinc-900 min-w-80 rounded-full'>
                <div className="flex items-center justify-between gap-5 bg-bgSecondaryColor py-2.5 pr-5 pl-2 rounded-full">
                    <input
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                        type="text"
                        className="flex-1 bg-transparent border-none outline-none p-2 text-md text-gray-400"
                        placeholder="Search packages"
                    />
                    <div className={`flex cursor-pointer ${isInputEmpty ? 'pointer-events-none' : ''}`}>
                        <button
                            type="submit"
                            className={`focus:outline-none ${isInputEmpty ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {/* <SendHorizontal size={20} className=" hover:text-zinc-300" /> */}
                        </button>
                    </div>
                </div>
            </form>
            <div className='flex items-center justify-between gap-5 bg-bgSecondaryColor py-2.5 pr-5 pl-2'>
                <h2>Results:</h2>
                <div dangerouslySetInnerHTML={{ __html: results }} />
            </div>
        </div>
    );
}
