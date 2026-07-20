import FadeIn from "./FadeIn";

const highlights = [
  "9+ Years Experience",
  "Enterprise Applications",
  "React & TypeScript",
  "AI-powered Applications",
];

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 min-h-screen flex items-center bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn delay={0.2}>
          <h2 className="text-4xl font-bold mb-10">
            About <span className="text-sky-400">Me</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-slate-300 text-lg leading-8">
              I'm a Tech Lead with over 9 years of experience building
              enterprise-grade web applications. My expertise lies in React,
              JavaScript, TypeScript, and modern frontend development.
            </p>

            <p className="text-slate-300 text-lg leading-8 mt-6">
              Recently, I've been exploring AI-powered applications using
              Python, FastAPI, and Large Language Models to build smarter,
              user-focused products.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:border-sky-400 transition"
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
