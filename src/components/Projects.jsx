import projectImage from "../assets/aaj-kya-banau.png";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import FadeIn from "./FadeIn";

const projects = [
  {
    title: "Aaj Kya Banau",
    image: projectImage,
    description:
      "AI-powered meal recommendation platform that suggests dishes based on ingredients, dietary preferences, cuisine, and meal type. Includes AI fallback when a recipe is unavailable.",
    tech: ["React", "FastAPI", "Python", "OpenRouter", "Vite", "Render"],
    features: [
      "Ingredient-based suggestions",
      "AI-powered fallback recommendations",
      "Meal planning",
      "Multi-language support",
    ],
    live: "https://aaj-kya-banau.onrender.com",
    github: "YOUR_GITHUB_REPO",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-950 py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          Featured <span className="text-sky-400">Projects</span>
        </h2>
        <p className="mb-8 text-slate-400 max-w-2xl">
          A selection of projects that showcase my skills in frontend
          engineering and AI-powered applications.
        </p>
        <div className="space-y-10">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.2}>
              <div
                key={project.title}
                className="grid lg:grid-cols-2 gap-10 bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-sky-400 transition"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-101"
                />

                <div className="p-8">
                  <h3 className="text-3xl font-bold">{project.title}</h3>

                  <p className="text-slate-300 mt-5 leading-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 rounded-lg bg-slate-800 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-8 space-y-3 text-slate-300">
                    {project.features.map((feature) => (
                      <li key={feature}>✅ {feature}</li>
                    ))}
                  </ul>

                  <div className="flex gap-4 mt-10">
                    <a
                      href="https://aaj-kya-banau-six.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-3 rounded-lg bg-sky-500 hover:bg-sky-600 transition"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>

                    <a
                      href="https://github.com/ruchaj21/aaj-kya-banau"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-700 hover:border-sky-400 transition"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
