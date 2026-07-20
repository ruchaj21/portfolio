import FadeIn from "./FadeIn";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Material UI",
      "HTML5",
      "CSS3",
      "Vite",
    ],
  },
  {
    title: "Backend",
    skills: ["Python", "REST APIs", "Keycloak", "OAuth 2.0"],
  },
  {
    title: "Tools & Methodologies",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "CI/CD",
      "Figma",
      "VS Code",
      "Scrum",
      "Agile",
    ],
  },
  {
    title: "Testing",
    skills: ["Jest", "React Testing Library", "Playwright", "TestCafe"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-900 py-24 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          Technical <span className="text-sky-400">Skills</span>
        </h2>
        <p className="mb-8 text-slate-400 max-w-2xl">
          Technologies I use to build scalable, modern web applications.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.title} delay={index * 0.1}>
              <div
                key={category.title}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-sky-500/10 hover:border-sky-400 hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-sky-400 mb-5">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 bg-slate-900 rounded-lg text-sm hover:bg-sky-500 hover:text-white transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
