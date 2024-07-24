import Link from 'next/link';
import Image from 'next/image'
import SearchBar from '../components/SearchBar';
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between mb-52">
      <Navbar/>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            src="/go.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
            <div className="text-center mt-10 lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">Welcome to goget Package Manager</h1>
              <p className="mb-8 leading-relaxed">
                GoGet is a command-line tool for managing Go packages. It simplifies the process of installing, updating, and removing packages with easy-to-use commands.
              </p>
              <div className="flex justify-center">
              <button className="inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg"><Link href="/docs">
                Documentation
              </Link></button>
              <Link href="https://github.com/xanmoy/goget.git" className="ml-4 inline-flex text-sky-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Get Source</Link>
              </div>
            </div>
        </div>
      </section>
      <SearchBar />
      
      </main>
      <Footer/>

    </>
  );
}
