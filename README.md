# 📰 Responsive News & Payout Dashboard
        A fully responsive dashboard application built with React.js and firebase.


## ✅ Features

### 1. 🔐 User Authentication
- Email/Password login using Firebase Authentication.
- Google OAuth integration for quick login.

### 2. 📰 News & Blog Data Integration
- Fetches articles from third-party APIs (e.g., News API, The Guardian).
- Displays detailed article metadata: `author`, `publish date`, and `type`.

### 3. 🔎 Filtering & Search
- Filter articles/blogs by:
  - Author
  - Date Range
  - Type (News / Blog)
- Global keyword search functionality.

### 4. 📱 Responsive Design
- Mobile-first UI built with **Tailwind CSS**.
- Compatible with phones, tablets, and desktops.

### 5. 💰 Payout Calculator
- Admin can define payout rates per article/blog.
- Payout configuration is stored in localStorage.
- Calculates total payouts based on article count and type.

### 6. 📤 Export Functionality
- Export payout reports as:
  - PDF
  - CSV
  - Google Sheets

### 7. 📊 News Analytics
- Graphical charts (bar, pie, or line) displaying:
  - Article trends by author
  - Distribution by type

### 8. 🧾 Payout Details Table
- Displays article counts and calculated payouts per author.
- Inline editing support for adjusting payout rates.

### 9. ⚠️ Error Handling
- Graceful error messages shown if API fails or no data is available.



## 📦 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/your-username/news-payout-dashboard.git
cd news-payout-dashboard

# Install dependencies
npm install

# Set up Firebase and API Keys in .env.local
cp .env.example .env.local
# Add Firebase config and API keys in .env.local

# Start the development server
npm run dev



















# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
