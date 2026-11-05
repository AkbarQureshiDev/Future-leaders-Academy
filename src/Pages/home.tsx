import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Highlights from '../Components/Highlights';

export const Home = () => {
  return (
    <div className="min-h-screen bg-[#07111e] text-white selection:bg-emerald-400 selection:text-slate-950 flex flex-col font-sans">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Hero Section matching the user image design */}
      <main className="flex-1">
        <Hero />
        <Highlights />
      </main>

      {/* Footer */}
      <footer className="bg-[#040810] border-t border-white/5 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Educax — Future Leaders Academy. All rights reserved.</p>
          <div className="flex items-center gap-6 text-slate-400">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
