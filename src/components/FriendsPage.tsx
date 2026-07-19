import { useState } from 'react';
import { MOCK_FRIENDS } from '../utils/constants';

export default function FriendsPage() {
  const [sortBy, setSortBy] = useState<'name' | 'mutual'>('name');

  const sortedFriends = [...MOCK_FRIENDS].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return b.mutualFriends - a.mutualFriends;
  });

  return (
    <div>
      {/* Header */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
        <h1 className="text-3xl font-bold text-fb-text mb-2">Friends</h1>
        <p className="text-fb-text-light">{MOCK_FRIENDS.length} friends</p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <div className="flex gap-2">
          <button
            onClick={() => setSortBy('name')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              sortBy === 'name'
                ? 'bg-fb-blue text-white'
                : 'bg-fb-gray text-fb-text hover:bg-fb-gray-dark'
            }`}
          >
            Sort by Name
          </button>
          <button
            onClick={() => setSortBy('mutual')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              sortBy === 'mutual'
                ? 'bg-fb-blue text-white'
                : 'bg-fb-gray text-fb-text hover:bg-fb-gray-dark'
            }`}
          >
            Sort by Mutual
          </button>
        </div>
      </div>

      {/* Friends Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedFriends.map(friend => (
          <div
            key={friend.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Friend Header */}
            <div className="h-20 bg-gradient-to-r from-blue-400 to-blue-500"></div>

            {/* Friend Info */}
            <div className="px-4 pb-4 -mt-8 relative">
              <div className="mb-3">
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <h3 className="font-bold text-fb-text text-lg">{friend.name}</h3>
              <p className="text-sm text-fb-text-light mb-3">
                {friend.mutualFriends} mutual friends
              </p>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-fb-blue text-white rounded-lg font-medium text-sm hover:bg-fb-dark transition-colors">
                  Message
                </button>
                <button className="flex-1 py-2 bg-fb-gray text-fb-text rounded-lg font-medium text-sm hover:bg-fb-gray-dark transition-colors">
                  Unfriend
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
