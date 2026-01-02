export function Footer() {
  return (
    <footer className="relative py-12 px-4 overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/50 to-transparent"></div>

      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name/Brand */}
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg bg-gradient-to-r from-primary via-accent-gold to-primary bg-clip-text text-transparent">Rakesh Kumawat</p>
            <p className="text-white/50 text-sm mt-1">
              Numerology Insights & Guidance
            </p>
          </div>

          {/* Social Links & Support */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kumawatrakesh/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-xl glass-strong border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
              aria-label="LinkedIn Profile"
            >
              <svg
                className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-white/70 text-sm font-medium group-hover:text-primary transition-colors duration-300">
                LinkedIn
              </span>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/RakeshKumawattt"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-xl glass-strong border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
              aria-label="X (Twitter) Profile"
            >
              <svg
                className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="text-white/70 text-sm font-medium group-hover:text-primary transition-colors duration-300">
                X
              </span>
            </a>

            {/* Buy Me A Coffee */}
            <a
              href="https://buymeacoffee.com/rakeshkumawat"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary/20 via-accent-gold/20 to-primary/20 border border-primary/30 hover:border-primary/60 hover:bg-gradient-to-r hover:from-primary/30 hover:via-accent-gold/30 hover:to-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30"
              aria-label="Buy Me A Coffee"
            >
              <img
                src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                alt="Buy me a coffee"
                className="h-4 w-4 mb-0 shadow-none border-none align-middle bg-transparent"
              />
              <span className="text-primary text-sm font-semibold group-hover:text-accent-gold transition-colors duration-300">
                Buy Me A Coffee
              </span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-primary/10 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} <span className="text-primary/70">Rakesh Kumawat</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
