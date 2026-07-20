import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Rucha from "../assets/Rucha.png";
import FadeIn from "./FadeIn";

const Hero = () => {
  return (
    <FadeIn>
      <section
        id="home"
        className="relative min-h-screen bg-slate-950 flex items-center overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 h-[125] w-[125] rounded-full bg-sky-500/10 blur-3xl"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <p className="text-sky-400 text-lg font-medium mb-4">👋 Hi, I'm</p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Rucha <span className="text-sky-400">Joshi</span>
            </h1>

            <h2 className="mt-6 text-2xl md:text-3xl text-slate-300">
              Technical Lead
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {["React", "TypeScript", "JavaScript", "Python", "AI"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-slate-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>

            <p className="mt-8 text-slate-400 text-lg leading-8 max-w-xl">
              Building scalable enterprise web applications and AI-powered
              products with modern technologies and 9+ years of software
              engineering experience.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/Rucha_Joshi_Resume.pdf"
                download
                className="flex items-center gap-2 border border-slate-700 hover:border-sky-400 px-6 py-3 rounded-lg transition"
              >
                <Download size={20} />
                Resume
              </a>

              <a
                href="https://github.com/ruchaj21"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-slate-700 hover:border-sky-400 px-6 py-3 rounded-lg transition"
              >
                <FaGithub size={20} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/rucha-joshi-7993bb101/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-slate-700 hover:border-sky-400 px-6 py-3 rounded-lg transition"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-slate-800 border-4 border-sky-500 flex items-center justify-center text-7xl">
              <img
                src={Rucha}
                alt="Rucha Joshi"
                className="w-80 h-80 rounded-full object-cover object-top border-4 border-sky-500 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Hero;
