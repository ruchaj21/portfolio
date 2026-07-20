import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import FadeIn from "./FadeIn";

const Contact = () => {
  const buttonClass =
    "flex items-center gap-3 border border-slate-700 hover:border-sky-400 hover:text-sky-400 px-6 py-4 rounded-xl transition duration-300";

    return (
      <FadeIn>
        <section
          id="contact"
          className="scroll-mt-24 min-h-screen bg-slate-900 flex items-center"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold">
              Let's <span className="text-sky-400">Connect</span>
            </h2>

            <p className="mt-8 text-slate-300 text-lg leading-8">
              I'm always open to discussing frontend engineering, React
              development, AI-powered applications, and exciting software
              opportunities.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-12">
              <a href="mailto:rucha.prime@gmail.com" className={buttonClass}>
                <Mail size={20} />
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/rucha-joshi-7993bb101/"
                target="_blank"
                rel="noreferrer"
                className={buttonClass}
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>

              <a
                href="https://github.com/ruchaj21"
                target="_blank"
                rel="noreferrer"
                className={buttonClass}
              >
                <FaGithub size={20} />
                GitHub
              </a>
            </div>
          </div>
        </section>{" "}
      </FadeIn>
    );
};

export default Contact;
