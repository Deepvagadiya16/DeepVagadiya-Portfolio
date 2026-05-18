# Deep Vagadiya Portfolio

A modern personal portfolio built with React, Vite, Tailwind CSS, and Lucide React icons. The site presents Deep Vagadiya as a Computer Science student through a polished landing page, animated sections, 3D photo cards, project showcases, skills, and a contact form.

## Main Features

- Responsive portfolio layout with dark glassmorphism styling
- Mouse-follow spotlight background
- Sticky navigation bar with scroll styling
- Hero section with quick academic context cards
- Scalable architecture / ecosystem grid
- About section with academic timeline
- Interactive 3D hover photo cards
- Categorized technical skills section
- Project showcase for Fixit, NetPulse WiFi, and Python Simulation Game
- Contact form with React state and success message
- Footer with social links

## Tech Stack

- React
- Vite
- Tailwind CSS
- Lucide React
- ESLint

## Project Structure

```text
PORTFOLIO/
|-- public/
|   |-- favicon.svg
|   |-- icons.svg
|   |-- 777A1840.jpg
|   `-- IMG-20260510-WA0102(1).jpg
|-- src/
|   |-- App.jsx
|   |-- App.css
|   |-- index.css
|   |-- main.jsx
|   |-- image.jsx
|   `-- components/
|       |-- GlassCard.jsx
|       |-- SectionHeading.jsx
|       |-- SmoothScroll.jsx
|       |-- StaggeredGrid.jsx
|       `-- TestimonialsCard.jsx
|-- index.html
|-- package.json
|-- tailwind.config.js
|-- postcss.config.js
`-- vite.config.js
```

## Important Files

`src/main.jsx`

This is the React entry point. It mounts the main `App` component inside the `root` element from `index.html`.

`src/App.jsx`

This is the main portfolio page. It contains the current full UI, including:

- `CardContainer`, `CardBody`, and `CardItem` for the 3D hover photo effect
- `SmoothScroll` wrapper
- `GlassCard` reusable card container
- `SectionHeading` reusable section title component
- `StaggeredGrid` ecosystem grid
- Main sections: home, ecosystem, about, photos, skills, projects, contact, footer
- React state for mouse position, navbar scroll state, and contact form submission

`src/index.css`

This file loads Tailwind CSS and global styles such as fonts, scrollbar styling, body background, and smooth scrolling.

`package.json`

This file contains project dependencies and execution scripts.

## Photo Setup

The 3D photo gallery expects these two image files inside the `public/` folder:

```text
public/777A1840.jpg
public/IMG-20260510-WA0102(1).jpg
```

If these files are missing, the app still runs because a fallback image is used. To show your real photos, add the files with the exact names above.

## How To Run The Project

### Step 1: Open The Project Folder

```powershell
cd "c:\Users\Deep\OneDrive\Desktop\Porfolio\PORTFOLIO"
```

### Step 2: Install Dependencies

Run this command once after downloading or cloning the project:

```bash
npm install
```

### Step 3: Start Development Server

```bash
npm run dev
```

After running this command, Vite will show a local URL like:

```text
http://localhost:5173/
```

Open that URL in your browser.

### Step 4: Build For Production

```bash
npm run build
```

This creates the production-ready files inside the `dist/` folder.

### Step 5: Preview Production Build

Run this after `npm run build`:

```bash
npm run preview
```

Then open the preview URL shown in the terminal.

### Step 6: Run Lint Check

```bash
npm run lint
```

This checks JavaScript and JSX files for code quality issues.

## Available Commands

```bash
npm install
```

Installs all required dependencies.

```bash
npm run dev
```

Starts the local development server with hot reload.

```bash
npm run build
```

Builds the app for production.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint on the project files.

## Code Explanation

### 3D Card Logic

The 3D photo cards use three helper components in `src/App.jsx`:

- `CardContainer` tracks mouse movement and rotates the card.
- `CardBody` preserves the 3D transform space.
- `CardItem` moves each child element forward on hover using `translateZ`.

This creates the layered hover effect in the photo section.

### Mouse Glow Background

The app stores the mouse position in React state:

```jsx
const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
```

The position is used to move a radial gradient behind the page.

### Sticky Navbar

The navbar changes style after scrolling more than 50 pixels:

```jsx
const handleScroll = () => setIsScrolled(window.scrollY > 50);
```

When `isScrolled` is true, the navbar gets a blurred dark background and border.

### Contact Form

The form uses React state:

```jsx
const [formState, setFormState] = useState({
  name: '',
  email: '',
  message: '',
});
```

When the form is submitted, it shows a success message for 4 seconds and then clears the form.

## Deployment Notes

For deployment, run:

```bash
npm run build
```

Then deploy the generated `dist/` folder to a hosting platform such as Vercel, Netlify, Render, or GitHub Pages.

## Author

Deep Vagadiya  
Computer Science Student  
Birla Vishvakarma Mahavidyalaya, Gujarat, India
