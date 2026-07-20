import FadeIn from "./FadeIn";

const experiences = [
  {
    company: "Synechron",
    role: "Tech Lead",
    duration: "Aug 2025 – Present",
    points: [
      "Leading React modernization initiatives",
      "Migrated enterprise applications to React 18",
      "Built AI-assisted migration workflows",
      "Delivered banking applications using modern frontend technologies",
    ],
  },
  {
    company: "Cybage",
    role: "Senior Software Engineer",
    duration: "Nov 2016 – Aug 2025",
    points: [
      "Developed enterprise CIAM applications",
      "Implemented Keycloak / RHSSO authentication",
      "Improved application performance and maintainability",
      "Worked with REST APIs, CI/CD and automated testing",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-slate-950 flex items-center py-24 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-4xl font-bold mb-12">
          Work <span className="text-sky-400">Experience</span>
        </h2>
        <p className="mb-8 text-slate-400 max-w-2xl">
          My professional journey building enterprise applications and leading
          frontend initiatives.
        </p>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <FadeIn key={exp.company} delay={index * 0.15}>
              <div
                key={exp.company}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-sky-500/10 hover:border-sky-400 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h3 className="text-2xl font-semibold">{exp.role}</h3>
                    <p className="text-sky-400 mt-1">{exp.company}</p>
                  </div>

                  <p className="text-slate-400 mt-3 md:mt-0">{exp.duration}</p>
                </div>

                <ul className="mt-6 space-y-3 text-slate-300">
                  {exp.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
