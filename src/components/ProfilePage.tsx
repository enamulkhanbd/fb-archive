import { ParsedPost } from '../types/facebook';
import { USER_PROFILE } from '../utils/constants';
import PostCard from './PostCard';
import { useState } from 'react';
import PhotoModal from './PhotoModal';

interface ProfilePageProps {
  posts: ParsedPost[];
}

export default function ProfilePage({ posts }: ProfilePageProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const profilePosts = posts.slice(0, 10); // Show first 10 posts on profile

  return (
    <div>
      {/* Cover Photo */}
      <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-4">
        <div className="relative h-80 bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
          <img
            src={USER_PROFILE.coverPhoto}
            alt="Cover"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>

        {/* Profile Info */}
        <div className="px-6 pb-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-20 mb-4 md:mb-0 relative z-10">
            <div className="flex items-end gap-4">
              <img
                src={USER_PROFILE.avatar}
                alt={USER_PROFILE.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              />
              <div className="pb-2">
                <h1 className="text-3xl font-bold text-fb-text">{USER_PROFILE.name}</h1>
                <p className="text-fb-text-light">{MOCK_FRIENDS.length} friends</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <button className="px-4 py-2 bg-fb-blue text-white rounded-lg font-medium hover:bg-fb-dark transition-colors">
                Edit Profile
              </button>
              <button className="px-4 py-2 bg-fb-gray text-fb-text rounded-lg font-medium hover:bg-fb-gray-dark transition-colors">
                ⋮
              </button>
            </div>
          </div>

          {/* About Section */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-fb-gray">
            <div className="text-center">
              <p className="text-2xl font-bold text-fb-blue">{posts.length}</p>
              <p className="text-sm text-fb-text-light">Posts</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-fb-blue">
                {posts.reduce((sum, post) => sum + post.images.length, 0)}
              </p>
              <p className="text-sm text-fb-text-light">Photos</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-fb-blue">{USER_PROFILE.joinedYear}</p>
              <p className="text-sm text-fb-text-light">Joined</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {/* Intro Card */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-bold text-fb-text mb-3">Intro</h3>
          <div className="space-y-2 text-sm">
            <div>
              <p className="text-fb-text-light">📍 From</p>
              <p className="text-fb-text font-medium">{USER_PROFILE.location}</p>
            </div>
            <div>
              <p className="text-fb-text-light">📅 Joined</p>
              <p className="text-fb-text font-medium">{USER_PROFILE.joinDate}</p>
            </div>
            <div>
              <p className="text-fb-text-light">💼 Work</p>
              <p className="text-fb-text font-medium">{USER_PROFILE.bio}</p>
            </div>
          </div>
        </div>

        {/* Photos Card */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-fb-text">Photos</h3>
            <a href="#" className="text-sm text-fb-blue hover:underline">See all</a>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {posts
              .filter(p => p.images.length > 0)
              .slice(0, 6)
              .flatMap((p, idx) => p.images.map((img, imgIdx) => (
                <img
                  key={`${idx}-${imgIdx}`}
                  src={img}
                  alt="Profile photo"
                  className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-80"
                  onClick={() => setSelectedPhoto(img)}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23f0f2f5" width="100" height="100"/%3E%3C/svg%3E';
                  }}
                />
              )))
              .slice(0, 6)
            }
          </div>
        </div>

        {/* Friends Card */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-fb-text">Friends</h3>
            <a href="#" className="text-sm text-fb-blue hover:underline">See all</a>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {MOCK_FRIENDS.slice(0, 6).map(friend => (
              <div key={friend.id} className="text-center">
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="w-full rounded-lg mb-1"
                />
                <p className="text-xs text-fb-text font-medium truncate">{friend.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Posts Section */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h3 className="font-bold text-fb-text mb-4">Posts</h3>
        {profilePosts.length === 0 ? (
          <p className="text-fb-text-light text-center py-4">No posts yet.</p>
        ) : (
          <div className="space-y-4">
            {profilePosts.map(post => (
              <PostCard
                key={post.id}
                post={post}
                onPhotoClick={setSelectedPhoto}
              />
            ))}
          </div>
        )}
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <PhotoModal
          photoUri={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  );
}

// Import mock friends (this should be at top)
import { MOCK_FRIENDS } from '../utils/constants';
