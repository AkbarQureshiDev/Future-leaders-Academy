import { motion } from 'framer-motion';
import { 
  FiCompass, 
  FiAward, 
  FiTrendingUp, 
  FiClock, 
  FiCheckCircle 
} from 'react-icons/fi';

const stats = [
  { number: '100%', label: 'Tuition-Free Model', icon: FiAward, color: 'text-emerald-400' },
  { number: '265k+', label: 'Graduated Students', icon: FiTrendingUp, color: 'text-cyan-400' },
  { number: '120+', label: 'Global Mentors', icon: FiCompass, color: 'text-purple-400' },
  { number: '24/7', label: 'Interactive Labs', icon: FiClock, color: 'text-pink-400' },
];

const categories = [
  { name: 'Artificial Intelligence & ML', count: '48 Courses' },
  { name: 'Full-Stack Web Development', count: '64 Courses' },
  { name: 'Cloud Computing & DevOps', count: '32 Courses' },
  { name: 'Digital Product Design (UI/UX)', count: '40 Courses' },
];

export const Highlights = () => {
  return (
    <section className="bg-[#050b14] py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pb-14 border-b border-white/10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/30 transition-all group"
              >
                <div className={`p-3 rounded-xl bg-white/5 w-fit ${stat.color} mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {stat.number}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Programs Bar */}
        <div className="mt-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-emerald-400 text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <FiCheckCircle /> Empowering The Next Generation
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Top Career Tracks for Future Leaders
            </h3>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-emerald-400/10 border border-white/10 hover:border-emerald-400/40 text-slate-200 text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{cat.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-emerald-300">
                  {cat.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
