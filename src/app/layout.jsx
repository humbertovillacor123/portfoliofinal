import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <footer className="border-t mt-8 py-4 text-center text-sm text-gray-500">
          <nav className="mb-2">
            <a href="/" className="mx-2 hover:text-green-500">Home</a>
            <a href="/about" className="mx-2 hover:text-green-500">About</a>
            <a href="/projects" className="mx-2 hover:text-green-500">Projects</a>
            <a href="/uses" className="mx-2 hover:text-green-500">Uses</a>
          </nav>
          <p>© 2025 Humberto Villanueva. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
