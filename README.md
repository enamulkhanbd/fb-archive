# 📱 Facebook Archive

A personal Facebook archive viewer - Browse your posts, photos, memories, and friends in a beautiful classic Facebook interface.

**Live Demo**: Coming soon on Vercel 🚀

## ✨ Features

- **Classic Facebook Design** - Nostalgic 2014-era Facebook UI
- **Timeline Feed** - View all your posts chronologically
- **Photo Gallery** - Browse all your photos with lightbox view
- **User Profile** - Your profile with stats and intro
- **Friends List** - View your friends with mutual friend counts
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Bengali Text Support** - Full Unicode support for Bengali posts
- **Memory Posts** - Highlights for posts from years ago

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/enamulkhanbd/fb-archive.git
cd fb-archive

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Setup Your Data

1. **Download Your Facebook Data**
   - Go to Facebook Settings → Download your information
   - Select JSON format and download

2. **Place Your Data**
   - Copy your `your_posts__check_ins__photos_and_videos_1.json` to `public/facebook-data.json`
   - If you have photos, copy your `your_facebook_activity/` folder to `public/`

3. **Refresh the app** - Your posts should now appear!

## 📁 Project Structure

```
fb-archive/
├── public/
│   └── facebook-data.json          # Your Facebook data dump
├── src/
│   ├── components/
│   │   ├── Header.tsx              # Top navigation
│   │   ├── Sidebar.tsx             # Left menu
│   │   ├── Feed.tsx                # Main timeline
│   │   ├── PostCard.tsx            # Individual post
│   │   ├── ProfilePage.tsx         # User profile
│   │   ├── FriendsPage.tsx         # Friends list
│   │   ├── PhotosPage.tsx          # Photo gallery
│   │   ├── PhotoModal.tsx          # Lightbox
│   │   └── RightSidebar.tsx        # Stats sidebar
│   ├── hooks/
│   │   └── useFacebookData.ts      # Data fetching hook
│   ├── types/
│   │   └── facebook.ts             # TypeScript interfaces
│   ├── utils/
│   │   ├── parser.ts               # Data parser
│   │   ├── constants.ts            # Mock data
│   │   └── dateFormat.ts           # Date utilities
│   ├── App.tsx                     # Main app component
│   ├── main.tsx                    # React entry point
│   └── index.css                   # Global styles
├── index.html                      # HTML template
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🎨 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Framer Motion** - Animations (optional)

## 📖 Usage

### Viewing Posts
- Browse your timeline with newest posts first
- Click on images to view in fullscreen
- See comments count and reactions

### Profile
- View your profile bio and introduction
- See post and photo counts
- Check your join date

### Photos
- Browse all your photos in a grid
- Filter by newest or oldest
- Hover to see photo dates

### Friends
- View all your friends
- Sort by name or mutual friends
- See mutual friend counts

## 🔒 Privacy

All your data stays local - nothing is sent to any server. Your archive is private and secure.

## 🚢 Deploy to Vercel

```bash
# Build for production
npm run build

# Deploy to Vercel
npm install -g vercel
vercel
```

## 🛠️ Customization

### Change Profile Info
Edit `src/utils/constants.ts`:

```typescript
export const USER_PROFILE: UserProfile = {
  name: 'Your Name',
  bio: 'Your Bio',
  location: 'Your Location',
  // ... other fields
};
```

### Modify Colors
Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'fb-blue': '#1877F2',    // Change this
  'fb-gray': '#F0F2F5',    // And this
  // ... etc
}
```

### Add Mock Friends
Edit the `MOCK_FRIENDS` array in `src/utils/constants.ts`

## 📝 Troubleshooting

**"facebook-data.json not found"**
- Make sure the file is in the `public/` folder
- Check the filename matches exactly

**"Images not loading"**
- Ensure your `your_facebook_activity/` folder is in `public/`
- Check image paths in the JSON file

**"Bengali text shows as symbols"**
- Verify your browser supports UTF-8 (it does by default)
- Check that your JSON file preserved Unicode

## 🎉 Features Coming Soon

- [ ] Search functionality
- [ ] Date range filters
- [ ] Tag people in photos
- [ ] Dark mode
- [ ] Export as PDF
- [ ] Comments display

## 📄 License

This project is open source. Feel free to fork and customize for your own use.

## 🤝 Contributing

Found a bug? Want to add a feature? Open an issue or submit a PR!

## 📮 Questions?

If you need help:
1. Check the [GitHub Issues](https://github.com/enamulkhanbd/fb-archive/issues)
2. Create a new issue with details
3. Tag with your problem type

---

**Made with ❤️ to preserve your digital memories**
