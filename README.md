# CutPart - Laser Cutting Parts Website

A modern, responsive website for laser cutting services with multilingual support (English/Hungarian) and advanced UI/UX features.

## 🚀 Features

### 🌐 Multi-page Structure
- **Home** - Main landing page with file upload functionality
- **About** - Company information with animated laser effects
- **Services** - Detailed service descriptions and process overview
- **Contact** - Contact form with FAQ section

### 🔄 Language Support
- **Bilingual** - English/Hungarian language switcher
- **Persistent** - Language preference saved in localStorage
- **Dynamic** - Real-time content translation without page reload

### ⚡ Modern UI/UX
- **Responsive Design** - Mobile-first approach with breakpoints
- **Loading Animations** - Smooth page transitions and loading indicators
- **Interactive Elements** - Hover effects, 3D transforms, and glassmorphism
- **File Upload** - Drag & drop functionality with visual feedback

### 📱 Technical Features
- **CSS Grid & Flexbox** - Modern layout techniques
- **Gradient Backgrounds** - Beautiful visual aesthetics
- **Touch-Friendly** - Optimized for mobile devices
- **Form Validation** - Interactive contact forms with loading states

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **Vanilla JavaScript** - No frameworks, pure JS
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
cutpart-website/
├── index.html          # Main landing page
├── about.html          # About us page
├── services.html       # Services page
├── contact.html        # Contact page
├── style.css           # Main stylesheet
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── .gitignore          # Git ignore file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cutpart-website.git
   cd cutpart-website
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for development:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Access the website**
   - Direct: `file:///path/to/index.html`
   - Local server: `http://localhost:8000`

## 🌍 Language Support

The website supports two languages:
- **English** (default)
- **Hungarian**

Language preference is automatically saved and restored on subsequent visits.

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Large Desktop**: > 1024px

## 🎨 Design System

### Colors
- **Primary**: #f44336 (Red)
- **Background**: Linear gradients (#0f0f0f to #1a1a1a)
- **Text**: #fff (White), #ccc (Light gray)
- **Accent**: Various red shades

### Typography
- **Font Family**: Inter, Segoe UI, Arial
- **Headings**: 800 weight, gradient text effects
- **Body**: 400-500 weight, optimized line-height

## 🔧 Development

### File Upload Feature
- Accepts: `.dwg`, `.dxf`, `.svg`, `.pdf`
- Drag & drop support
- File size and type validation
- Visual feedback for user actions

### Contact Form
- Form validation
- Loading states with animations
- Success/error messaging
- Multilingual form labels

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to repository Settings
3. Navigate to Pages section
4. Select source branch (main/master)
5. Website will be available at `https://yourusername.github.io/cutpart-website`

### Netlify
1. Connect GitHub repository
2. Build settings: None (static site)
3. Publish directory: `/` (root)
4. Auto-deploy on push

### Vercel
1. Import GitHub repository
2. Framework preset: Other
3. Build command: None
4. Output directory: `/`

## 📄 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website**: [cutpart.com](https://cutpart.com)
- **Email**: info@cutpart.com
- **GitHub**: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Modern CSS techniques and animations
- Responsive design best practices
- Accessibility considerations
- Performance optimization

---

**Built with ❤️ for precision laser cutting services**
