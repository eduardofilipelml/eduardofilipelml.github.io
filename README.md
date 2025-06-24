# Portfolio Site - Modular Structure

This portfolio has been restructured into a modular system for better maintainability and organization.

## Project Structure

```
├── index.html (main file)
├── components/
│   ├── navigation.html
│   ├── hero.html        # Hero + About merged
│   ├── experience.html  # Professional Journey (Experience + Education merged)
│   ├── portfolio.html
│   ├── contact.html
│   └── footer.html
├── css/
│   ├── base.css (common styles and variables)
│   └── components/
│       ├── navigation.css
│       ├── hero.css
│       ├── experience.css
│       ├── portfolio.css
│       ├── contact.css
│       └── footer.css
└── js/
    ├── component-loader.js (handles dynamic loading)
    └── main.js (main JavaScript functionality)
```

## How It Works

### Component Loading
The `component-loader.js` script dynamically loads HTML components into designated containers when the page loads. Each section is now:

1. **Separated into its own HTML file** in the `components/` directory
2. **Has its own CSS file** in the `css/components/` directory
3. **Loaded dynamically** into the main page

### CSS Architecture
- `base.css` contains common styles, CSS variables, and utility classes
- Each component has its own CSS file with component-specific styles
- CSS variables ensure consistent theming across all components

### Benefits

1. **Maintainability**: Each section can be edited independently
2. **Reusability**: Components can be easily reused or rearranged
3. **Organization**: Clear separation of concerns
4. **Performance**: Modular CSS allows for better caching
5. **Development**: Easier to work on specific sections without affecting others

## Usage

### Development Mode
Use `index-modular.html` for the new modular structure:
```html
<!-- Load the modular version -->
http://localhost/index-modular.html
```

### Editing Components
1. **HTML Content**: Edit files in `components/` directory
2. **Styling**: Edit corresponding CSS files in `css/components/` directory
3. **Common Styles**: Edit `css/base.css` for site-wide changes

### Adding New Components
1. Create HTML file in `components/` directory
2. Create CSS file in `css/components/` directory
3. Add component to `component-loader.js`
4. Add CSS link to main HTML file
5. Add container div to main HTML file

## CSS Variables (Theming)

Located in `css/base.css`:
```css
:root {
    --primary-color: #007bff;
    --accent-color: #6f42c1;
    --text-color: #333;
    --text-light: #666;
    --background-color: #ffffff;
    --section-padding: 5rem 0;
}
```

## Component Structure

Each component follows this pattern:
- **HTML**: Contains the markup for the section
- **CSS**: Contains styles specific to that component
- **Responsive**: Mobile-first responsive design
- **Accessible**: Semantic HTML and ARIA labels where appropriate


## Browser Compatibility

The modular loading system uses:
- ES6 async/await
- Fetch API
- Modern CSS features

Supports all modern browsers. For IE11 support, polyfills would be needed.
