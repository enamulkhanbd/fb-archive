interface SidebarProps {
  currentPage: string;
  onPageChange: (page: 'home' | 'profile' | 'friends' | 'photos') => void;
}

export default function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const navItems = [
    { id: 'home', label: '🏠 Home', icon: '🏠' },
    { id: 'profile', label: '👤 Profile', icon: '👤' },
    { id: 'friends', label: '👥 Friends', icon: '👥' },
    { id: 'photos', label: '📸 Photos', icon: '📸' },
  ];

  return (
    <aside className="w-64 hidden md:block">
      <nav className="bg-white rounded-lg p-4 space-y-2">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id as any)}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
              currentPage === item.id
                ? 'bg-fb-light text-fb-blue'
                : 'text-fb-text hover:bg-fb-gray'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* Shortcuts Section */}
      <div className="mt-6 bg-white rounded-lg p-4">
        <h3 className="text-xs font-bold text-fb-text-light mb-3 uppercase">Your Shortcuts</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-2 hover:bg-fb-gray rounded cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
              📱
            </div>
            <span className="text-sm text-fb-text">My Archive</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
