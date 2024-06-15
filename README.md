<h3 align="center">
  Mov(i)e It - ReactJS
</h3>

<p align="center"></p>

<p align="center">
  <!-- <img alt="Project Top Language" src="https://img.shields.io/badge/98.2%25-yellow?style=for-the-badge&logo=javascript&label=JavaScript&labelColor=black"> -->
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/atthmew/movieit-react?style=for-the-badge">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/atthmew/movieit-react?style=for-the-badge">
  <img alt="Project Top Language" src="https://img.shields.io/github/last-commit/atthmew/movieit-react?style=for-the-badge">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/atthmew/movieit-react?style=for-the-badge">
</p>

<p align="center">
  <a href="#-about-the-project">About The Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;
  <br/>
  <br/>
  
  <!-- <img alt="Demo" src="https://github.com/eltonlazzarin/reactjs-rocketfy-app/blob/master/screenshot/demo.png" target="_blank"></img> -->
</p>

## 📱 About this Project

<p align="center">
<img alt="Discord logo" src="https://github.com/atthmew/movieit-react/blob/main/screenshots/movieit1.png" height="350px" width="400px" /> 
<img alt="Discord logo" src="https://github.com/atthmew/movieit-react/blob/main/screenshots/movieit2.png" height="350px" width="400px" /> 
<br/>
  <button>
    <a href="https://atthmew.github.io/movieit-react"> 
      <img alt="Mov(i)e-It" src="https://img.shields.io/badge/Mov(i)e It-white?style=for-the-badge&logo=YouTube&label=YouTube&labelColor=red"/>
    </a>
  </button>
</p>

<p>Introducing my app, Mov(i)e It, developed using ReactJS and TheMovieDB API. With Mov(i)e It, you can effortlessly search for any movie and add it to your personalized watch list. Additionally, the app provides detailed information about each movie, ensuring you have all the insights you need. Discover, organize, and enjoy your favorite films with Mov(i)e It! </p>

## 🚀 Technologies

Technologies that I used to develop the app

- [ReactJS](https://react.dev/)
- [React-Router-Dom](https://reactrouter.com/en/main)
- [ReduxJS](https://redux.js.org/)
- [React-Icons](https://github.com/wwayne/react-tooltip)
- [VS Code](https://code.visualstudio.com) with [Prettier RC](https://github.com/prettier/prettier)

## 👨🏼‍💻 Getting Started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

#### Step 1: Clone the repository

```bash
git clone https://github.com/atthmew/mov-i-e-it.git
```

```bash
cd mov-i-e-it
```

#### Step 2: Install Dependencies

Open a new terminal window , and run the following command to install the frontend dependencies:

```bash
npm install
```

#### Step 3: Run the Frontend Server

After installing the frontend dependencies, run the following command in the same terminal to start the frontend server:

```bash
npm run dev
```

This command will start the frontend server, and you'll be able to access the website on localhost:3000 in your web
browser.

:exclamation:
:warning:` If you encounter an OpenSSL error while running the frontend server, follow these additional steps:`

Reason behind error: This is caused by the node.js V17 compatible issues with OpenSSL, see
[this](https://github.com/nodejs/node/issues/40547) and [this](https://github.com/webpack/webpack/issues/14532) issue on
GitHub.

Try one of these and error will be solved

- > upgrade to Node.js v20.

- > Enable legacy OpenSSL provider

Here is how you can enable legacy OpenSSL provider

- On Unix-like (Linux, macOS, Git bash, etc.)

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

- On Windows command prompt:

```bash
set NODE_OPTIONS=--openssl-legacy-provider
```

- On PowerShell:

```bash
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```

Here is [reference](https://github.com/webpack/webpack/issues/14532#issuecomment-947012063) about enabling legacy
OpenSSL provider

After trying above solutions, run below command

```bash
npm run dev
```

> If you still facing issue, then follow
> [this stackoverflow thread](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported).
> It has so many different types of opinions. You definitely have solution after going through the thread.
