# Ayoub Essare - Personal Portfolio

A modern, responsive personal portfolio website built with Angular 18, featuring a beautiful glass morphism design and optimized for performance.

## 🚀 Features

- **Modern Design**: Glass morphism UI with beautiful animations
- **Responsive**: Optimized for all devices and screen sizes
- **Performance**: Optimized for production with minimal bundle size
- **SEO Optimized**: Meta tags, structured data, and sitemap
- **PWA Ready**: Progressive Web App capabilities
- **Accessibility**: WCAG compliant design

## 🛠️ Tech Stack

- **Framework**: Angular 18 (Standalone Components)
- **Styling**: SCSS with CSS Variables
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Inter, JetBrains Mono)
- **Build Tool**: Angular CLI
- **Deployment**: Static hosting ready

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/essare/essare.me
cd essare.me

# Install dependencies
npm install

# Start development server
npm start
```

## 🏗️ Build Commands

```bash
# Development build
npm run build:dev

# Production build
npm run build:prod

# Analyze bundle size
npm run analyze

# Run tests
npm test

# Lint code
npm run lint
```

## 🚀 Production Deployment

### Option 1: Using the deployment script

```bash
# Make script executable
chmod +x deploy.sh

# Run deployment script
./deploy.sh
```

### Option 2: Manual deployment

```bash
# Build for production
npm run build:prod

# The built files will be in dist/essare-me/browser/
# Upload these files to your web server
```

### Deployment Targets

- **Firebase Hosting**: Use Firebase CLI (recommended)
- **Netlify**: Drag and drop `dist/essare-me/browser/` folder
- **Vercel**: Connect repository and deploy automatically
- **GitHub Pages**: Use GitHub Actions
- **Traditional Hosting**: Upload `dist/essare-me/browser/` contents

### Firebase Hosting Deployment

#### Setup Firebase Project

```bash
# Run the Firebase setup script
./setup-firebase.sh
```

This will:
- Install Firebase CLI if needed
- Help you login to Firebase
- Show available projects
- Initialize Firebase configuration

#### Option 1: Using the Firebase deployment script

```bash
# Make script executable
chmod +x deploy-firebase.sh

# Run Firebase deployment script
./deploy-firebase.sh
```

#### Option 2: Using npm scripts

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy to Firebase
npm run firebase:deploy
```

#### Option 3: Manual deployment

```bash
# Build for production
npm run build:prod

# Deploy to Firebase
firebase deploy --only hosting
```

#### GitHub Actions (Automatic)

The repository includes GitHub Actions workflows that automatically deploy:
- **On merge to main**: Deploys to production
- **On pull requests**: Creates preview deployments

#### Troubleshooting

**Firebase Project Issues:**
- If you get "Failed to get Firebase project essare-me", the project doesn't exist
- Create the project in [Firebase Console](https://console.firebase.google.com/)
- Or update the project ID in `firebase.json` and GitHub Actions workflows

**Build Size Warnings:**
- CSS budget warnings are normal for a modern portfolio
- The build will still succeed with warnings
- To reduce size, consider optimizing images or removing unused styles

**Node Version Warnings:**
- Angular 18 requires Node.js 20.19.0+ or 22.12.0+
- Update Node.js if you see engine warnings

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   └── footer/
│   ├── pages/
│   │   ├── home/
│   │   ├── about/
│   │   ├── experience/
│   │   ├── skills/
│   │   ├── projects/
│   │   ├── certifications/
│   │   └── contact/
│   ├── app.component.ts
│   ├── app.routes.ts
│   └── app.config.ts
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
├── styles.scss
└── main.ts
public/
├── assets/
│   ├── img/
│   ├── css/
│   └── js/
├── robots.txt
├── sitemap.xml
└── favicon files
```

## 🎨 Design System

### Colors
- Primary: `#667eea`
- Secondary: `#764ba2`
- Accent: `#f093fb`
- Success: `#4ade80`
- Warning: `#fbbf24`
- Error: `#f87171`

### Typography
- Primary Font: Inter
- Monospace Font: JetBrains Mono

### Spacing
- XS: `0.25rem`
- SM: `0.5rem`
- MD: `1rem`
- LG: `1.5rem`
- XL: `2rem`
- 2XL: `3rem`
- 3XL: `4rem`

## 📱 Responsive Breakpoints

- Mobile: `max-width: 768px`
- Tablet: `max-width: 1024px`
- Desktop: `min-width: 1025px`

## 🔧 Configuration

### Environment Variables

Create environment files for different configurations:

- `src/environments/environment.ts` - Development
- `src/environments/environment.prod.ts` - Production

### SEO Configuration

Update the following files for SEO:
- `src/index.html` - Meta tags
- `public/sitemap.xml` - Sitemap
- `public/robots.txt` - Robots file

## 🚀 Performance Optimizations

- **Tree Shaking**: Unused code is automatically removed
- **Code Splitting**: Lazy loading for routes
- **Image Optimization**: Optimized images and lazy loading
- **CSS Optimization**: Purged unused styles
- **Bundle Analysis**: Use `npm run analyze` to check bundle size

## 📊 Bundle Analysis

```bash
# Build with stats
npm run build:prod

# Analyze bundle
npm run analyze
```

## 🔍 Testing

```bash
# Run unit tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Ayoub Essare**
- Website: [essare.me](https://essare.me)
- LinkedIn: [ayoub-essare](https://linkedin.com/in/ayoub-essare)
- GitHub: [essare-ayoub](https://github.com/essare-ayoub)
- Blog: [blog.essare.me](https://blog.essare.me)

## 🙏 Acknowledgments

- Angular team for the amazing framework
- Font Awesome for the icons
- Google Fonts for the typography
- The open-source community for inspiration
