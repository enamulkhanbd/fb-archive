import { ParsedPost } from '../types/facebook';
import { useState } from 'react';
import PhotoModal from './PhotoModal';

interface PhotosPageProps {
  posts: ParsedPost[];
}

export default function PhotosPage({ posts }: PhotosPageProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');

  // Extract all photos from posts
  const allPhotos = posts
    .flatMap(post =>
      post.images.map(uri => ({
        uri,
        timestamp: post.timestamp,
        date: post.date,
        postText: post.text
      }))
    );

  const sortedPhotos = sortBy === 'newest'
    ? allPhotos.sort((a, b) => b.timestamp - a.timestamp)
    : allPhotos.sort((a, b) => a.timestamp - b.timestamp);

  return (
    <div>
      {/* Header */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
        <h1 className="text-3xl font-bold text-fb-text mb-2">Photos</h1>
        <p className="text-fb-text-light">{allPhotos.length} photos</p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <div className="flex gap-2">
          <button
            onClick={() => setSortBy('newest')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              sortBy === 'newest'
                ? 'bg-fb-blue text-white'
                : 'bg-fb-gray text-fb-text hover:bg-fb-gray-dark'
            }`}
          >
            Newest
          </button>
          <button
            onClick={() => setSortBy('oldest')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              sortBy === 'oldest'
                ? 'bg-fb-blue text-white'
                : 'bg-fb-gray text-fb-text hover:bg-fb-gray-dark'
            }`}
          >
            Oldest
          </button>
        </div>
      </div>

      {/* Photos Grid */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {sortedPhotos.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-fb-text-light">No photos found in your archive.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0 bg-black">
            {sortedPhotos.map((photo, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden bg-black group cursor-pointer"
                style={{ aspectRatio: '1' }}
                onClick={() => setSelectedPhoto(photo.uri)}
              >
                <img
                  src={photo.uri}
                  alt={`Photo ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23333" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3EImage not found%3C/text%3E%3C/svg%3E';
                  }}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity flex items-center justify-center">
                  <span className="text-white text-2xl">🔍</span>
                </div>
                {/* Date Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xs">{photo.date}</p>
                </div>
              </div>
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
