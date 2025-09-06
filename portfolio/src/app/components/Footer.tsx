export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-100 via-pink-100 to-purple-100 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Contact Me</h2>

        <div className="flex space-x-6">
          <a
            href="https://github.com/Thanet04"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg"
              alt="GitHub"
              width="32"
              height="32"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/thanet-wongduean-7b50a9291/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg"
              alt="LinkedIn"
              width="32"
              height="32"
            />
          </a>

          <a
            href="mailto:thanes4b@gmail.com"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="https://skillicons.dev/icons?i=gmail"
              alt="Email"
              width="32"
              height="32"
            />
          </a>
        </div>

        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Thanet04. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
