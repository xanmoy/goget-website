import Link from 'next/link';
import Image from 'next/image'
import SearchBar from '../components/SearchBar';
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between mb-16">
      <Navbar/>
      <section className="text-zinc-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            src="/go.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
            <div className="text-center mt-10 lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-zinc-200">Welcome to goget Package Manager</h1>
              <p className="mb-8 text-zinc-300 leading-relaxed">
                GoGet is a command-line tool for managing Go packages. It simplifies the process of installing, updating, and removing packages with easy-to-use commands. Developed by <a className='text-sky-500' href="https://xanmoy.me">Xanmoy</a>
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-sky-500 border-0 py-2 lg:px-6 px-3 focus:outline-none hover:bg-sky-600 rounded text-lg"><Link href="/docs">
                  Documentation
                  
              </Link></button>
              <Link href="https://github.com/xanmoy/goget.git" className="ml-4 inline-flex text-sky-700 bg-zinc-100 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-200 rounded text-lg">Get Source</Link>
              </div>
            </div>
        </div>
      </section>
        {/* <SearchBar /> */}
        <div className='m-5'>
          <h2 className="text-2xl font-bold text-center mb-6">Installation</h2>
          <p className="mb-4 p-5">To build and use GoGet, follow these steps:</p>
          <ol className="list-decimal list-inside pl-5 mb-6">
            <li>
              <strong>Clone the repository:</strong>
              <pre className="bg-zinc-900 p-4 rounded m-2 mb-6 mr-5 text-sm md:text-base overflow-x-auto whitespace-pre-wrap">
                <code className="text-white">
                  git clone https://github.com/xanmoy/goget.git
                  <br />
                  cd goget
                </code>
              </pre>
            </li>

            <li>
              <strong>Build the project:</strong>
              <pre className="bg-zinc-900 p-4 rounded m-2 mb-6 mr-5 text-sm md:text-base overflow-x-auto whitespace-pre-wrap"><code>go build -o goget ./cmd/goget
              </code></pre>
            </li>
            <li>
              <strong>Install the binary (optional):</strong>
              <p className="mt-2">You can move the <code className="bg-zinc-700 px-1 rounded text-sm md:text-base">goget</code> binary to a directory in your <code className="bg-zinc-700 px-1 rounded text-sm md:text-base">PATH</code> for easier access:</p>
              <pre className="bg-zinc-900 p-4 rounded m-2 mb-6 mr-5 text-sm md:text-base overflow-x-auto whitespace-pre-wrap"><code>sudo mv goget /usr/local/bin/
              </code></pre>
            </li>
          </ol>

        </div>
      
      </main>
      <section className="py-1 mb-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Why GoGet?</h2>
          <div className="space-y-4">
            <div className="  p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Simplicity</h3>
              <p className="mt-2   text-zinc-300">
                GoGet offers a straightforward and user-friendly interface for managing Go packages, reducing complexity and saving time.
              </p>
            </div>
            <div className="  p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Efficiency</h3>
              <p className="mt-2   text-zinc-300">
                Designed to handle common package management tasks quickly, GoGet integrates seamlessly into your development workflow.
              </p>
            </div>
            <div className="  p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Open Source</h3>
              <p className="mt-2   text-zinc-300">
                GoGet is open-source and welcomes contributions from the community. It’s built with Go developers in mind, and we are committed to continuously improving and expanding its capabilities.
              </p>
            </div>
          </div>
          <p className="mt-6 text-center text-zinc-100 text-base">
            Whether you’re managing a few packages or a large set of dependencies, GoGet provides a reliable solution to streamline your Go development process.
          </p>
        </div>
      </section>
      <Footer/>

    </>
  );
}
