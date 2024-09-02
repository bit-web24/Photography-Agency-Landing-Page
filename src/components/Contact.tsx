import React from "react";

export default function Contact() {
    return (
        <div className="Contact px-4 sm:px-6 py-6 sm:py-8">
            <p className="text-lg mb-4 text-[#808080]"> (05) <br/> Contact Us</p>
            <div className="flex flex-col sm:flex-row justify-between">
                <div className="flex flex-col space-y-2 sm:space-y-4 font-sans mb-6 sm:mb-0">
                    <div>
                        <h2 className="text-3xl sm:text-5xl text-gray-400">
                            Let's <span className="text-white font-semibold">discuss</span> your
                        </h2>
                    </div>
                    <div className="text-3xl sm:text-5xl text-gray-400 flex flex-wrap items-center">
                        vision
                        <button className="ml-0 sm:ml-4 mt-2 sm:mt-0 text-xl sm:text-2xl font-mono text-black bg-white rounded-full px-3 sm:px-5 py-2 sm:py-3 hover:bg-[#e3e3e3] focus:outline-none transform hover:scale-95 active:scale-95 transition-all shadow-md">
                            LET'S TALK
                        </button>
                        <button className="w-12 h-12 sm:w-16 sm:h-16 mt-2 sm:mt-0 ml-0 inline-flex items-center justify-center px-3 sm:px-4 py-1 sm:py-2 bg-white text-gray-900 font-semibold rounded-full shadow-md focus:outline-none cursor-default">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5 sm:h-6 sm:w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    d="M17 7l-10 10M17 7H6.5M17 7v10"
                                />
                            </svg>
                        </button>
                        <span className="ml-2 sm:ml-4 text-white font-semibold">with us</span>
                    </div>
                </div>
                <div className="text-left sm:text-right space-y-0 text-sm mt-4 sm:mt-6">
                    <p>456 Oak Avenue,</p>
                    <p>Cityville, MA 56789,</p>
                    <p>United States</p>
                    <p>+1 (555) 123-4567</p>
                    <p>CeelestialUI@hello.com</p>
                </div>
            </div>
        </div>
    );
}
