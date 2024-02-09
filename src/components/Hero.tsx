import React from 'react';


export default function Hero() {
  return (
    <section className="bg-[#f2f2f2] w-full border-black border-b-2 text-black">
      <div className=" flex flex-col justify-center md:px-20 gap-4 px-6 py-6 mx-auto sm:py-12 lg:pt-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left order-1 lg:order-0">
          <h1 className="text-5xl font-bold leadi sm:text-6xl">
            Make <br/>Your Design Awezome 
            
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" />
            turpis pulvinar, est scelerisque ligula sem
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-8 lg:justify-start">
            <a href="#_" className="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#D9D9D9]"></span>
                <span className="relative">Our Work</span>
              </span>
              <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </a>
            <a href="#_" className="relative inline-block text-lg group">
              <span className="relative z-10 block px-6 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#a79bf2]"></span>
                <span className="relative">Text me</span>
              </span>
              <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </a>
           
          </div>
        </div>
        {/* illustration by popsy.co */}
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 order-0 lg:order-1">
          {/* please use your own image or add <a href="popy.co">Illustration by Popsy.co</a> */}
          <img src="./idea-launch.svg" alt="" className="object-contain h-72 md:h-72 lg:h-screen " />
        </div>
      </div>
    </section>
  );
}
