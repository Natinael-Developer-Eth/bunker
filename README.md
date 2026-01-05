# BUNKER Coffee Roaster - Digital Menu

<div align="center">
  <img src="public/logo.png" width="200" alt="Bunker Coffee Roaster Logo" />
  <br/>
  <br/>
  <img src="public/demo-mockup.png" width="100%" alt="Bunker Mobile Demo" />
</div>

<br/>

A premium, interactive digital menu application designed for **Bunker Coffee Roaster**. This project delivers a high-quality user experience with smooth animations, engaging visuals, and a modern aesthetic tailored to valid coffee culture.

## 🌟 Features

*   **Immersive UI/UX**: Custom-designed interface featuring Bunker's brand colors (Coffee Brown & Gold) and aesthetics.
*   **Dynamic Animations**:
    *   Smooth scrolling and parallax effects.
    *   Morphing logo animation for visual engagement.
    *   Marquee infinite scrolling text ("ENJOY YOUR COFFEE").
    *   Fade-in and slide-up reveals for menu items.
*   **Category Navigation**: Sticky navigation bar for easy access to different menu sections (Coffee, Iced, Tea, Mocktails, Dessert).
*   **Responsive Design**: Fully optimized for mobile devices, tablets, and desktop screens.
*   **Asset Management**: Efficient handling of dynamic imagery for menu items (e.g., Espresso).

## 🛠️ Technology Stack

*   **Framework**: [React](https://reactjs.org/) (v18)
*   **Build Tool**: [Vite](https://vitejs.dev/) - For lightning-fast development and building.
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) - For utility-first, responsive design.
*   **Language**: [TypeScript](https://www.typescriptlang.org/) - For type-safe code.
*   **Icons**: [Lucide React](https://lucide.dev/) - For crisp, vector icons.
*   **Animations**: Native CSS Keyframes & Transitions for performance.

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v16 or higher)
*   npm (comes with Node.js)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Natinael-Developer-Eth/-bunker-digital-menu.git
    cd -bunker-digital-menu
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    npm ci
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open the app**
    Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## 📱 Mobile Preview

To view on mobile devices on the same network:
1.  Find your machine's local IP address (e.g., `xxx.xxx.x.xxx`).
2.  Run `npm run dev -- --host`.
3.  Enter `http://YOUR_LOCAL_IP:5173` in your mobile browser.

## 📁 Project Structure

```
bunker-digital-menu/
├── public/              # Static assets (favicons, manifest, etc.)
├── src/
│   ├── assets/          # Project images and media
│   ├── components/      # Reusable React components
│   │   ├── menu/        # Specific components for the Menu feature
│   │   └── ui/          # Generic UI components (buttons, etc.)
│   ├── data/            # Static data files (menu items JSON/TS)
│   ├── lib/             # Utilities and helper functions
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles & Tailwind directives
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── tailwind.config.ts   # Tailwind CSS configuration
└── vite.config.ts       # Vite configuration
```

## 🎨 Customization

### Colors
The project uses a defined color palette in `src/index.css`:
*   **Primary**: Coffee Brown (HSL 29 45% 33%)
*   **Accent**: Gold (HSL 43 65% 45%)
*   **Background**: Cream (HSL 38 35% 91%)

### Menu Items
Edit `src/data/menuData.ts` to add, remove, or modify menu categories and items.

## 📄 License

All rights reserved © 2026 Bunker Coffee Roaster.

---

## 👨‍💻 Developed By

<div align="center">

| Profile 1 | Profile 2 |
| :---: | :---: |
| <img src="public/developer-1.jpg" width="180" alt="Natinael Profile 1" /> | <img src="public/developer-2.jpg" width="180" alt="Natinael Profile 2" /> |

### Natinael Eliyas
**Professional Full-Stack Developer & UI/UX Designer**

*Available for Web, Mobile App Development & Design Collaborations*

[![Contact on WhatsApp](https://img.shields.io/badge/WhatsApp-Contact%20Me-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/971568536334)

**+971 56 853 6334**

</div>
