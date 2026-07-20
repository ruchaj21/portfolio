const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-400">
          © {new Date().getFullYear()} Rucha Joshi. All rights reserved.
        </p>

        <p className="text-slate-500 mt-3 md:mt-0">
          Built with React, Tailwind CSS & ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
