import { FC } from 'react';
import Image from 'next/image'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
const GoGetPage: FC = () => {
    return (
        <>
            <Navbar />
            

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 pt-24 pb-10 items-center justify-center flex-col">
                    <Image
                        src="/go2.jpeg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                        
                </div>
            </section>
        <div className="max-w-4xl mx-auto px-4 pb-6">
            {/* <h1 className="text-3xl md:text-4xl font-bold mb-6">GoGet - Go Package Manager</h1> */}
            <h2 className="mb-6">
                GoGet is a simple package manager for Go written in Go. It allows you to install, update, and remove Go packages from the command line.
            </h2>

            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">Features</h2>
            <ul className="list-disc list-inside pl-5 mb-6">
                <li><strong>Install</strong>: Install Go packages from the command line.</li>
                <li><strong>Update</strong>: Update installed Go packages.</li>
                <li><strong>Remove</strong>: (Placeholder) Remove Go packages.</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">Installation</h2>
            <p className="mb-4">To build and use GoGet, follow these steps:</p>
            <ol className="list-decimal list-inside pl-5 mb-6">
                <li>
                    <strong>Clone the repository:</strong>
                    <pre className="bg-zinc-900 p-4 rounded mt-2 text-sm md:text-base overflow-x-auto whitespace-pre-wrap">
                        <code className="text-white">
                            git clone https://github.com/xanmoy/goget.git
                            <br />
                            cd goget
                        </code>
                    </pre>
                </li>

                <li>
                    <strong>Build the project:</strong>
                    <pre className="bg-zinc-900 p-4 rounded mt-2 text-sm md:text-base overflow-x-auto whitespace-pre-wrap"><code>go build -o goget ./cmd/goget
                    </code></pre>
                </li>
                <li>
                    <strong>Install the binary (optional):</strong>
                    <p className="mt-2">You can move the <code className="bg-zinc-200 px-1 rounded text-sm md:text-base">goget</code> binary to a directory in your <code className="bg-zinc-200 px-1 rounded text-sm md:text-base">PATH</code> for easier access:</p>
                    <pre className="bg-zinc-900 p-4 rounded mt-2 text-sm md:text-base overflow-x-auto whitespace-pre-wrap"><code>sudo mv goget /usr/local/bin/
                    </code></pre>
                </li>
            </ol>

            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">Usage</h2>
            <p className="mb-4">Once installed, you can use GoGet from the command line with the following commands:</p>
            <ul className="list-disc list-inside pl-5 mb-6">
                <li>
                    <strong>Install a package:</strong>
                    <pre className="bg-zinc-900 p-4 rounded mt-2 text-sm md:text-base overflow-x-auto whitespace-pre-wrap"><code>goget install &lt;package&gt;
                    </code></pre>
                    <p className="mt-2">Example:</p>
                    <pre className="bg-zinc-900 p-4 rounded mt-2 text-sm md:text-base overflow-x-auto whitespace-pre-wrap"><code>goget install github.com/sirupsen/logrus
                    </code></pre>
                </li>
                <li>
                    <strong>Update a package:</strong>
                    <pre className="bg-zinc-900 p-4 rounded mt-2 text-sm md:text-base overflow-x-auto whitespace-pre-wrap"><code>goget update &lt;package&gt;
                    </code></pre>
                    <p className="mt-2">Example:</p>
                    <pre className="bg-zinc-900 p-4 rounded mt-2 text-sm md:text-base overflow-x-auto whitespace-pre-wrap"><code>goget update github.com/sirupsen/logrus
                    </code></pre>
                </li>
                <li>
                    <strong>Remove a package:</strong>
                    <pre className="bg-zinc-900 p-4 rounded mt-2 text-sm md:text-base overflow-x-auto whitespace-pre-wrap"><code>goget remove &lt;package&gt;
                    </code></pre>
                    <p className="mt-2">Example:</p>
                    <pre className="bg-zinc-900 p-4 rounded mt-2 text-sm md:text-base overflow-x-auto whitespace-pre-wrap"><code>goget remove github.com/sirupsen/logrus
                    </code></pre>
                </li>
            </ul>

            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">Contributing</h2>
            <p className="mb-6">Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request.</p>

            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">License</h2>
            <p className="mb-6">This project is licensed under the MIT License - see the <a href="/LICENSE" className="text-blue-500 underline">LICENSE</a> file for details.</p>

            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">Contact</h2>
            <p>For any questions or issues, please open an issue on GitHub or contact <a href="mailto:contact@xanmoy.me" className="text-blue-500 underline">contact@xanmoy.me</a>.</p>
            </div>
            <Footer/>
        </>
    );
};

export default GoGetPage;
