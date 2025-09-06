"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import profile from "./img/profile.jpg";
import calendar_holiday from "./img/calendar_holiday.png"
import word_rates from "./img/word_rates.png"
import waether_dashboard from "./img/waether_Dashboard.png"
import { i18n } from "./i18n/i18n";
import { useState, useEffect } from "react";

export default function Home() {
  const [lang, setLang] = useState<"en" | "th">("th");

  useEffect(() => {
    const onLangChange = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail === "en" || detail === "th") setLang(detail);
    };

    const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (stored === "en" || stored === "th") setLang(stored);
    window.addEventListener("langChange", onLangChange as EventListener);
    return () => window.removeEventListener("langChange", onLangChange as EventListener);
  }, []);

  const sentence = i18n[lang].hero_title.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const item: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 120, damping: 12 },
    },
  };

  const subtitle: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.8 } },
  };

  const aboutText: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center py-6 px-4 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center space-x-3 text-5xl md:text-6xl font-extrabold text-gray-900 drop-shadow-lg"
        >
          {sentence.map((word, index) => (
            <motion.span key={index} variants={item} className="inline-block">
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={subtitle}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl font-semibold text-gray-700"
        >
          {i18n[lang].hero_subtitle}
        </motion.div>
      </div>

      {/* About Me Section */}
      <motion.div id="about"
        variants={aboutText}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center md:items-start justify-center px-6 md:px-20 py-16 gap-8 bg-white rounded-2xl shadow-lg mx-4 md:mx-20 my-12"
      >
        <Image
          src={profile}
          alt="Profile"
          width={150}
          height={150}
          className="rounded-full object-cover"
          priority
        />
        <div className="text-gray-800 text-justify md:text-left space-y-4 max-w-3xl">
          <p>{i18n[lang].about_p1}</p>
          <p>{i18n[lang].about_p2}</p>
        </div>
      </motion.div>

      {/* Work Experience Section */}
    <motion.div 
      id="work_experience"
      className="px-6 md:px-20 py-16 space-y-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
        {i18n[lang].work_experience}
      </h2>

      {/* SCM S Technologies */}
      <motion.div
        variants={aboutText}
        className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-3"
      >
        <h3 className="text-xl font-semibold text-blue-700">SCM S Technologies</h3>
        <p className="text-gray-500 text-sm">1 November 2024 - 19 September 2025</p>
        <p className="font-medium text-gray-800">{i18n[lang].scm_role}</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          {i18n[lang].scm_bullets.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      </motion.div>

      {/* WeWebPlus */}
      <motion.div
        variants={aboutText}
        className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-3"
      >
        <h3 className="text-xl font-semibold text-blue-700">WeWebPlus</h3>
        <p className="text-gray-500 text-sm">1 April 2024 - 31 May 2024</p>
        <p className="font-medium text-gray-800">{i18n[lang].weweb_role}</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          {i18n[lang].weweb_bullets.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>

  {/* Projects Section */}
    <motion.div id="projects">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{i18n[lang].projects}</h2>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 px-6 md:px-20">

        {/* Project Card 1 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:-translate-y-2 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <a href="https://holidays-calendar-ten.vercel.app/" className="block w-full h-48 relative">
            <Image className="w-full h-48 object-cover" src={calendar_holiday} alt="Calendar Holiday" priority/>
          </a>
          <div className="p-6">
            <a href="https://holidays-calendar-ten.vercel.app/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{i18n[lang].calendar_title}</h5>
            </a>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">{i18n[lang].calendar_desc}</p>
            <a href="https://holidays-calendar-ten.vercel.app/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600">
              {i18n[lang].view_project}
            </a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:-translate-y-2 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <a href="https://world-rates.vercel.app/" className="block w-full h-48 relative">
            <Image className="w-full h-48 object-cover" src={word_rates} alt="Word Rates" priority/>
          </a>
          <div className="p-6">
            <a href="https://world-rates.vercel.app/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{i18n[lang].wordrates_title}</h5>
            </a>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">{i18n[lang].wordrates_desc}</p>
            <a href="https://world-rates.vercel.app/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600">
              {i18n[lang].view_project}
            </a>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:-translate-y-2 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <a href="https://weather-dashboard-theta-ruby.vercel.app/" className="block w-full h-48 relative">
            <Image className="w-full h-48 object-cover" src={waether_dashboard} alt="Weather Dashboard" priority/>
          </a>
          <div className="p-6">
            <a href="https://weather-dashboard-theta-ruby.vercel.app/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{i18n[lang].weather_title}</h5>
            </a>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">{i18n[lang].weather_desc}</p>
            <a href="https://weather-dashboard-theta-ruby.vercel.app/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600">
              {i18n[lang].view_project}
            </a>
          </div>
        </div>

          </div>
    </motion.div>     

    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full py-10 bg-gradient-to-r from-indigo-100 via-pink-100 to-purple-100"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Skills
      </h2>

      {/* Marquee Effect */}
      <div className="overflow-hidden relative w-full">
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 20,
          }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-10">
              <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" className="w-12 h-12" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" className="w-12 h-12" />
              <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" className="w-12 h-12" />
              <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" className="w-12 h-12" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" className="w-12 h-12" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" className="w-12 h-12" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" className="w-12 h-12" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" className="w-12 h-12" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" className="w-12 h-12" />
              <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" className="w-12 h-12" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" className="w-12 h-12" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" className="w-12 h-12" />
              <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" className="w-12 h-12" />
              <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" className="w-12 h-12" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" className="w-12 h-12" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" className="w-12 h-12" />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>

    <Footer></Footer>
          
    </div>
  );
}
