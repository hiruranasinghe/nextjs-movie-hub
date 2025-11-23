// components/Navbar.tsx
'use client';

import React from 'react';
// Use the correct import name (assuming you renamed your file to NavbarItem.tsx)
import NavbarItem from './NavBaritem'; 

export default function Navbar() {
  return (
    // Styling for the horizontal navigation bar
    <div className="
      drop-shadow-amber-500/20
      bg-white dark:bg-green-800
      flex 
      justify-center 
      py-4 
      gap-6 
      text-lg 
      
      /* Theme-aware background */
      bg-green-100 dark:bg-gray-700 
      
      /* Styling for horizontal scrolling on small screens */
      overflow-x-auto 
      scrollbar-hide 
      whitespace-nowrap 
    ">
      
      {/* Renders the link components */}
      <NavbarItem title="Popular" param="fetchPopular" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
      
      {/* Add more categories here later */}
      
    </div>
  );
}