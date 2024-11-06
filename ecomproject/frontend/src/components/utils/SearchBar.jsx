import React from 'react';
import { Search } from 'lucide-react';

function SearchBar() {
  return (
    <form className="hidden items-center lg:flex">
      <input
        type="search"
        placeholder="Search..."
        className="w-full sm:w-[300px] md:w-[200px] lg:w-[300px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
}

export default SearchBar;
