"use client";

import Image from "next/image";
import { motion } from "framer-motion"; // Added Framer Motion for animations

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      <main className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        {/* Main Content */}
        <div className="md:col-span-2">
          {/* Header Section with Animation */}
          <motion.header
            className="flex flex-col items-start text-left mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/betico.jpeg"
              alt="Humberto Villanueva"
              width={120}
              height={120}
              className="rounded-full object-cover mb-4 border-4 border-white-500 hover:scale-105 transition-transform duration-300"
            />
            <div>
              <h2 className="text-4xl font-bold text-gray-600">
                Humberto Villanueva
              </h2>
              <h3 className="text-1xl mt-2 font-semibold">
                Software Engineer | Web Developer | Soccer Enthusiast ⚽
              </h3>
              <p className="text-gray-600 mt-3 dark:text-gray-300">
                Hi! I am Humberto, a passionate software engineer who loves
                creating impactful and user-friendly web applications. I enjoy
                coding, soccer, and continuous learning.
              </p>
              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/linke.webp"
                    alt="LinkedIn"
                    width={30}
                    height={30}
                    className="hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/x.png"
                    alt="Twitter"
                    width={30}
                    height={30}
                    className="hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/git.png"
                    alt="GitHub"
                    width={30}
                    height={30}
                    className="hover:scale-110 transition-transform"
                  />
                </a>
              </div>
            </div>
          </motion.header>

          {/* Blog Section */}
          {["December 26, 2023", "December 17, 2023", "December 5, 2023"].map(
            (date, index) => (
              <motion.div
                key={index}
                className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-sm text-gray-500">{date}</p>
                <h3 className="text-xl font-semibold mt-1">
                  Building Amazing Web Apps with Next.js
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Dive deep into the world of Next.js and learn how to create
                  fast, SEO-friendly, and scalable web applications.
                </p>
                <a
                  href="#"
                  className="text-teal-500 mt-2 inline-block hover:underline"
                >
                  Read article →
                </a>
              </motion.div>
            )
          )}
        </div>

        {/* Sidebar Section */}
        <aside className="space-y-6">
          {/* Stay Updated */}
          <motion.div
            className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-lg font-semibold">Stay up to date</h4>
            <p className="text-gray-600 text-sm mt-2 dark:text-gray-300">
              Get notified when I publish something new, and unsubscribe at any
              time.
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-3 py-2 border rounded-l-lg focus:outline-none"
              />
              <button className="px-4 py-2 bg-teal-500 text-white rounded-r-lg hover:bg-teal-600 transition-colors">
                Join
              </button>
            </div>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h4 className="text-lg font-semibold mb-4">Work Experience</h4>
            <ul className="space-y-4">
              {[
                { company: "Slack", role: "Software Engineer", dates: "2016 - Present", logo: "/slack.jpg" },
                { company: "Spotify", role: "Web Developer", dates: "2014 - 2015", logo: "/Spotify.png" },
                { company: "Audible", role: "Frontend Developer", dates: "2012 - 2013", logo: "/audible.webp" },
                { company: "Microsoft", role: "Intern Developer", dates: "2010 - 2011", logo: "/micro.jpg" },
              ].map((job, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <Image
                    src={job.logo}
                    alt={job.company}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h5 className="font-semibold">{job.company}</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{job.role}</p>
                    <p className="text-xs text-gray-500">{job.dates}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0 }}
          >
            <h4 className="text-lg font-semibold mb-4">Skills</h4>
            <div className="space-y-2">
              {[
                { name: "HTML", level: "90%", color: "bg-red-500" },
                { name: "CSS", level: "85%", color: "bg-blue-500" },
                { name: "JavaScript", level: "95%", color: "bg-yellow-500" },
                { name: "React", level: "90%", color: "bg-teal-500" },
                { name: "Next.js", level: "85%", color: "bg-purple-500" },
              ].map((skill, index) => (
                <div key={index}>
                  <p className="text-sm font-medium">{skill.name}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${skill.color} h-2 rounded-full`}
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </aside>
      </main>

      {/* Footer */}
      <motion.footer
        className="max-w-5xl mx-auto px-6 mt-8 text-center text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <p>
          Thank you for visiting my portfolio. Reach out for collaborations,
          projects, or just a friendly chat!
        </p>
      </motion.footer>
    </div>
  );
}
