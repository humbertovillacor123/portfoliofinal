// src/app/projects/layout.jsx

export const metadata = {
    title: "Projects - Humberto's Portfolio",
    description: "A showcase of the coolest projects Humberto has worked on.",
  };
  
  export default function ProjectsLayout({ children }) {
    return (
      <div className="p-8 bg-gray-100 min-h-screen">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-teal-600">🚀 My Projects</h1>
          <p className="text-lg text-gray-700 mt-2">
            A collection of things I’ve built while exploring the world of web development.
          </p>
        </header>
  
        <main>{children}</main>
  
        <footer className="mt-12 text-center text-gray-500">
          Built with 💖 by Humberto Villanueva
        </footer>
      </div>
    );
  }
  