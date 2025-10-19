# The Receptionist - Rural Healthcare Management Platform

A modern, responsive React website for "The Receptionist" - a healthcare management platform designed specifically for doctors serving rural and village communities.

## Features

- **Modern React Architecture**: Built with React 18 and modern hooks
- **Responsive Design**: Mobile-first approach with perfect UI/UX across all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Professional Styling**: Clean, medical-themed design with excellent typography
- **Interactive Components**: Contact forms, navigation, and smooth scrolling
- **Accessibility**: Semantic HTML and keyboard navigation support

## Sections

1. **Hero Section**: Compelling introduction with call-to-action buttons
2. **Features Section**: Six key features with animated icons and descriptions
3. **About Section**: Statistics and mission statement with visual elements
4. **Contact Section**: Contact information and functional contact form
5. **Footer**: Links, social media, and company information

## Technology Stack

- **React 18**: Modern React with hooks and functional components
- **Framer Motion**: Smooth animations and transitions
- **React Router**: Navigation and routing
- **CSS3**: Modern styling with Flexbox and Grid
- **Font Awesome**: Professional icons
- **Google Fonts**: Inter font family for excellent readability

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- GitHub account

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 🚀 Deploy to GitHub Pages (Free Hosting)

### Method 1: Automatic Deployment with GitHub Actions (Recommended)

1. **Create a GitHub Repository:**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `the-receptionist-website` (or any name you prefer)
   - Make it public

2. **Update the Homepage URL:**
   - In `package.json`, replace `yourusername` with your actual GitHub username:
   ```json
   "homepage": "https://yourusername.github.io/the-receptionist-website"
   ```

3. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/the-receptionist-website.git
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `/ (root)`
   - Save

5. **Automatic Deployment:**
   - Every time you push to the `main` branch, GitHub Actions will automatically build and deploy your site
   - Your site will be available at: `https://yourusername.github.io/the-receptionist-website`

### Method 2: Manual Deployment

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages:**
   - Go to repository settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Your site will be live at: `https://yourusername.github.io/the-receptionist-website`

### Custom Domain (Optional)

If you have a custom domain:
1. Add a `CNAME` file to the `public` folder with your domain
2. Update the `cname` field in `.github/workflows/deploy.yml`
3. Configure DNS settings with your domain provider

## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component with mobile menu
│   ├── Hero.js            # Hero section with animations
│   ├── Features.js        # Features grid with cards
│   ├── About.js           # About section with statistics
│   ├── Contact.js         # Contact form and information
│   └── Footer.js          # Footer with links and social media
├── App.js                 # Main App component
├── App.css                # Component-specific styles
├── index.js               # React entry point
└── index.css              # Global styles and reset
```

## Design Philosophy

The website is designed with the following principles:

- **Clean & Professional**: Medical-grade design that instills trust
- **Accessible**: Easy to use for doctors of all technical levels
- **Mobile-First**: Optimized for mobile devices commonly used in rural areas
- **Fast Loading**: Optimized performance for areas with limited internet
- **Intuitive Navigation**: Simple, clear navigation structure

## Customization

The website is built with modularity in mind. Each section is a separate component that can be easily customized:

- **Colors**: Update the CSS custom properties in `index.css`
- **Content**: Modify the data arrays in each component
- **Styling**: Update the CSS classes in `App.css`
- **Animations**: Adjust Framer Motion animations in component files

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is created for demonstration purposes. All rights reserved.

---

Built with ❤️ for rural healthcare providers worldwide.
