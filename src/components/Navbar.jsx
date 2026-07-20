import { useEffect, useState } from "react";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-xl font-bold text-sky-400 hover:text-sky-300 transition"
        >
          Rucha Joshi
        </a>

        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              <a
                href={item.href}
                className={`transition duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "text-sky-400"
                    : "text-slate-300 hover:text-sky-400"
                }`}
              >
                {item.name}
              </a>

              {activeSection === item.href.substring(1) && (
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-sky-400 rounded-full"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
