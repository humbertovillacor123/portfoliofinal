"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaTools, FaPaintBrush, FaRocket } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";

function Section({ title, icon, children }) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <div className="text-3xl text-teal-400 mr-3">{icon}</div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
    </motion.div>
  );
}

function ToolItem({ name, description }) {
  return (
    <motion.div
      className="p-5 bg-white/10 backdrop-blur-lg rounded-xl shadow-md hover:shadow-lg border border-gray-600 hover:border-teal-400 transition-transform hover:scale-105"
      whileHover={{ y: -5 }}
    >
      <h3 className="text-xl font-semibold text-teal-300">{name}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
    </motion.div>
  );
}

export default function Uses() {
  return (
    <motion.div
      className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-4xl font-bold text-white mb-6 flex items-center">
        <GiTechnoHeart className="text-teal-400 mr-3" /> Favorite Tools & Gear
      </h1>
      <p className="text-lg text-gray-400 mb-12">
        These are the tools, gadgets, and software that help me code, design, and stay productive.
      </p>

      {/* Workstation */}
      <Section title="Workstation" icon={<FaLaptopCode />}>
        <ToolItem name="Laptop" description="MacBook Pro M1 — blazing fast for all my dev needs." />
        <ToolItem name="Monitor" description="UltraSharp 27” 4K display for crisp visuals." />
        <ToolItem name="Mechanical Keyboard" description="Custom-built with tactile switches for a satisfying typing experience." />
        <ToolItem name="MX Master 3" description="Best ergonomic mouse for developers." />
      </Section>

      {/* Development Tools */}
      <Section title="Development Tools" icon={<FaTools />}>
        <ToolItem name="VSCode" description="Lightweight, extensible, and my primary code editor." />
        <ToolItem name="GitHub" description="For version control, collaboration, and open-source projects." />
        <ToolItem name="Postman" description="API testing simplified with Postman." />
        <ToolItem name="Docker" description="For consistent and reliable containerized development." />
      </Section>

      {/* Design */}
      <Section title="Design" icon={<FaPaintBrush />}>
        <ToolItem name="Figma" description="Go-to tool for UI/UX design and prototyping." />
        <ToolItem name="Adobe XD" description="Quick mockups and wireframes for web and mobile apps." />
      </Section>

      {/* Productivity */}
      <Section title="Productivity" icon={<FaRocket />}>
        <ToolItem name="Notion" description="All-in-one tool for planning, notes, and project management." />
        <ToolItem name="Slack" description="Staying in sync with teams and projects." />
        <ToolItem name="Trello" description="Managing tasks with Kanban boards." />
      </Section>
    </motion.div>
  );
}
