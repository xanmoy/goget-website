// // // components/SearchBar.tsx
// // "use client"
// // import { FormEvent } from 'react';
// // import React, { useContext, useState } from "react";


// // export default function SearchBar() {
// //     const [query, setQuery] = useState<string>('');
// //     const [results, setResults] = useState<string>('');

    
// //     const [isInputEmpty, setIsInputEmpty] = useState(true);

// //     // Function to handle input change
// //     // const handleInputChange = (e) => {
// //     //     setInput(e.target.value);
// //     //     setIsInputEmpty(e.target.value.trim() === "");
// //     // };


// //     const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
// //         e.preventDefault();
// //         if (!query.trim()) return;

// //         try {
// //             const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
// //             const data = await res.text();
// //             setResults(data);
// //         } catch (error) {
// //             console.error('Error fetching search results:', error);
// //         }
// //     };

// //     return (
// //         <div >
            

// //             <form onSubmit={handleSearch} className='bg-zinc-900 min-w-80 rounded-full'>
// //                 <div className="flex items-center justify-between gap-5 bg-bgSecondaryColor py-2.5 pr-5 pl-2 rounded-full">
// //                     <input
// //                         onChange={(e) => setQuery(e.target.value)}
// //                         value={query}
// //                         type="text"
// //                         className="flex-1 bg-transparent border-none outline-none p-2 text-md text-gray-400"
// //                         placeholder="Search packages"
// //                     />
// //                     <div className={`flex cursor-pointer ${isInputEmpty ? 'pointer-events-none' : ''}`}>
// //                         <button
// //                             type="submit"
// //                             className={`focus:outline-none ${isInputEmpty ? 'opacity-50 cursor-not-allowed' : ''}`}
// //                         >
// //                             {/* <SendHorizontal size={20} className=" hover:text-zinc-300" /> */}
// //                         </button>
// //                     </div>
// //                 </div>
// //             </form>
// //             <div className='flex items-center justify-between gap-5 bg-bgSecondaryColor py-2.5 pr-5 pl-2'>
// //                 <h2>Results:</h2>
// //                 <div dangerouslySetInnerHTML={{ __html: results }} />
// //             </div>
// //         </div>
// //     );
// // }


// // components/SearchBar.tsx
// "use client"
// import { useState } from 'react';
// import axios from 'axios';

// const SearchBar = () => {
//     const [query, setQuery] = useState('');
//     const [results, setResults] = useState([]);

//     const searchPackages = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             const response = await axios.get(`/api/search?query=${query}`);
//             setResults(response.data);
//         } catch (error) {
//             console.error('Error fetching search results:', error);
//         }
//     };

//     return (
//         <div className="max-w-md mx-auto my-4">
//             <form onSubmit={searchPackages} className="flex items-center space-x-2">
//                 <input
//                     type="text"
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     placeholder="Search Go packages"
//                     className="flex-grow p-2 border border-gray-800 rounded text-black"
//                 />
//                 <button type="submit" className="p-2 bg-blue-500 text-white rounded">
//                     Search
//                 </button>
//             </form>
//             <ul className="mt-4">
//                 {results.map((result: any) => (
//                     <li key={result.url} className="my-2">
//                         <a
//                             href={result.url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-blue-500 underline"
//                         >
//                             {result.name}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default SearchBar;

