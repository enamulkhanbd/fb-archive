import { ParsedPost } from '../types/facebook';
import { MOCK_FRIENDS } from '../utils/constants';

interface RightSidebarProps {
  posts: ParsedPost[];
}

export default function RightSidebar({ posts }: RightSidebarProps) {
  const photoCount = posts.reduce((sum, post) => sum + post.images.length, 0);
  const eventCount = posts.reduce((sum, post) => sum + post.events.length, 0);

  return (
    <aside className="w-64 hidden lg:block">
      {/* Stats Card */}
      <div className="bg-white rounded-lg p-4 mb-4">
        <h3 className="font-bold text-fb-text mb-3">Your Stats</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-fb-text-light">Total Posts</span>
            <span className="font-bold text-fb-blue">{posts.length}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-fb-text-light">Photos</span>
            <span className="font-bold text-fb-blue">{photoCount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-fb-text-light">Events</span>
            <span className="font-bold text-fb-blue">{eventCount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-fb-text-light">Friends</span>
            <span className="font-bold text-fb-blue">{MOCK_FRIENDS.length}</span>
          </div>
        </div>
      </div>

      {/* Online Friends Card */}
      <div className="bg-white rounded-lg p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-fb-text">Friends</h3>
          <a href="#" className="text-sm text-fb-blue hover:underline">See all</a>
        </div>
        <div className="space-y-2">
          {MOCK_FRIENDS.slice(0, 5).map(friend => (
            <div key={friend.id} className="flex items-center gap-2 p-2 hover:bg-fb-gray rounded cursor-pointer">
              <img
                src={friend.avatar}
                alt={friend.name}
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-fb-text">{friend.name}</p>
                <p className="text-xs text-fb-text-light">{friend.mutualFriends} mutual</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
