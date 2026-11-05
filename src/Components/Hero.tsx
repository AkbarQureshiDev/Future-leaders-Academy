import { motion } from 'framer-motion';
import { HoverBorderGradient } from "@/Components/ui/hover-border-gradient";
import { FaGraduationCap, FaBookOpen, FaAward, FaBrain, FaLaptopCode } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section className="relative min-h-screen max-h-screen w-full flex flex-col justify-between pt-28 lg:pt-36 pb-0 overflow-hidden bg-[#07111e] text-white">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* React Icons Animated Background Doodles */}
      <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
        {/* Graduation Cap - Top Left */}
        <motion.div 
          animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-28 left-10 lg:left-24 text-emerald-300 text-5xl lg:text-6xl"
        >
          <FaGraduationCap />
        </motion.div>

        {/* Laptop Code - Top Right */}
        <motion.div 
          animate={{ y: [0, 14, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-28 right-10 lg:right-28 text-cyan-300 text-5xl lg:text-6xl"
        >
          <FaLaptopCode />
        </motion.div>

        {/* Open Book - Middle Left */}
        <motion.div 
          animate={{ scale: [1, 1.08, 1], rotate: [-2, 2, -2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[50%] -translate-y-1/2 left-8 lg:left-32 text-blue-300 text-5xl lg:text-6xl"
        >
          <FaBookOpen />
        </motion.div>

        {/* Award Badge - Middle Right */}
        <motion.div 
          animate={{ rotate: [0, 8, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[50%] -translate-y-1/2 right-8 lg:right-32 text-purple-300 text-5xl lg:text-6xl"
        >
          <FaAward />
        </motion.div>

        {/* Brain / Knowledge - Lower Center Accent */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-28 left-1/2 -translate-x-1/2 text-emerald-400/40 text-4xl"
        >
          <FaBrain />
        </motion.div>
      </div>

      {/* Main Hero Header Content - Centered */}
      <div className="relative my-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
          
          {/* Main Headline (Row 1: Crafting a Better Future | Row 2: Through Education.) */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-outfit text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-white leading-[1.15]"
          >
            Crafting a Better Future <br />
            <span className="relative inline-block bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Through Education.
            </span>
          </motion.h1>

          {/* Subtitle - 3 Lines of Educational Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed space-y-1"
          >
            <p>Empowering learners through expert-led courses and practical skills.</p>
            <p>Inspiring growth, creativity, and career excellence for tomorrow's leaders.</p>
            <p>Transforming industry knowledge into real-world professional success.</p>
          </motion.div>

          {/* Interactive Transparent Border Gradient Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="mt-10 flex items-center justify-center w-full"
          >
            <HoverBorderGradient
              containerClassName="rounded-full cursor-pointer w-full max-w-[420px]"
              as="button"
              className="bg-emerald-500/10 hover:bg-emerald-500/20 backdrop-blur-md text-white font-semibold text-lg sm:text-xl py-5 px-8 w-full rounded-[inherit] transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-emerald-500/20 border border-emerald-500/30 group"
            >
              <span className="tracking-wide group-hover:scale-105 transition-transform duration-200">
                Get Started
              </span>
            </HoverBorderGradient>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Cut Edge */}
      <div className="relative w-full overflow-hidden leading-none z-20">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-12 sm:h-16 text-[#050b14] fill-current"
        >
          <path d="M0,0 C150,45 350,-25 500,30 C650,80 900,10 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;