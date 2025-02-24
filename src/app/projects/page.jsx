import Image from "next/image";

export const metadata = {
  title: "Projects - My Portfolio",
  description: "A collection of projects I've worked on.",
};

export default function Projects() {
  const projects = [
    {
      title: "Company",
      description: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://company.com",
      logo: "/hh.jpg",
    },
    
    {
      title: "Company",
      description: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://company.com",
      logo: "/hh.jpg",
    },
    {
      title: "Company",
      description: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://company.com",
      logo: "/hh.jpg",
    },
    {
      title: "Company",
      description: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://company.com",
      logo: "/hh.jpg",
    },
    {
      title: "Company",
      description: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://company.com",
      logo: "/hh.jpg",
    },
    {
      title: "Company",
      description: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://company.com",
      logo: "/hh.jpg",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">
        Things I have made trying to put my dent in the universe.
      </h1>
      <p className="text-lg text-gray-600 mb-12">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <Image src={project.logo} alt={project.title} width={50} height={50} className="mb-4 rounded-full" />
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 my-2">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
              <span className="mr-2">🔗</span> {project.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
