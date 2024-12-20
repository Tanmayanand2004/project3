import React from 'react';
import { FileText, ThumbsUp, Download } from 'lucide-react';

const MOCK_NOTES = [
  {
    id: 1,
    title: 'Advanced Calculus Notes',
    subject: 'Mathematics',
    author: 'Sarah Johnson',
    likes: 156,
    downloads: 89,
    preview: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 2,
    title: 'Organic Chemistry Study Guide',
    subject: 'Chemistry',
    author: 'Michael Chen',
    likes: 234,
    downloads: 167,
    preview: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 3,
    title: 'World History Timeline',
    subject: 'History',
    author: 'Emma Wilson',
    likes: 98,
    downloads: 45,
    preview: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&w=300&q=80'
  }
];

function NotesList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {MOCK_NOTES.map((note) => (
        <div key={note.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            src={note.preview}
            alt={note.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-1">{note.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{note.subject}</p>
                <p className="text-sm text-gray-500">by {note.author}</p>
              </div>
              <FileText className="text-blue-600 w-5 h-5" />
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 text-sm text-gray-600">
                  <ThumbsUp className="w-4 h-4" />
                  {note.likes}
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-600">
                  <Download className="w-4 h-4" />
                  {note.downloads}
                </span>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View Notes
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NotesList;