import React from 'react';

function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Welcome to ShopNest
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Discover amazing products at unbeatable prices. Shop now and transform your lifestyle!
            </p>
          </div>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
              Shop Now
            </button>
            <button className="px-4 py-2 bg-transparent text-white font-semibold border border-white rounded-md hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
