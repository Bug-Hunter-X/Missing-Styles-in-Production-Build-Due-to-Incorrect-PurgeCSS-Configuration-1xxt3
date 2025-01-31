The solution involves correctly configuring PurgeCSS to include all necessary files and classes.

Here's an example of a refined `tailwind.config.js` (or equivalent) file for Next.js:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@my-org/my-component/**/*.{js,ts,jsx,tsx}' //Add any other external components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Explanation:**

* The `content` array explicitly lists directories where Tailwind CSS classes are used.  Adding any external component directories in the content array is crucial, this frequently fixes the issue.
* Ensure that all components and pages are included in the `content` array.
* If you're using a custom component library, make sure to add its path to `content`. 

By thoroughly specifying the source files, PurgeCSS accurately identifies and retains only the classes that are actually used, preventing the accidental removal of necessary styles in the production build. After making these changes, run `npm run build` again.