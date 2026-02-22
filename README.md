# Asian Fashions - E-commerce Platform

Asia's Most Coolest Fashion Brand - A modern e-commerce platform built with React and cutting-edge web technologies.

## 🛍️ Project Overview

Asian Fashions is a full-featured e-commerce application that offers a seamless shopping experience with user authentication, product management, shopping cart functionality, and secure checkout processes. The platform showcases Asian fashion trends with a modern, responsive design.

## ✨ Features

### 🏠 **Customer Experience**
- **Home Page**: Dynamic landing page with featured products and promotions
- **Product Catalog**: Browse and search through extensive fashion collections
- **Product Details**: Detailed product pages with images, descriptions, and pricing
- **Shopping Cart**: Add/remove items, update quantities, and view cart summary
- **Category Navigation**: Filter products by categories
- **Search Functionality**: Advanced search to find specific products
- **User Authentication**: Secure registration, login, and password management
- **User Dashboard**: Profile management and order history
- **Secure Checkout**: Multi-step checkout process with payment integration

### 🛠️ **Admin Features**
- **Admin Panel**: Comprehensive dashboard for store management
- **Product Management**: Add, edit, and remove products
- **Order Management**: Track and manage customer orders
- **User Management**: Monitor and manage customer accounts

### 💳 **Payment Integration**
- **Google Pay Integration**: Seamless payment processing with Google Pay
- **Secure Transactions**: End-to-end encrypted payment processing

## 🏗️ Tech Stack

### **Frontend**
- **React 19.2.0** - Modern UI framework with latest features
- **Vite 7.2.4** - Fast development server and build tool
- **React Router 7.9.6** - Client-side routing
- **Redux Toolkit 2.11.2** - State management
- **React Redux 9.2.0** - React bindings for Redux

### **Backend & Database**
- **Supabase 2.89.0** - Backend-as-a-Service with PostgreSQL
- **Real-time Database** - Live data synchronization
- **Authentication** - Secure user management

### **UI & Styling**
- **Font Awesome 6.4.0** - Icon library
- **Google Fonts** - Montserrat & Playfair Display typography
- **Custom CSS** - Responsive design with modern styling

### **Development Tools**
- **ESLint 9.39.1** - Code linting and quality assurance
- **React Refresh** - Hot module replacement for development

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mocoecom
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPBASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
mocoecom/
├── public/                 # Static assets (images, icons)
├── src/
│   ├── Components/        # Reusable React components
│   │   ├── Cart/          # Shopping cart components
│   │   ├── Checkout/      # Checkout flow components
│   │   ├── Home/          # Homepage components
│   │   ├── admin/         # Admin panel components
│   │   ├── shop/          # Shop-related components
│   │   └── userDashboard/ # User dashboard components
│   ├── Database/          # Database configuration
│   │   └── supabase.js    # Supabase client setup
│   ├── Hooks/             # Custom React hooks
│   ├── Pages/             # Page components
│   │   ├── User/          # User authentication pages
│   │   ├── admin/         # Admin pages
│   │   └── ...            # Other page components
│   ├── store/             # Redux store configuration
│   │   ├── AuthSlice.js   # Authentication state
│   │   ├── CartSlice.js   # Shopping cart state
│   │   ├── cartThunk.js   # Cart async actions
│   │   └── store.js       # Main store configuration
│   ├── utils/             # Utility functions
│   ├── assets/            # Static assets
│   ├── css/               # Stylesheets
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── .env                   # Environment variables
├── .gitignore            # Git ignore rules
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML template
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## 🎯 Key Features Implementation

### **State Management**
- **Redux Toolkit** for efficient state management
- **AuthSlice** handles user authentication state
- **CartSlice** manages shopping cart functionality
- **Async thunks** for API calls and side effects

### **Routing**
- **React Router** for client-side navigation
- Protected routes for authenticated users
- Admin-only routes with role-based access

### **Database Integration**
- **Supabase** for real-time database operations
- User authentication and authorization
- Product and order management
- Real-time cart synchronization

### **Payment Processing**
- **Google Pay Button React** integration
- Secure payment flow
- Order confirmation and tracking

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🌐 Deployment

### **Production Build**
```bash
npm run build
```

### **Environment Variables for Production**
Ensure all environment variables are properly configured in your hosting environment:
- Supabase URL and Anonymous Key
- Any other third-party service credentials

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and inquiries, please contact the development team or create an issue in the repository.

---

**Built with ❤️ using React, Vite, and Supabase**
