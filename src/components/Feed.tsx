import { ParsedPost } from '../types/facebook';
import PostCard from './PostCard';
import { useState } from 'react';
import PhotoModal from './PhotoModal';

interface FeedProps {
  posts: ParsedPost[];
}

export default function Feed({ posts }: FeedProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');

  const sortedPosts = [...posts].sort((a, b) => {
    return sortBy === 'newest' ? b.timestamp - a.timestamp : a.timestamp - b.timestamp;
  });

  return (
    <>
      {/* Status Update Box */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div className="flex items-center gap-3">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=enamulkhan"
            alt="Avatar"
            className="w-10 h-10 rounded-full"
          />
          <input
            type="text"
            placeholder="What's on your mind?"
            className="flex-1 bg-fb-gray rounded-full px-4 py-2 text-sm text-fb-text placeholder-fb-text-light focus:outline-none focus:ring-2 focus:ring-fb-blue"
            disabled
          />
        </div>
        <div className="mt-3 flex gap-2 border-t border-fb-gray pt-3">
          <button className="flex-1 py-2 text-center text-sm text-fb-text-light hover:bg-fb-gray rounded font-medium">
            📸 Photo/Video
          </button>
          <button className="flex-1 py-2 text-center text-sm text-fb-text-light hover:bg-fb-gray rounded font-medium">
            😊 Feeling/Activity
          </button>
          <button className="flex-1 py-2 text-center text-sm text-fb-text-light hover:bg-fb-gray rounded font-medium">
            📍 Check In
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setSortBy('newest')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            sortBy === 'newest'
              ? 'bg-fb-blue text-white'
              : 'bg-white text-fb-text hover:bg-fb-gray'
          }`}
        >
          Newest First
        </button>
        <button
          onClick={() => setSortBy('oldest')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            sortBy === 'oldest'
              ? 'bg-fb-blue text-white'
              : 'bg-white text-fb-text hover:bg-fb-gray'
          }`}
        >
          Oldest First
        </button>
      </div>

      {/* Posts Feed */}
      <div>
        {sortedPosts.length === 0 ? (
          <div className="bg-white rounded-lg p-8 text-center">
            <p className="text-fb-text-light">No posts to display yet.</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-fb-text-light mb-4">
              Showing {sortedPosts.length} posts from your archive
            </p>
            {sortedPosts.map(post => (
              <PostCard
                key={post.id}
                post={post}
                onPhotoClick={setSelectedPhoto}
              />
            ))}
          </>
        )}
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <PhotoModal
          photoUri={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </>
  );
}
