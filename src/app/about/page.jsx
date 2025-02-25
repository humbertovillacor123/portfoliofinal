'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-16">
      {/* Main Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center gap-8"
      >
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">
            I am Humberto. I live in Utah, where I build amazing web experiences. 💻
          </h1>
          <p className="text-lg">
            Hello! I am <span className="font-bold text-green-600">Humberto</span>, a passionate software engineer focused on creating seamless and impactful web applications. My journey started with a curiosity for how websites work, and now its my profession and passion. 🚀
          </p>
          <p className="text-lg mt-4">
            I specialize in modern web technologies like <span className="text-blue-600 font-semibold">React, Next.js, and Tailwind CSS</span>, focusing on crafting user interfaces that are both functional and visually appealing.
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <Image
            src="/beto.jpg"
            alt="Humberto playing soccer"
            width={250}
            height={250}
            className="rounded-full shadow-lg border-4 border-white-500"
          />
          {/* Sparkle effect */}
          <div className="absolute top-0 left-0 w-full h-full rounded-full animate-pulse border-2 border-teal-400 opacity-50"></div>
        </motion.div>
      </motion.div>

      {/* Background Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col-reverse md:flex-row items-center gap-8"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <Image
            src="/peru.jpg"
            alt="Peru Landscape"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-teal-300 opacity-20 rounded-lg"></div>
        </motion.div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">My Roots 🌄</h2>
          <p className="text-lg">
            I was born and raised in the vibrant country of <span className="font-bold text-red-500">Peru</span>. Growing up surrounded by rich culture, delicious food, and stunning landscapes inspired me to appreciate the beauty in diversity. My Peruvian background has shaped my worldview, and I carry that pride in everything I do.
          </p>
        </div>
      </motion.div>

      {/* Family Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center gap-8"
      >
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">Family First 👨‍👩‍👦</h2>
          <p className="text-lg">
            My family has always been my foundation. Their love, support, and values have guided me throughout my life. I cherish every moment spent with them and strive to make them proud through my work and personal achievements.
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05, rotate: -3 }}
          className="relative"
        >
          <Image
            src="/family.jpg"
            alt="Family Photo"
            width={300}
            height={250}
            className="rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-yellow-300 opacity-10 rounded-lg"></div>
        </motion.div>
      </motion.div>

      {/* Girlfriend Section - Sara on the Left */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center gap-8"
      >
        {/* Sara's image on the left */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          className="relative"
        >
          <Image
            src="/gf.jpg"
            alt="Sara"
            width={250}
            height={300}
            className="rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-pink-300 opacity-20 rounded-lg"></div>
        </motion.div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">My Person ❤️</h2>
          <p className="text-lg">
            Life is even more beautiful when shared with someone special. I am blessed to have an incredible partner, <span className="font-bold text-pink-500">Sara</span>, by my side. Her kindness, strength, and love make every day brighter. Together, we dream big and support each others aspirations.
          </p>
        </div>
      </motion.div>

      {/* Mission Section - Aligned to the Right */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col-reverse md:flex-row-reverse items-center gap-8"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative"
        >
          <Image
            src="/mission.jpg"
            alt="Colombia Mission"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-300 opacity-20 rounded-lg"></div>
        </motion.div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">My Mission 🇨🇴</h2>
          <p className="text-lg">
            I had the privilege of serving my mission in <span className="font-bold text-yellow-500">Colombia</span>, where I connected deeply with people, learned invaluable life lessons, and grew both spiritually and emotionally. It was an experience that strengthened my resilience and compassion.
          </p>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Lets Connect! 🤝</h2>
        <p className="text-lg mb-4">
          I am always excited to collaborate on projects that push boundaries. Feel free to reach out—lets create something amazing together!
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <Image src="/x.png" alt="X" width={30} height={30} />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <Image src="/git.png" alt="GitHub" width={30} height={30} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <Image src="/linke.webp" alt="LinkedIn" width={30} height={30} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
