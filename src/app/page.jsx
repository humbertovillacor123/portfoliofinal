"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      <main className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <header className="flex flex-col items-right text-left mb-6">
            <Image
              src="/betico.jpeg"
              alt="My Profile"
              width={100}
              height={100}
              className="rounded-full object-cover mb-4"
            />
            <div>
              <h2 className="text-3xl font-bold">Software engineer, father, and believer</h2>
              <p className="text-gray-600 mt-1">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
              </p>
              <div className="flex space-x-4 mt-3">
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                  <Image src="/linke.webp" alt="LinkedIn" width={25} height={25} />
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <Image src="/x.png" alt="Twitter" width={25} height={25} />
                </a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <Image src="/git.png" alt="GitHub" width={25} height={25} />
                </a>
              </div>
            </div>
          </header>

          {["December 26, 2023", "December 17, 2023", "December 5, 2023"].map((date, index) => (
            <div key={index} className="mb-6">
              <p className="text-sm text-gray-500">{date}</p>
              <h3 className="text-xl font-semibold mt-1">Lorem ipsum dolor sit amet</h3>
              <p className="text-gray-600 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...
              </p>
              <a href="#" className="text-green-500 mt-2 inline-block">
                Read article →
              </a>
            </div>
          ))}
        </div>

        <aside className="space-y-6">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h4 className="text-lg font-semibold">Stay up to date</h4>
            <p className="text-gray-600 text-sm mt-2">
              Get notified when I publish something new, and unsubscribe at any time.
            </p>
            <div className="mt-4 flex">
              <input type="email" placeholder="Email address" className="w-full px-3 py-2 border rounded-l-lg focus:outline-none" />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-r-lg">Join</button>
            </div>
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg">
            <h4 className="text-lg font-semibold mb-4">Work</h4>
            <ul className="space-y-4">
              {[
                { company: "Slack", role: "Software Engineer", dates: "2016 - Present", logo: "/slack.jpg" },
                { company: "Spotify", role: "Software Engineer", dates: "2014 - 2015", logo: "/Spotify.png" },
                { company: "Audible", role: "Software Engineer", dates: "2012 - 2013", logo: "/audible.webp" },
                { company: "Microsoft", role: "Software Engineer", dates: "2010 - 2011", logo: "/micro.jpg" },
              ].map((job, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="w-10 h-10">
                    <Image src={job.logo} alt={job.company} width={40} height={40} className="rounded-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold">{job.company}</h5>
                    <p className="text-sm text-gray-600">{job.role}</p>
                    <p className="text-xs text-gray-500">{job.dates}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg">
            <h4 className="text-lg font-semibold mb-4">Skills</h4>
            <div className="space-y-2">
              {[
                { name: "HTML", level: "80%", color: "bg-red-500" },
                { name: "CSS", level: "70%", color: "bg-blue-500" },
                { name: "JavaScript", level: "90%", color: "bg-yellow-500" },
              ].map((skill, index) => (
                <div key={index}>
                  <p className="text-sm font-medium">{skill.name}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`${skill.color} h-2 rounded-full`} style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>

      <div className="max-w-5xl mx-auto px-6 mt-8">
        <p className="text-gray-600 text-center">
          Thank you for visiting my portfolio. Feel free to reach out through my social media links or email for collaborations, projects, or just a friendly chat!
        </p>
      </div>


    </div>
  );
}
