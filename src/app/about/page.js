import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black dark:bg-black text-white">
      <main className="flex-grow flex flex-col gap-8 p-6 sm:p-8 max-w-3xl mx-auto w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          About Me
        </h1>
      
        <div className="rounded-3xl border border-solid border-white/[.145] flex flex-col gap-6 p-6 sm:p-8 bg-black shadow-md">
          <p className="text-lg text-center italic">
            This is my about page...
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Skills:</h2>
            
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Eating</li> 
              <li>Cooking</li>
              <li>Sleeping</li>
              <li>Breathing</li>
            </ul>
            <p className="text-sm text-gray-400 mt-4">
              Yep, that's it for now.
            </p>
          </div>
        </div>
        <div className="rounded-3xl border border-solid border-white/[.145] flex flex-col items-center p-6 bg-black text-center">
          <p className="mb-4">had enough?</p>
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
            Home
          </Link>
        </div>
      </main>

      <footer className="text-center p-4 mt-auto bg-black border-t border-gray-800">
        <p className="text-sm text-gray-600">V1.0 - Built with ❤️ and a sense of humor</p>
      </footer>
    </div>
  );
};

export default About;
