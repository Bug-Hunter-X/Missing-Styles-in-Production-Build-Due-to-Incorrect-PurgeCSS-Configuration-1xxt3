# Missing Tailwind Styles in Production Build

This repository demonstrates a common issue encountered when using Tailwind CSS with frameworks like Next.js and Nuxt.js: missing or incorrect styles in the production build due to problems with PurgeCSS.

The problem arises because the PurgeCSS configuration might not be correctly identifying and preserving all the necessary CSS classes used in the application.  This often happens after refactoring components or updating dependencies.

This example showcases the issue and provides a solution by improving PurgeCSS configuration to include all relevant classes, resolving the missing style issue.

## Reproducing the Issue

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev` to start the development server (styles will work). 
4. Run `npm run build` to build the production version.
5. Observe that some styles are missing in the production build.

## Solution

The solution lies in refining the PurgeCSS configuration within your framework's build process. Often, explicitly including all needed files helps to prevent the purge process from removing important CSS classes.