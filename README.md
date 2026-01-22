# Mohtawa - Static HTML5 Website

A pure HTML5, CSS3, and vanilla JavaScript website for Mohtawa Digital Marketing Agency.

## 📁 Project Structure

```
mohtawa-html5/
├── index.html              # Homepage
├── pages/
│   ├── services.html       # Services page
│   ├── team.html           # Team page
│   ├── portfolio.html      # Portfolio page
│   └── contact.html        # Contact page
├── css/
│   └── styles.css          # Main stylesheet (external CSS)
├── js/
│   └── script.js           # Vanilla JavaScript
├── images/
│   ├── hero-digital-marketing.jpg
│   ├── services-background.jpg
│   └── team-collaboration.jpg
└── README.md               # This file
```

## 🚀 Getting Started

### Option 1: Local Development
1. Extract the files to your desired location
2. Open `index.html` in your web browser
3. Navigate using the menu links

### Option 2: Using a Local Server
For better performance and to avoid CORS issues, use a local server:

**Python 3:**
```bash
cd mohtawa-html5
python3 -m http.server 8000
```

**Python 2:**
```bash
cd mohtawa-html5
python -m SimpleHTTPServer 8000
```

**Node.js (with http-server):**
```bash
npm install -g http-server
cd mohtawa-html5
http-server
```

Then open `http://localhost:8000` in your browser.

## 📄 Pages

- **index.html** - Homepage with hero section, about, mission & vision, services preview, team preview, portfolio preview, testimonials, and contact CTA
- **pages/services.html** - Complete services listing with detailed descriptions
- **pages/team.html** - Full team directory with member profiles and team values
- **pages/portfolio.html** - Portfolio showcase with project case studies
- **pages/contact.html** - Contact form and contact information

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach, works on all screen sizes
- **Modern Aesthetic**: Tech-forward minimalism with Mohtawa brand colors
- **Brand Colors**: 
  - Primary Purple: #6B4C9A
  - Cyan Accent: #00D9FF
  - Light Background: #F8F9FA
- **Typography**: 
  - Display Font: Playfair Display (headings)
  - Body Font: Poppins (text)
- **Smooth Animations**: Fade-in effects and hover transitions
- **Accessibility**: Semantic HTML, proper color contrast, keyboard navigation

## 🔧 Customization

### Updating Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
  --mohtawa-purple: #6B4C9A;
  --mohtawa-cyan: #00D9FF;
  --mohtawa-light: #F8F9FA;
  /* ... more variables ... */
}
```

### Updating Content
Simply edit the HTML files directly. All content is in plain HTML with no build process required.

### Adding New Pages
1. Create a new `.html` file in the `pages/` folder
2. Copy the navigation and footer from an existing page
3. Update the links in the navigation to include your new page
4. Add the page link to the navigation in all other files

### Updating Images
Replace images in the `images/` folder and update the `src` attributes in the HTML files.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ✨ Features

- ✅ Fully responsive design
- ✅ No build process required
- ✅ No dependencies or npm packages
- ✅ Fast loading times
- ✅ SEO-friendly structure
- ✅ Smooth scroll behavior
- ✅ Form validation
- ✅ Intersection observer animations
- ✅ Keyboard navigation support

## 📞 Contact Information

**Mohtawa Digital Marketing Agency**
- Phone: +966 594420917
- Email: info@mohtawa.sa
- Location: Building No. 3827, Al Saif Al Amadi Street, Riyadh, KSA

## 📝 License

© 2024 Mohtawa. All rights reserved.

## 🤝 Support

For questions or issues, contact info@mohtawa.sa

---

**Note**: This is a static HTML5 website with no backend. The contact form is functional for validation and display, but currently logs data to the browser console. To enable email notifications, you would need to integrate with a backend service or email API.
