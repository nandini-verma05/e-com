import React from 'react';
import { Menu } from 'lucide-react';

function MobileMenuButton() {
  return (
    <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:hidden">
      <Menu className="h-4 w-4" />
      <span className="sr-only">Menu</span>
    </button>
  );
}

export default MobileMenuButton;
