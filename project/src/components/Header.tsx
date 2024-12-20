import React from 'react';
import { BookOpen } from 'lucide-react';

interface HeaderProps {
  openAuthModal: (type: 'login' | 'register') => void;
}

function Header({ openAuthModal }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold">NotesHub</span>
          </div>
          <nav>
            <ul className="flex gap-4">
              <li>
                <button
                  onClick={() => openAuthModal('login')}
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  onClick={() => openAuthModal('register')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Register
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;