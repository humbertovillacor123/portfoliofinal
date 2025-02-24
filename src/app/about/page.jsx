"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-lg">
      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section - Text with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl font-extrabold text-black-600 mb-6">
            I am Humberto. I live in Utah, where I build amazing web experiences. 💻
          </h1>

          <p className="text-lg mb-4 leading-relaxed">
            Hello! I&apos;m <span className="font-semibold text-green-500">Humberto</span>, a 
            <span className="font-semibold text-blue-500"> passionate software engineer</span> focused on creating seamless and impactful web applications.
            My journey started with a curiosity for how websites work, and now it&apos;s my profession and passion. 🚀
          </p>

          <p className="text-lg mb-4 leading-relaxed">
            I specialize in modern web technologies like <span className="font-semibold text-blue-600">React, Next.js, and Tailwind CSS</span>, focusing on crafting user interfaces that are both functional and visually appealing.
          </p>

          <p className="text-lg mb-4 leading-relaxed">
            Outside of coding, you can find me <span className="font-semibold text-yellow-500">playing soccer ⚽</span>, exploring new places, or spending time with friends and family. I believe in lifelong learning and constantly strive to enhance my skills.
          </p>

          <p className="text-lg leading-relaxed">
            I&apos;m always excited to collaborate on projects that push boundaries. Feel free to reach out—let&apos;s create something amazing together! 💡
          </p>
        </motion.div>

        {/* Right Section - Image & Social Links */}
        <motion.div
          className="flex flex-col items-center space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image with Hover Effect */}
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Image
              src="/betico.jpeg"
              alt="Humberto Villanueva"
              width={250}
              height={250}
              className="rounded-full shadow-lg border-4 border-white -500"
            />
          </motion.div>

          {/* Social Links */}
          <div className="space-y-4 w-full">
            {[
              { name: "X", link: "https://twitter.com/yourprofile", icon: "/x.png", color: "hover:text-blue-400" },
              { name: "GitHub", link: "https://github.com/yourprofile", icon: "/git.png", color: "hover:text-gray-400" },
              { name: "LinkedIn", link: "https://www.linkedin.com/in/yourprofile", icon: "/linke.webp", color: "hover:text-blue-600" },
              { name: "Email", link: "mailto:hachevillanueva99@gmail.com", icon: "/email.jpg", color: "hover:text-red-500" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className={`flex items-center space-x-3 text-lg ${social.color} transition-colors cursor-pointer`}
              >
                <Image src={social.icon} alt={social.name} width={28} height={28} className="rounded-full" />
                <span>{social.name === "Email" ? "hachevillanueva99@gmail.com" : `Follow me on ${social.name}`}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
