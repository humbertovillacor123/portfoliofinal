"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Tilt from "react-parallax-tilt";

export default function ProjectsPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "SpaceXplorer 🚀",
      description: "Empowering civilians to explore space on their terms.",
      link: "https://spacexplorer.com",
      logo: "/hh.jpg",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "EcoTracker 🌿",
      description: "An app to track and reduce your carbon footprint.",
      link: "https://ecotracker.com",
      logo: "/hh.jpg",
      techStack: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "FitFusion 💪",
      description: "A platform connecting trainers and fitness enthusiasts.",
      link: "https://fitfusion.com",
      logo: "/hh.jpg",
      techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
    },
    {
      title: "Artify 🎨",
      description: "Empowering artists to showcase and sell their work.",
      link: "https://artify.com",
      logo: "/hh.jpg",
      techStack: ["Gatsby", "GraphQL", "Stripe"],
    },
    {
      title: "TravelMate 🌍",
      description: "Discover hidden gems around the world.",
      link: "https://travelmate.com",
      logo: "/hh.jpg",
      techStack: ["Next.js", "Google Maps API", "Sass"],
    },
    {
      title: "CodeCollab 👨‍💻",
      description: "A real-time code collaboration tool for devs.",
      link: "https://codecollab.com",
      logo: "/hh.jpg",
      techStack: ["React", "WebSockets", "Express.js"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-8 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen"
    >
      {projects.map((project, index) => (
        <Tilt key={index} glareEnable={true} glareMaxOpacity={0.45} scale={1.05}>
          <motion.div
            className={`relative p-6 rounded-xl shadow-xl backdrop-blur-md border border-gray-700 ${
              hoveredIndex === index ? "bg-white/20" : "bg-white/10"
            } hover:shadow-2xl transition-transform duration-300`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Glowing Border on Hover */}
            <div
              className={`absolute inset-0 rounded-xl ${
                hoveredIndex === index ? "border-4 border-teal-400 animate-pulse" : ""
              }`}
            ></div>

            <div className="flex items-center mb-4">
              <Image
                src={project.logo}
                alt={project.title}
                width={50}
                height={50}
                className="rounded-full border-2 border-gray-200"
              />
              <h2 className="text-2xl font-bold ml-4 text-white">{project.title}</h2>
            </div>

            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-teal-500 text-sm px-2 py-1 rounded-full text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline flex items-center font-medium"
              whileHover={{ scale: 1.1 }}
            >
              <span className="mr-2">🔥</span> Visit Project
            </motion.a>
          </motion.div>
        </Tilt>
      ))}
    </motion.div>
  );
}
