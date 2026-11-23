# 📝 TextUtils

[![React](https://img.shields.io/badge/React-19.2.7-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7.18.1-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-222222?style=for-the-badge&logo=github)](https://alaqmar-yousuf.github.io/textutils/)

> **TextUtils** is a fast, responsive, and intuitive single-page web utility application designed to analyze, clean, and transform text effortlessly. Built with **React 19** and styled using **Bootstrap 5**, it provides real-time text metrics, case manipulation, spacing formatting, and theme toggling.

---

## 🌐 Live Demo

Experience the live application here:  
👉 **[Launch TextUtils on GitHub Pages](https://alaqmar-yousuf.github.io/textutils/)**

---

## ✨ Key Features

- 🔠 **Case Conversion**
  - Instant one-click transformation to **UPPERCASE** and **lowercase**.
- ✂️ **Whitespace Cleaner**
  - Automatically identifies and removes extra consecutive spaces with a clean join.
- 📋 **Copy to Clipboard**
  - Seamlessly copies processed text into the system clipboard using the modern Clipboard API.
- 🗑️ **One-Click Clear**
  - Resets the input buffer immediately for new text input.
- 📊 **Real-time Metrics & Analytics**
  - **Word Counter**: Accurate word count filtering out empty space splits.
  - **Character Counter**: Real-time total character length tracker.
  - **Reading Time Estimator**: Dynamically calculates estimated reading duration in minutes.
- 👀 **Live Text Preview**
  - Real-time preview panel to inspect formatted text before export.
- 🌓 **Dark Mode / Light Mode**
  - Integrated theme toggle for comfortable day and night reading/writing sessions.
- 🔔 **Contextual Alerts**
  - Self-dismissing toast alerts notifying users of actions (text copied, mode switched, text cleared, etc.).
- 🧭 **Client-Side Routing**
  - Powered by React Router for smooth navigation between the Text Analyzer and the About page without page reloads.
- 📱 **Mobile-First & Responsive**
  - Built with Bootstrap 5 grid and components, looking great on mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Core UI library with modern hooks (`useState`) |
| **[React Router DOM v7](https://reactrouter.com/)** | Client-side routing (`BrowserRouter`, `Routes`, `Route`, `Link`) |
| **[Bootstrap 5](https://getbootstrap.com/)** | Responsive layout, modern UI components, and theme styling |
| **[gh-pages](https://www.npmjs.com/package/gh-pages)** | Automated deployment pipeline to GitHub Pages |
| **[Create React App](https://create-react-app.dev/)** | Tooling and build configuration |

---

## 📂 Project Structure

```text
textutils/
├── public/
│   ├── favicon.ico             # Application favicon
│   ├── index.html              # HTML template with Bootstrap 5 CDN
│   ├── manifest.json           # Web app manifest
│   └── robots.txt              # Search engine crawler instructions
├── src/
│   ├── components/
│   │   ├── About.js            # Accordion-based About page & feature list
│   │   ├── Alert.js            # Dismissible floating alert component
│   │   ├── Navbar.js           # Navigation bar with dark mode toggle
│   │   └── TextForm.js         # Core text processing, manipulation & statistics
│   ├── App.css                 # Application-wide styling
│   ├── App.js                  # Root component, theme state & routing setup
│   ├── App.test.js             # Unit test suite
│   ├── index.css               # Global base styles
│   ├── index.js                # React DOM root entry point
│   └── reportWebVitals.js      # Performance measuring utilities
├── package.json                # Dependencies and npm scripts
└── README.md                   # Project documentation
```

---

## 🧩 Component Architecture

- **`App.js`**: Houses global application states (`mode`, `alert`), mode toggle logic, alert timeouts, and router routes.
- **`Navbar.js`**: Reusable navigation header featuring brand links, route navigation (`/` and `/about`), and a toggle switch for Dark Mode.
- **`TextForm.js`**: The main workspace component with input handling, utility action buttons (Upper, Lower, Clear, Copy, Spaces), live summary counters, and preview.
- **`Alert.js`**: Fixed-height notification banner rendering success/info messages that auto-dismiss after 1.5 seconds.
- **`About.js`**: Collapsible Bootstrap accordion detailing project background, mission, and feature breakdown.

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed:
- Node.js (version `>= 16.x` recommended)
- npm (bundled with Node.js) or yarn / pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Alaqmar-Yousuf/textutils.git
   cd textutils
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm start
   ```

4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📜 Available Scripts

In the project root, you can execute the following scripts:

| Command | Description |
| :--- | :--- |
| `npm start` | Runs the app in development mode with hot-reloading at `http://localhost:3000` |
| `npm test` | Launches the interactive Jest test runner |
| `npm run build` | Bundles and minifies the app for production in the `build/` folder |
| `npm run deploy` | Builds the production bundle and publishes it directly to the `gh-pages` branch |
| `npm run eject` | Copies build configurations and scripts into the app (**one-way action**) |

---

## 🚢 Deployment

This project is configured for one-command deployment to **GitHub Pages**:

```bash
npm run deploy
```

This runs `npm run build` (via `predeploy`) and then pushes the generated `build` directory to your repository's `gh-pages` branch using the `gh-pages` package.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the [MIT](LICENSE) License.

---

## 👨‍💻 Author

**Alaqmar Yousuf**
- GitHub: [@Alaqmar-Yousuf](https://github.com/Alaqmar-Yousuf)

⭐ If you found this project helpful, please consider giving it a star on [GitHub](https://github.com/Alaqmar-Yousuf/textutils)!
