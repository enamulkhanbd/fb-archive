import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import Feed from './components/Feed';
import ProfilePage from './components/ProfilePage';
import FriendsPage from './components/FriendsPage';
import PhotosPage from './components/PhotosPage';
import { useFacebookData } from './hooks/useFacebookData';

type PageType = 'home' | 'profile' | 'friends' | 'photos';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const { posts, loading, error } = useFacebookData();

  return (
    <div className="min-h-screen bg-fb-gray">
      <Header />
      
      <div className="flex gap-4 px-4 py-4 max-w-7xl mx-auto">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        
        <main className="flex-1">
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fb-blue"></div>
              </div>
              <p className="mt-4 text-fb-text-light">Loading your Facebook archive...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <p className="text-red-700">Error loading data: {error}</p>
            </div>
          )}

          {!loading && !error && (
            <>
              {currentPage === 'home' && <Feed posts={posts} />}
              {currentPage === 'profile' && <ProfilePage posts={posts} />}
              {currentPage === 'friends' && <FriendsPage />}
              {currentPage === 'photos' && <PhotosPage posts={posts} />}
            </>
          )}
        </main>

        <RightSidebar posts={posts} />
      </div>
    </div>
  );
}
