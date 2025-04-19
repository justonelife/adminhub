# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Project Structure

Below is an overview of the key folders and files in this repo:

```plaintext
src
├── assets                # Static assets (images, icons, global styles)
│   ├── images
│   ├── icons
│   └── styles
│       ├── global.scss        # Global styles (reset, typography, variables)
│       ├── _variables.scss    # Variables (colors, font sizes, breakpoints)
│       └── _mixins.scss       # Reusable SCSS mixins
├── components            # Reusable UI components
│   ├── Button
│   │   ├── Button.js
│   │   └── Button.module.css  # CSS Module for Button
│   └── Input
│       ├── Input.js
│       └── Input.module.css   # CSS Module for Input
├── pages                 # Application pages or screens
│   ├── Home
│   │   ├── Home.js
│   │   └── Home.module.css
│   └── About
│       ├── About.js
│       └── About.module.css
├── services              # API calls and service functions
│   └── api.js
├── store                 # Global state management (Redux or Context)
│   ├── actions
│   ├── reducers
│   └── store.js             # Store configuration
├── hooks                 # Custom React hooks
│   ├── useAuth.js           # Authentication hook
│   └── useFetch.js          # Data fetching hook
├── utils                 # Utility functions
│   ├── formatDate.js        # Date formatting
│   └── validateInput.js     # Input validation
├── App.js                # Root application component
├── index.js              # Entry point (renders App)
├── setupTests.js         # Test setup (Jest / React Testing Library)
├── .env                  # Environment variables (e.g., API_URL)
├── .gitignore            # Git ignore rules
├── package.json          # Project dependencies & scripts
└── README.md             # Project documentation
```
