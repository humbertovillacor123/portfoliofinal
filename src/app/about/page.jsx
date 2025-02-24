import Image from 'next/image';

export const metadata = {
  title: "About - My Portfolio",
  description: "This is the about page of my portfolio.",
};

export default function About() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Section - Text */}
        <div>
          <h1 className="text-4xl font-bold mb-4">I am Humberto. I live in Utah, where I build amazing web experiences.</h1>
          <p className="text-lg mb-4">
            Hello! I&apos;m Humberto, a <span className="font-semibold text-green-600">passionate software engineer</span> focused on creating seamless and impactful web applications. My journey into web development started with a curiosity for how websites work, and now its become my profession and passion.
          </p>
          <p className="text-lg mb-4">
            Over the years, I&apos;ve honed my skills in modern web technologies like <span className="font-semibold text-blue-600">React, Next.js, and Tailwind CSS</span>. I love crafting user interfaces that are not only functional but also aesthetically pleasing.
          </p>
          <p className="text-lg mb-4">
            Outside of coding, I enjoy <span className="font-semibold text-yellow-600">playing soccer</span>, exploring new places, and spending time with friends and family. I believe in continuous learning and always strive to improve my skills to build better digital experiences.
          </p>
          <p className="text-lg">
            I am always excited to collaborate on projects that challenge me and help me grow. Feel free to connect with me through my social links or drop me an email. Lets build something amazing together!
          </p>
        </div>

        {/* Right Section - Image and Social Links */}
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/betico.jpeg"
            alt="Humberto Villanueva"
            width={250}
            height={250}
            className="rounded-lg shadow-lg"
          />

          <div className="space-y-2 text-lg">
            <div className="flex items-center space-x-2 hover:text-blue-500 cursor-pointer">
              <Image src="/x.png" alt="X" width={20} height={20} />
              <span>Follow me on X</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-white cursor-pointer">
              <Image src="/git.png" alt="GitHub" width={20} height={20} />
              <span>Follow me on GitHub</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-blue-700 cursor-pointer">
              <Image src="/linke.webp" alt="LinkedIn" width={20} height={20} />
              <span>Follow me on LinkedIn</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-red-500 cursor-pointer">
              <Image src="/email.jpg" alt="Email" width={20} height={20} />
              <span>hachevillanueva99@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
