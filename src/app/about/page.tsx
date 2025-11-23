import React from 'react';

// Define the content structure
const AboutContent = {
  title: "Our Mission: Cinematic Discovery, Reimagined",
  paragraph: "Welcome to My Movie Hub, your definitive source for discovering and exploring the world of film. Our mission is to provide a fast, elegant, and comprehensive movie database experience. We leverage the power of Next.js and TypeScript to deliver a responsive, server-rendered application, ensuring lightning-fast load times and rock-solid reliability. All movie data is pulled directly from The Movie Database (TMDb) API, guaranteeing you access to the latest titles, ratings, and details. The entire user interface, including our smooth dark mode switch, is meticulously styled using Tailwind CSS, offering a clean, modern design that is a pleasure to use on any device. Start browsing trending films, dive into specific genres, or find that perfect movie for your next watch night—all in one seamless, high-performance platform.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 min-h-screen">
      
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-green-500">
        {AboutContent.title}
      </h1>

      {/* Paragraph Content */}
      <p className="text-xl mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
        {AboutContent.paragraph}
      </p>

      {/* Technology Highlights Section */}
      <div className="mt-10 p-6 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Built with Modern Technology
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300">
          <li>
            **Next.js & TypeScript:** For robust, type-safe, and server-rendered performance.
          </li>
          <li>
            **Tailwind CSS:** For a utility-first, theme-aware, and responsive design.
          </li>
          <li>
            **TMDb API:** Our reliable source for up-to-date cinematic data.
          </li>
        </ul>
      </div>
      
    </div>
  );
}