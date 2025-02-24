"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    {
      title: "SpaceXplorer",
      description: "Building technology to let civilians explore space on their own terms.",
      link: "https://spacexplorer.com",
      logo: "/hh.jpg",
    },
    {
      title: "EcoTracker",
      description: "An app to track and reduce your carbon footprint.",
      link: "https://ecotracker.com",
      logo: "/hh.jpg",
    },
    {
      title: "FitFusion",
      description: "A fitness platform connecting trainers with clients worldwide.",
      link: "https://fitfusion.com",
      logo: "/hh.jpg",
    },
    {
      title: "Artify",
      description: "Empowering artists to showcase and sell their artwork globally.",
      link: "https://artify.com",
      logo: "/hh.jpg",
    },
    {
      title: "TravelMate",
      description: "The ultimate app for finding off-the-beaten-path travel spots.",
      link: "https://travelmate.com",
      logo: "/hh.jpg",
    },
    {
      title: "CodeCollab",
      description: "A real-time code collaboration tool for developers.",
      link: "https://codecollab.com",
      logo: "/hh.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <Image
            src={project.logo}
            alt={project.title}
            width={60}
            height={60}
            className="rounded-full mb-4 border-2 border-gray-200"
          />
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center"
            whileHover={{ scale: 1.1 }}
          >
            <span className="mr-2">🔗</span> Visit Project
          </motion.a>
        </motion.div>
      ))}
    </div>
  );
}
