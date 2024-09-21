# Personal Website

## Description
![preview image](public/icons/desc.png)
Welcome to my personal website! Here you can find information about me, my projects, and my professional experiences.

## Table of Contents
- [Getting Started](#getting-started)
- [How to Start the App](#how-to-start-the-app)
- [How to Deploy](#how-to-deploy)

## Getting Started
To get a local copy up and running, follow these simple steps.

### Prerequisites
- [Node.js](https://nodejs.org/)

### Installing
1. Clone the repository:
   ```bash
   git clone https://github.com/Fung1117/Fung1117.github.io
   ```
2. Navigate to the project directory:
   ```bash
   cd Fung1117.github.io
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
   
## How to Start the App
To start the app in development mode, run:
```bash
npm start
```
This will launch the app in your default web browser. The app will reload if you make edits.

## How to Deploy
To deploy the app to GitHub Pages, follow these steps:

1. First, make sure you have the `gh-pages` package installed:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Add the following properties to your `package.json` file:
   ```json
   "homepage": "https://Fung1117.github.io/Fung1117"
   ```

3. Add the following scripts to the `scripts` section of your `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```

4. Now, you can deploy your app by running:
   ```bash
   npm run deploy
   ```
