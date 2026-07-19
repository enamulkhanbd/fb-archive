export default function Header() {
  return (
    <header className="bg-white border-b border-fb-gray-dark sticky top-0 z-50 shadow-sm">
      <div className="px-4 py-3 max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-fb-blue">facebook</div>

        {/* Search Bar */}
        <div className="flex-1 mx-8">
          <input
            type="text"
            placeholder="🔍 Search Facebook"
            className="w-full bg-fb-gray rounded-full px-4 py-2 text-sm text-fb-text placeholder-fb-text-light focus:outline-none focus:ring-2 focus:ring-fb-blue"
          />
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-4">
          <button className="text-fb-text-light hover:text-fb-text px-3 py-2 text-sm font-medium">
            Home
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <span className="text-white text-sm font-bold">EK</span>
          </div>
        </div>
      </div>
    </header>
  );
}
