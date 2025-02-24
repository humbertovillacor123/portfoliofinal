// src/app/projects/layout.jsx

export const metadata = {
    title: "Projects - Humberto's Portfolio",
    description: "Showcasing innovative projects crafted by Humberto Villanueva.",
  };
  
  export default function ProjectsLayout({ children }) {
    return (
      <div className="p-8 bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-blue-500">
            🚀 My Projects
          </h1>
          <p className="text-xl text-gray-700 mt-4">
            A curated list of my most impactful work. Lets build something amazing together.
          </p>
        </header>
  
        <main>{children}</main>
  
        <footer className="mt-12 text-center text-gray-600">
          Built with 🔥 by <span className="font-bold text-gray-600">Humberto Villanueva</span>
        </footer>
      </div>
    );
  }
  