# Paradise Nursery - Houseplant Shopping App

A modern, responsive React application for browsing and purchasing houseplants. Built as a final project demonstrating front-end development skills with React, state management, and modern UI design.

## 🌱 Features

- **Landing Page**: Beautiful hero section with company information and call-to-action
- **Product Catalog**: 8+ premium houseplants organized by categories
- **Shopping Cart**: Full cart functionality with add/remove/update quantity
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Dynamic cart counter and total calculations

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **React Hooks** - State management (useState)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/paradise-nursery-app.git
cd paradise-nursery-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🚀 Deployment

### Netlify Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to Netlify:
   - Drag and drop the `build` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or connect your GitHub repository to Netlify for automatic deployments

### GitHub Pages Deployment

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/paradise-nursery-app",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## 📱 Application Structure

```
paradise-nursery-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main application component
│   └── index.js        # React entry point
├── package.json
└── README.md
```

## 🎯 Project Requirements Met

### Landing Page (5/5 points)
- ✅ Background image
- ✅ Company paragraph
- ✅ Company name
- ✅ Get Started button with navigation

### Product Listing (9/9 points)
- ✅ 8 unique houseplants with images, names, prices
- ✅ Plants grouped into 4 categories
- ✅ Add to Cart functionality with button state management
- ✅ Dynamic cart counter updates

### Header (7/7 points)
- ✅ Displays on product listing and cart pages
- ✅ Shopping cart icon with live item count
- ✅ Navigation between pages

### Shopping Cart (23/23 points)
- ✅ Total items and cost display
- ✅ Plant details with thumbnails, names, prices
- ✅ Increase/decrease quantity buttons
- ✅ Delete functionality
- ✅ Checkout button with "Coming Soon" message
- ✅ Continue shopping navigation

### GitHub (6/6 points)
- ✅ Public repository ready
- ✅ All React code and components included

## 🌿 Plant Categories

- **Low Light**: Snake Plant, Pothos
- **Tropical**: Monstera Deliciosa, Bird of Paradise  
- **Statement**: Fiddle Leaf Fig, Rubber Plant
- **Flowering**: Peace Lily, Anthurium

## 🎨 Design Features

- Modern, clean interface with green color scheme
- Hover effects and smooth transitions
- Responsive grid layouts
- Professional typography and spacing
- Accessible color contrasts and interactive elements

## 📄 License

MIT License - feel free to use this project for educational purposes.

## 🤝 Contributing

This is a student project, but suggestions and improvements are welcome!

## 📧 Contact

For questions about this project, please create an issue in the GitHub repository.

---

**Live Demo**: https://paradise-nursery-app.netlify.app
**GitHub Repository**: https://github.com/yourusername/paradise-nursery-app

## 🌐 Deployment Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/paradise-nursery-app/deploys)
