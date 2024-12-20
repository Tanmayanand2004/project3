import React, { useState } from 'react';
import { BookOpen, LogIn, UserPlus, Search, Upload, BookMarked } from 'lucide-react';
import AuthModal from './components/AuthModal';
import NotesList from './components/NotesList';
import Header from './components/Header';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'register'>('login');

  const openAuthModal = (type: 'login' | 'register') => {
    setAuthType(type);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header openAuthModal={openAuthModal} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Share Knowledge, Excel Together</h1>
          <p className="text-xl mb-8">A platform for students to share and access quality study notes</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => openAuthModal('register')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition flex items-center gap-2"
            >
              <UserPlus size={20} />
              Join Now
            </button>
            <button
              onClick={() => openAuthModal('login')}
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition flex items-center gap-2"
            >
              <LogIn size={20} />
              Login
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose NotesHub?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Upload className="w-8 h-8 text-blue-600" />}
            title="Easy Sharing"
            description="Upload and share your notes with your fellow students in seconds"
          />
          <FeatureCard
            icon={<Search className="w-8 h-8 text-blue-600" />}
            title="Quick Search"
            description="Find the exact notes you need with our powerful search feature"
          />
          <FeatureCard
            icon={<BookMarked className="w-8 h-8 text-blue-600" />}
            title="Quality Content"
            description="Access peer-reviewed notes from top-performing students"
          />
        </div>
      </section>

      {/* Recent Notes Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Notes</h2>
          <NotesList />
        </div>
      </section>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        type={authType}
      />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <BookOpen className="w-6 h-6" />
              <span className="text-xl font-bold">NotesHub</span>
            </div>
            <p className="text-gray-400">© 2024 NotesHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;