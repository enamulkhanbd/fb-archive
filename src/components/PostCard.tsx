import { ParsedPost } from '../types/facebook';
import { USER_PROFILE } from '../utils/constants';
import { useState } from 'react';

interface PostCardProps {
  post: ParsedPost;
  onPhotoClick?: (imageUri: string) => void;
}

export default function PostCard({ post, onPhotoClick }: PostCardProps) {
  const [showComments, setShowComments] = useState(false);

  return (
    <article className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
      {/* Post Header */}
      <div className="px-4 py-3 border-b border-fb-gray">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={USER_PROFILE.avatar}
              alt={USER_PROFILE.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-bold text-fb-text text-sm">{USER_PROFILE.name}</p>
              <p className="text-xs text-fb-text-light">{post.timeAgo}</p>
            </div>
          </div>
          <button className="text-fb-text-light hover:text-fb-text">
            <span className="text-2xl leading-none">⋯</span>
          </button>
        </div>
      </div>

      {/* Post Content */}
      <div className="px-4 py-3">
        {post.isMemory && (
          <div className="bg-blue-50 border-l-4 border-fb-blue px-3 py-2 mb-3 rounded text-xs text-fb-blue font-medium">
            🎂 Memories: {post.date}
          </div>
        )}
        
        <p className="text-fb-text text-sm leading-relaxed whitespace-pre-wrap break-words">
          {post.text}
        </p>

        {/* Places */}
        {post.places.length > 0 && (
          <div className="mt-3 space-y-1">
            {post.places.map((place, idx) => (
              <div key={idx} className="text-xs text-fb-blue">
                📍 {place.name}{place.address && ` · ${place.address}`}
              </div>
            ))}
          </div>
        )}

        {/* Events */}
        {post.events.length > 0 && (
          <div className="mt-3 space-y-1">
            {post.events.map((event, idx) => (
              <div key={idx} className="text-xs text-fb-blue">
                📅 {event.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Images Grid */}
      {post.images.length > 0 && (
        <div className={`bg-fb-gray ${
          post.images.length === 1 ? '' : 
          post.images.length === 2 ? 'grid grid-cols-2' :
          'grid grid-cols-2'
        }`}>
          {post.images.map((image, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden bg-black group cursor-pointer"
              style={{ aspectRatio: '1' }}
              onClick={() => onPhotoClick?.(image)}
            >
              <img
                src={image}
                alt={`Post image ${idx + 1}`}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f2f5" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="%2365676b" text-anchor="middle" dominant-baseline="middle"%3EImage not found%3C/text%3E%3C/svg%3E';
                }}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>
          ))}
        </div>
      )}

      {/* Post Footer - Like, Comment, Share */}
      <div className="px-4 py-3 border-t border-fb-gray">
        <div className="flex gap-2 mb-3 text-xs text-fb-text-light">
          <span>👍 0</span>
          <span>💬 0</span>
        </div>
        
        <div className="flex gap-1 border-t border-fb-gray pt-2">
          <button className="flex-1 py-2 text-center text-sm text-fb-text-light hover:bg-fb-gray rounded font-medium transition-colors">
            👍 Like
          </button>
          <button
            onClick={() => setShowComments(!showComments)}
            className="flex-1 py-2 text-center text-sm text-fb-text-light hover:bg-fb-gray rounded font-medium transition-colors"
          >
            💬 Comment
          </button>
          <button className="flex-1 py-2 text-center text-sm text-fb-text-light hover:bg-fb-gray rounded font-medium transition-colors">
            ↗️ Share
          </button>
        </div>

        {/* Comments Section (Collapsed) */}
        {showComments && (
          <div className="mt-3 pt-3 border-t border-fb-gray">
            <div className="text-xs text-fb-text-light text-center py-2 bg-fb-gray rounded">
              No comments yet
            </div>
            <div className="mt-3">
              <input
                type="text"
                placeholder="Write a comment..."
                className="w-full text-sm px-3 py-2 bg-fb-gray rounded-full focus:outline-none focus:ring-2 focus:ring-fb-blue"
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
