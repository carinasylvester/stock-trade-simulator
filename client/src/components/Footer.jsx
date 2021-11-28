import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 py-12">
      <div className="container px-8 sm:px-16 py-4 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <div>
                <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Trading Simulator</Link>
              </div>

              <p className="max-w-md mt-2 text-gray-500 dark:text-gray-400">Trading, without the risk.</p>

              <div className="flex mt-4 -mx-2">
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">Info</h3>
                <Link to="/guide" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">About</Link>
                <Link to="/markets" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Markets</Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">Stack</h3>
                <a href="https://www.mongodb.com/mern-stack" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">MERN</a>
                <a href="https://tailwindcss.com/" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">TailwindCSS</a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">Education</h3>
                <a href="https://www.investopedia.com/" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">Investopedia</a>
                <a href="https://www.wsj.com/news/markets" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">Wallstreet Journal</a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">Portfolio</h3>
                <a href="https://github.com/carinasylvester" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://carinasylvester.com" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">Personal Site</a>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-800 dark:text-white">© Trading Simulator {new Date().getFullYear()}</p>
          <p className="text-center text-gray-600 dark:text-white"> created by Carina Sylvester</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
