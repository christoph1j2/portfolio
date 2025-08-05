import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LaceHubPreview = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffset(window.pageYOffset);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Portfolio Preview Bar - Fixed/Sticky */}
      <div className="fixed top-0 left-0 right-0 w-full z-50 bg-gradient-to-r from-blue-900 to-blue-700 text-white py-3 px-4 shadow-lg backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
              PORTFOLIO PREVIEW
            </span>
            <span className="text-sm font-medium">LaceHub - E-commerce platforma pro tenisky</span>
          </div>
          <Link 
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm bg-white/15 hover:bg-white/25 px-4 py-2 rounded-full transition-all duration-300 font-medium border border-white/20 hover:border-white/30"
            onClick={() => {
              setTimeout(() => {
                const container = document.querySelector("#root");
                if (container) {
                  container.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }
              }, 100);
            }}
          >
            <ArrowLeft size={14} />
            Zpět do portfolia
          </Link>
        </div>
      </div>

      {/* LaceHub Navigation - Static */}
      <nav className="bg-orange-500 shadow-lg" >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-2xl">
              LaceHub
            </div>
            <ul className="hidden md:flex space-x-6 items-center">
              <li><a href="#" className="text-white px-4 py-2 rounded-full transition-all hover:bg-orange-800">How does it work?</a></li>
              <li><a href="#" className="text-white px-4 py-2 rounded-full transition-all hover:bg-orange-800">About us</a></li>
              <li><a href="#" className="text-white px-4 py-2 rounded-full transition-all hover:bg-orange-800">Contact us</a></li>
              <li><button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">Register</button></li>
            </ul>
          </div>
        </div>
      </nav>



      {/* LaceHub Homepage 1:1 Copy */}
    <div className="min-h-screen overflow-hidden parallax-container bg-gray-800">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
          {/* Parallax Background Layers */}
          <div
            className="absolute inset-0 z-0"
            style={{
              transform: `translateY(${offset * 0.5}px)`,
            }}
          >
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-blue-900"></div>

            {/* Geometric patterns - Hide on mobile for better performance */}
            <div
              className="absolute inset-0 hidden sm:block"
              style={{
                transform: `translateY(${offset * 0.2}px)`,
                opacity: 0.1,
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(30deg,transparent_40%,rgba(255,255,255,0.1)_40%,rgba(255,255,255,0.1)_60%,transparent_60%)]"></div>

              {/* Responsive geometric elements */}
              <div
                className="absolute w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-orange-500/10 rounded-full blur-3xl -top-20 -left-20"
                style={{
                  transform: `translateY(${offset * 0.3}px) rotate(${
                    offset * 0.02
                  }deg)`,
                }}
              ></div>

              <div
                className="absolute w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-500/10 rounded-full blur-3xl top-1/2 right-0"
                style={{
                  transform: `translateY(${offset * 0.25}px) rotate(${
                    offset * -0.02
                  }deg)`,
                }}
              ></div>

              {/* Floating dots - Reduce count on mobile */}
              <div className="absolute inset-0">
                {[...Array(typeof window !== 'undefined' && window.innerWidth > 768 ? 20 : 10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 sm:w-2 h-1 sm:h-2 bg-blue-100/10 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      transform: `translateY(${
                        offset * (0.1 + Math.random() * 0.2)
                      }px)`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
                {/* Text Content */}
                <div
                  className="w-full lg:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left"
                  style={{
                    transform: `translateY(${offset * -0.2}px)`,
                  }}
                >
                  <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-bold text-blue-100 tracking-tighter leading-none">
                    LaceHub
                    <span className="block text-3xl sm:text-4xl md:text-5xl xl:text-6xl mt-2 sm:mt-4 bg-gradient-to-r from-orange-500 to-blue-500 text-transparent bg-clip-text">
                      Curate Your Kicks
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
                    Your personal inventory for the world&apos;s most
                    sought-after sneakers. Track, match, and trade with the
                    community.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 justify-center lg:justify-start">
                    <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-100 text-slate-900 font-bold text-base sm:text-lg hover:bg-slate-100 transition-all duration-300">
                      Start Collection
                    </button>

                    <button
                      onClick={() => {
                        document
                          .getElementById("how-it-works")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-100 text-blue-100 font-bold text-base sm:text-lg hover:bg-blue-100 hover:text-slate-900 transition-all duration-300"
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Featured Sneaker */}
                <div
                  className="w-full max-w-md lg:w-1/2 mt-8 lg:mt-0"
                  style={{
                    transform: `translateY(${offset * -0.1}px)`,
                  }}
                >
                  <div className="relative px-4 sm:px-0">
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
                    <img
                      src="https://raw.githubusercontent.com/christoph1j2/lacehub/main/ui/public/images/hp-image.webp"
                      alt="Featured sneaker"
                      className="relative w-full h-auto rounded-3xl transform -rotate-12 hover:rotate-0 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About LaceHub Section */}
        <section className="relative min-h-screen bg-white py-16 sm:py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              {/* Title */}
              <div className="overflow-hidden mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                  About LaceHub
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    title: "The Team",
                    description: "A bunch of sneakerheads who love to code. For sneakerheads, by sneakerheads.",
                    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop&crop=faces"
                  },
                  {
                    title: "The Project", 
                    description: "A web app to help people track and trade their sneakers.",
                    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
                  },
                  {
                    title: "The Future",
                    description: "To become the go-to platform for sneakerheads worldwide.",
                    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
                  }
                ].map((feature, index) => (
                  <div key={index} className="overflow-hidden">
                    <div className="relative overflow-hidden rounded-lg sm:rounded-xl bg-gradient-to-br from-gray-900 to-black">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-6 md:p-8 flex flex-col justify-end">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section 
          className="py-12 md:py-24 bg-gradient-to-b from-black to-gray-900" 
          id="how-it-works"
        >
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Header */}
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">How It Works</h2>
              <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto px-4">
                Get started with LaceHub in three simple steps
              </p>
            </div>

            <div className="space-y-16 md:space-y-32">
              {[
                {
                  number: 1,
                  title: "Join The Community",
                  description: "Start by creating your account. Then discover your personal dashboard with the collections you own, are in need of, or want to sell.",
                  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
                  isReversed: false,
                },
                {
                  number: 2,
                  title: "Track & Manage",
                  description: "Keep track of your inventory. Add sneakers to your personal super private inventory, or add sneakers to your public Want-To-Buy / Want-To-Sell lists.",
                  image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
                  isReversed: true,
                },
                {
                  number: 3,
                  title: "Match & Trade",
                  description: "If you have your desired collection in place. Start matching your inventory with other users and trade your sneakers.",
                  image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=400&fit=crop",
                  isReversed: false,
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    step.isReversed ? "md:flex-row-reverse" : "md:flex-row"
                  } items-center gap-8 md:gap-16`}
                >
                  {/* Text Content */}
                  <div className="flex-1 space-y-4 md:space-y-6 px-4 md:px-0">
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white flex items-center justify-center text-lg md:text-xl font-bold">
                        {step.number}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-all text-sm md:text-base">
                      Learn more
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>

                  {/* Image */}
                  <div className="flex-1 w-full md:w-auto px-4 md:px-0">
                    <div className="relative group">
                      <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl md:rounded-3xl blur-lg md:blur-xl opacity-75"></div>
                      <div className="relative bg-gray-800 rounded-xl md:rounded-2xl overflow-hidden">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover aspect-video"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* LaceHub Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">LaceHub</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your personal inventory for the world's most sought-after sneakers. Track, match, and trade with the community.
            </p>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">&copy; 2024 LaceHub. Maturitní projekt týmu tří studentů.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LaceHubPreview;
