# Dev Detective

A sleek, minimalist GitHub profile search application built with vanilla JavaScript, inspired by Apple's design philosophy.

## Features

✨ **Clean Interface** - Apple-inspired minimalist design with smooth animations
🔍 **GitHub Profile Search** - Search any GitHub user by username
📊 **User Statistics** - View repos, followers, and following counts
💾 **Local Storage** - Automatically remembers your last search
⚡ **Fast & Responsive** - No dependencies, pure vanilla JavaScript
🎨 **Modern CSS** - Custom CSS variables, flexbox layout, beautiful shadows
♿ **Accessible** - Semantic HTML, keyboard navigation support

## Live Demo

[View Dev Detective](https://dev-detective.vercel.app)

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, flexbox, animations
- **JavaScript (ES6+)** - Async/await, Fetch API, DOM manipulation
- **GitHub API** - Public user data endpoint

## Installation

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Dev-Detective.git
cd Dev-Detective
```

2. Open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Windows
start index.html

# Or simply drag index.html into your browser
```

That's it! No build tools, no dependencies, no installation needed.

## How It Works

### Search Flow
1. User enters a GitHub username in the search bar
2. Click "Search" or press Enter
3. App fetches data from GitHub API
4. User profile card displays with avatar, bio, and stats
5. Last search is saved to browser's localStorage

### Key Technologies

**Fetch API & Async/Await**
```javascript
async function fetchUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    renderProfile(data);
}
```

**LocalStorage Persistence**
```javascript
localStorage.setItem('github_last_search', username);
const lastUser = localStorage.getItem('github_last_search');
```

**Error Handling**
```javascript
try {
    if (!response.ok) throw new Error("User not found");
} catch (error) {
    // Display user-friendly error message
}
```

## File Structure

```
Dev-Detective/
├── index.html      # Main HTML structure
├── style.css       # Styling with CSS variables
├── script.js       # Logic (Fetch, async/await, DOM)
└── README.md       # This file
```

## Design System

### Colors (CSS Variables)
- **Primary Background**: `#f5f5f7` (Apple light grey)
- **Card Background**: `#ffffff`
- **Primary Text**: `#1d1d1f`
- **Secondary Text**: `#86868b`
- **Accent**: `#0071e3` (Apple blue)
- **Error**: `#ff3b30`

### Typography
- **Font Family**: Inter (Google Fonts) with Apple system font fallback
- **Heading**: 32px, weight 700
- **Body**: 16px, weight 400

### Spacing & Radius
- **Border Radius**: 18px (cards), 12px (inputs)
- **Gap/Padding**: 24px (main), 32px (cards)
- **Shadow**: `0 10px 40px rgba(0, 0, 0, 0.08)`

## Deployment

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → "Import Git Repository"
4. Select this repository
5. Click "Deploy"

Your app will be live with a free Vercel URL!

### Option 2: GitHub Pages

1. Go to repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose `main` branch
4. Save

Your app will be live at `https://yourusername.github.io/Dev-Detective`

### Option 3: Netlify

1. Drag and drop your project folder on [app.netlify.com](https://app.netlify.com)
2. Your site is instantly deployed!

## API Usage

This app uses the **GitHub REST API v3** (public endpoint, no authentication required):

```
GET https://api.github.com/users/{username}
```

**Rate Limiting**: 60 requests per hour (per IP address) for unauthenticated requests.

**Response includes**:
- `avatar_url` - Profile picture
- `name` - Full name
- `login` - GitHub username
- `bio` - User biography
- `public_repos` - Public repository count
- `followers` - Follower count
- `following` - Following count
- `html_url` - Link to GitHub profile

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- **No dependencies** - Loads instantly
- **Minimal CSS** - ~6KB uncompressed
- **Minimal JS** - ~3KB uncompressed
- **Cached searches** - localStorage avoids redundant API calls
- **Smooth animations** - GPU-accelerated CSS transforms

## Future Enhancements

- 🌙 Dark mode toggle
- 📱 Advanced search filters
- 📈 User activity graph
- 💬 Repository search
- 🔐 GitHub OAuth authentication
- ⭐ Favorite profiles

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Created with ❤️ following Apple design principles.

## Acknowledgments

- Inspired by Apple's minimalist design philosophy
- GitHub API documentation
- Inter font by Rasmus Andersson
- Icons and design patterns from Apple Human Interface Guidelines

---

**Questions?** Open an issue or reach out!
