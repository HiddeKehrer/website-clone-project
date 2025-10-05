---
title: React Native Installation Guide
tags: [react-native, installation]
---

## Getting Started with PipeGuru for React Native

This guide will walk you through the steps to integrate PipeGuru into your React Native application.

### 1. Install the Package

Install the PipeGuru package using npm or yarn.

```bash
npm install pipeguru-react-native
# or
yarn add pipeguru-react-native
```

### 2. Link Native Dependencies (for older RN versions)

If you are using an older version of React Native, you might need to link the native modules.

```bash
npx react-native link pipeguru-react-native
```

### 3. Initialize PipeGuru

In your main `App.js` or `index.js` file, import and initialize PipeGuru.

```javascript
import PipeGuru from 'pipeguru-react-native';

// Initialize PipeGuru with your API key
PipeGuru.initialize("YOUR_API_KEY");

// Your App component
const App = () => {
  // ...
};
```

That's it! You're now ready to use PipeGuru in your React Native project.
