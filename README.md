# Project Overview

This project is a modern, responsive React application designed to showcase a university's programs, campus, testimonials, and contact information. The application features a clean and intuitive user interface with smooth scrolling, interactive elements, and a video player. Key components include a hero section, about section, campus gallery, programs, testimonials, and a contact form. The design is mobile-friendly, with consistent styling and reusable components for maintainability and scalability.

## ![Screenshot](screenshot.png)

### **Documentation of CSS Files**

This documentation highlights the techniques, patterns, and recurring practices used in the CSS files for your React project. The goal is to provide a clear reference for the design patterns and approaches employed, making it easier to reuse and maintain the code.

---

### **General Patterns and Techniques**

1. **Responsive Design with Media Queries**
   - Media queries are consistently used to ensure responsiveness across different screen sizes.
   - Common breakpoints include `max-width: 650px`, `max-width: 800px`, and `max-width: 1000px`.
   - Techniques include adjusting font sizes, changing flex directions, and modifying layouts for smaller screens.
2. **Flexbox for Layouts**
   - Flexbox is the primary layout tool, ensuring flexible and responsive designs.
   - Common properties:
     - `display: flex`
     - `justify-content: space-between` (for spacing items evenly)
     - `align-items: center` (for vertical alignment)
     - `flex-direction: column` (for stacking items vertically on smaller screens).
3. **Positioning Techniques**
   - Absolute positioning is used for elements like icons or overlays (e.g., `.about-icon`, `.caption`).
   - `position: fixed` is used for sticky elements like the navbar (`.dark-nav`).
4. **Hover Effects and Transitions**
   - Hover effects are consistently applied to improve interactivity.
   - Common properties:
     - `transform: scale()` for scaling elements.
     - `transition` for smooth animations (e.g., `transition: 0.5s`).
     - `opacity` changes for fade-in effects.
5. **Reusable Utility Classes**
   - Classes like `.btn` and `.container` are defined in `index.css` and reused across components.
   - These classes follow a consistent design system (e.g., padding, border-radius, and font sizes).
6. **Consistent Color Scheme**
   - Colors like `#212ea0`, `#000f38`, and `#676767` are reused across components for consistency.
   - Background gradients are used for visual appeal (e.g., `.hero`).
7. **Image Handling**
   - Images are styled with `border-radius` for rounded corners.
   - Hover effects like scaling (`transform: scale(1.1)`) are applied to images for interactivity.
8. **Z-Index for Layering**
   - `z-index` is used to manage overlapping elements (e.g., `.video-player`, `.dark-nav`).

---

### **Component-Specific Documentation**

1. **About Component (`About.css`)**
   - **Techniques:**
     - Flexbox layout with `justify-content: space-between` for spacing.
     - Absolute positioning for the `.about-icon` to center it over the image.
     - Media queries adjust the layout to a column on smaller screens.
   - **Patterns:**
     - Consistent use of `max-width` for text containers.
     - Hover effect on `.about-icon` with a smooth transition.
2. **Campus Component (`Campus.css`)**
   - **Techniques:**
     - Flexbox for the `.gallery` to align images horizontally.
     - Hover effect on images with `transform: scale(1.1)`.
   - **Patterns:**
     - Media queries adjust the gallery to wrap images on smaller screens.
3. **Contact Component (`Contact.css`)**
   - **Techniques:**
     - Flexbox layout with `align-items: flex-start`.
     - Styled form inputs and textareas with consistent padding and border-radius.
     - Hover effect on the submit button.
   - **Patterns:**
     - Media queries stack the form columns vertically on smaller screens.
4. **Footer Component (`Footer.css`)**
   - **Techniques:**
     - Flexbox for aligning items horizontally.
     - Media queries adjust the layout to a column on smaller screens.
   - **Patterns:**
     - Consistent use of `margin` and `padding` for spacing.
5. **Hero Component (`Hero.css`)**
   - **Techniques:**
     - Full-screen background with a gradient overlay.
     - Centered text using `text-align: center` and flexbox.
   - **Patterns:**
     - Media queries adjust font sizes for smaller screens.
6. **Navbar Component (`Navbar.css`)**
   - **Techniques:**
     - Fixed positioning for the navbar.
     - Flexbox for aligning logo and menu items.
     - Media queries hide the desktop menu and show a mobile menu icon.
   - **Patterns:**
     - Consistent use of `z-index` for layering.
7. **Programs Component (`Programs.css`)**
   - **Techniques:**
     - Flexbox for aligning program cards.
     - Absolute positioning for the `.caption` overlay.
     - Hover effect to reveal the caption.
   - **Patterns:**
     - Media queries stack program cards vertically on smaller screens.
8. **Testimonials Component (`Testimonials.css`)**
   - **Techniques:**
     - Flexbox for the slider layout.
     - Absolute positioning for navigation buttons.
     - Smooth transitions for sliding effects.
   - **Patterns:**
     - Media queries adjust padding and font sizes for smaller screens.
9. **Title Component (`Title.css`)**
   - **Techniques:**
     - Centered text with `text-align: center`.
     - Consistent typography styles.
   - **Patterns:**
     - Reusable styles for headings and subtitles.
10. **VideoPlayer Component (`VideoPlayer.css`)**
    - **Techniques:**
      - Fixed positioning for full-screen overlay.
      - Flexbox for centering the video.
      - Smooth transitions for showing/hiding the player.
    - **Patterns:**
      - Consistent use of `opacity` and `pointer-events` for visibility toggling.

---

### **Global Styles (`index.css`)**

- **Techniques:**
  - Reset default styles with `margin: 0`, `padding: 0`, and `box-sizing: border-box`.
  - Import and use the "Outfit" font from Google Fonts.
  - Define reusable utility classes like `.btn` and `.container`.
- **Patterns:**
  - Consistent padding and font sizes for buttons.
  - Media queries adjust container padding for smaller screens.

---

### **Recurring Patterns**

1. **Flexbox Layouts:**
   - Used in almost every component for alignment and spacing.
   - Common properties: `display: flex`, `justify-content`, `align-items`.
2. **Media Queries:**
   - Breakpoints at `650px`, `800px`, and `1000px` are consistently used.
   - Adjustments include font sizes, flex directions, and padding.
3. **Hover Effects:**
   - Applied to buttons, images, and icons for interactivity.
   - Common effects: scaling, color changes, and opacity transitions.
4. **Reusable Classes:**
   - `.btn`, `.container`, and `.title` are reused across components.
   - Ensures consistency in design and reduces redundancy.
5. **Absolute Positioning:**
   - Used for overlays, icons, and navigation buttons.
   - Ensures precise placement of elements.

---

### **Suggestions for Improvement**

1. **CSS Variables:**
   - Define reusable variables for colors, font sizes, and breakpoints to improve maintainability.
   - Example:
     css
     Copy
     ```
     :root {
       --primary-color: #212ea0;
       --secondary-color: #000f38;
       --font-size-lg: 32px;
       --font-size-md: 16px;
     }
     ```
2. **Modular CSS:**
   - Consider using CSS modules or a utility-first framework like Tailwind CSS for better scalability.
3. **Animation Library:**
   - Explore libraries like Framer Motion or Animate.css for more advanced animations.

---

### **Documentation of JSX Files**

This documentation outlines the techniques, patterns, and recurring practices used in the JSX files for your React project. The goal is to highlight the consistent approaches and design patterns you employ, making it easier to reference and reuse them in future projects.

---

### **General Patterns and Techniques**

1. **Component Structure**
   - Each component is modular and follows a consistent structure:
     - Importing necessary dependencies (CSS, images, hooks, etc.).
     - Defining the component function.
     - Returning JSX with a clear and organized layout.
     - Exporting the component.
2. **Props and State Management**
   - Props are used to pass data between components (e.g., `setPlayVideo` in `About.jsx`).
   - State is managed using the `useState` hook for dynamic behavior (e.g., `playVideo` in `App.jsx`).
   - `useEffect` is used for side effects like event listeners or logging state changes.
3. **Event Handling**
   - Event handlers are defined within components (e.g., `handlePlayIconClick` in `About.jsx`).
   - Common events include `onClick`, `onSubmit`, and `onChange`.
4. **Reusable Components**
   - Components like `Title` and `Button` are reused across the application.
   - Props are used to customize their content and behavior.
5. **Dynamic Rendering**
   - Conditional rendering is used to show/hide elements (e.g., `VideoPlayer` visibility based on `playVideo` state).
   - Lists are rendered dynamically using arrays and `.map()` (e.g., testimonials or programs).
6. **React Router and Scroll Behavior**
   - The `react-scroll` library is used for smooth scrolling to sections (e.g., `Hero.jsx` and `Navbar.jsx`).
   - Links are configured with `offset`, `duration`, and `smooth` props for better UX.
7. **Image and Asset Handling**
   - Images are imported and used dynamically in components.
   - Icons and buttons often include images for visual appeal.
8. **Form Handling**
   - Forms are managed using `useState` and `onSubmit` handlers (e.g., `Contact.jsx`).
   - External APIs (e.g., Web3Forms) are used for form submissions.

---

### **Component-Specific Documentation**

1. **About Component (`About.jsx`)**
   - **Techniques:**
     - Uses `setPlayVideo` prop to control video player visibility.
     - Event handler `handlePlayIconClick` triggers video playback.
   - **Patterns:**
     - Consistent use of imported images and CSS classes.
     - Structured layout with left and right sections.
2. **Campus Component (`Campus.jsx`)**
   - **Techniques:**
     - Displays a gallery of images using a simple layout.
     - Includes a reusable button with an icon.
   - **Patterns:**
     - Consistent use of imported images and CSS classes.
3. **Contact Component (`Contact.jsx`)**
   - **Techniques:**
     - Manages form state and submission using `useState` and `onSubmit`.
     - Integrates with Web3Forms API for form handling.
   - **Patterns:**
     - Structured layout with contact information and form sections.
     - Reusable button with an icon.
4. **Footer Component (`Footer.jsx`)**
   - **Techniques:**
     - Simple layout with text and links.
   - **Patterns:**
     - Consistent use of CSS classes for styling.
5. **Hero Component (`Hero.jsx`)**
   - **Techniques:**
     - Uses `react-scroll` for smooth navigation to other sections.
     - Includes a reusable button with an icon.
   - **Patterns:**
     - Centered text and background image for a hero section.
6. **Navbar Component (`Navbar.jsx`)**
   - **Techniques:**
     - Toggles mobile menu visibility using `useState`.
     - Uses `react-scroll` for smooth navigation.
     - Changes navbar style on scroll using `useEffect`.
   - **Patterns:**
     - Consistent use of CSS classes for responsive design.
7. **Programs Component (`Programs.jsx`)**
   - **Techniques:**
     - Displays program cards with hover effects.
   - **Patterns:**
     - Consistent use of imported images and CSS classes.
8. **Testimonials Component (`Testimonials.jsx`)**
   - **Techniques:**
     - Implements a slider using `useRef` and transform properties.
     - Includes navigation buttons for sliding.
   - **Patterns:**
     - Dynamic rendering of testimonials using a list.
9. **Title Component (`Title.jsx`)**
   - **Techniques:**
     - Reusable component for section titles.
   - **Patterns:**
     - Props are used to customize the title and subtitle.
10. **VideoPlayer Component (`VideoPlayer.jsx`)**
    - **Techniques:**
      - Controls visibility using `playVideo` and `setPlayVideo` props.
      - Uses `useEffect` for logging state changes.
    - **Patterns:**
      - Conditional rendering based on `playVideo` state.

---

### **App Component (`App.jsx`)**

- **Techniques:**
  - Manages global state (`playVideo`) for video player visibility.
  - Uses `useEffect` to log state changes.
  - Renders all components in a structured layout.
- **Patterns:**
  - Consistent use of reusable components like `Title`.

---

### **Recurring Patterns**

1. **Modular Components:**
   - Each component is self-contained and reusable.
   - Props are used for customization.
2. **State and Event Handling:**
   - `useState` and `useEffect` are used consistently for dynamic behavior.
   - Event handlers are defined within components.
3. **Responsive Design:**
   - Components are styled using CSS classes for responsiveness.
   - Media queries are used in CSS files for smaller screens.
4. **Reusable Elements:**
   - Buttons, titles, and icons are reused across components.
   - Props are used to customize their content and behavior.
5. **External Integrations:**
   - APIs (e.g., Web3Forms) are used for form submissions.
   - Libraries (e.g., `react-scroll`) enhance user experience.

---

### **Suggestions for Improvement**

1. **State Management Library:**
   - Consider using a state management library like Redux or Context API for global state (e.g., `playVideo`).
2. **Component Composition:**
   - Break down larger components into smaller, more reusable ones.
3. **Error Handling:**
   - Add error handling for API requests (e.g., form submissions).
4. **Accessibility:**
   - Ensure all interactive elements (e.g., buttons, forms) are accessible.
5. **Testing:**
   - Write unit tests for components using libraries like Jest and React Testing Library.
