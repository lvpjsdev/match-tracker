# Match Tracker: Real-Time Match Status Display

**Welcome to Match Tracker!** This project is designed to provide a clear and dynamic display of the current status of various matches. Whether you're following sports, esports, or any other kind of competition, Match Tracker will keep you updated.

**Live Demo:** [https://match-tracker-7n40.onrender.com](https://match-tracker-7n40.onrender.com)

## Project Overview

Match Tracker is a web application built using modern web development technologies to provide a responsive and user-friendly experience. The application fetches and displays match data in real time, ensuring that users always have access to the most up-to-date information.

## Getting Started: Setting Up Your Local Development Environment

This section outlines the steps necessary to get Match Tracker up and running on your local machine for development, testing, and contribution.

### Prerequisites: Tools You'll Need

Before you begin, make sure you have the following installed on your system:

1.  **Node.js (Version 16 or Higher Recommended):** Node.js is a JavaScript runtime environment that allows us to run JavaScript code outside of a web browser. It's essential for building and running modern web applications.
    - **How to Check Your Node.js Version:** Open your terminal or command prompt and type `node -v`. This will display the installed Node.js version. If you don't have Node.js or have an older version, please download and install it from the official website: [https://nodejs.org/](https://nodejs.org/).
    - **Note:** In case of update node.js version, you should also update npm version `npm install npm@latest -g`
2.  **pnpm (Package Manager):** `pnpm` is a fast and efficient package manager for Node.js. It's an alternative to `npm` and `yarn` and is used in this project to manage project dependencies.

### Installing pnpm: Your Dependency Manager

If you don't already have `pnpm` installed, follow these instructions:

- **Using npm (Node Package Manager):**

  - Open your terminal or command prompt.
  - Run the following command to install `pnpm` globally:

    ```bash
    npm install -g pnpm
    ```

    The `-g` flag installs `pnpm` globally, making it available from any directory in your terminal.

- **Alternative Installation Methods:**
  - If you prefer to use another method or if you encounter issues with the `npm` installation, please refer to the official `pnpm` documentation for other installation options: [https://pnpm.io/installation](https://pnpm.io/installation)

### Installation: Cloning the Repository and Installing Dependencies

Once you have Node.js and `pnpm` set up, you can proceed with the project setup:

1.  **Clone the Repository:**

    - Open your terminal.
    - Navigate to the directory where you want to store the project.
    - Use the `git clone` command to download the project code:

      ```bash
      git clone <repository_url>
      ```

      Replace `<repository_url>` with the actual URL of the Match Tracker Git repository.

2.  **Navigate to the Project Directory:**

    - After cloning, you need to enter the project directory:

      ```bash
      cd match-tracker
      ```

3.  **Install Project Dependencies:**

    - Now, use `pnpm` to install the project's dependencies:

      ```bash
      pnpm install
      ```

      This command reads the `package.json` file and downloads and installs all the packages listed within. This process may take a few minutes, depending on your internet connection.

## Running the Project: Development and Production

### Development Mode: Real-Time Development with Hot-Reloading

The development mode is ideal for writing code and seeing your changes immediately.

1.  **Starting the Development Server:**

    - In your terminal, within the `match-tracker` directory, run:

      ```bash
      pnpm dev
      ```

    - **What This Command Does:** This command starts a local development server using Vite. It will watch your project files for changes. When a change is detected, Vite will automatically rebuild and refresh the application in your browser. This process is known as "hot-reloading."
    - **Accessing the Application:** Once the server starts, you'll see a message in the terminal indicating that the application is running. Open your web browser and go to `http://localhost:5173` to access the development version of Match Tracker.

### Production Build: Preparing Your Application for Deployment

When you're ready to deploy Match Tracker, you need to build a production-ready version of the application.

1.  **Building the Project for Production:**

    - Run the following command in your terminal:

      ```bash
      pnpm build
      ```

    - **What This Command Does:** This command performs several steps:
      - It compiles all your TypeScript code into optimized JavaScript.
      - It bundles all of your code, styles, and assets into a set of files that can be easily served by a web server.
      - It optimizes your code to be smaller and faster, improving load times.
      - The output of this command is placed in the `dist` directory within your project folder. This directory is intended to be uploaded to your web server.

2.  **Preview Your Production Build**
    - Run the following command in your terminal:
      ```bash
       pnpm preview
      ```
    - What this command does: This command will run your builded project. It helps check your build before deploying it.
3.  **Deploying the Production Build:**
    - The `dist` directory is a self-contained, deployable unit. You can now copy the contents of this directory to your web server.

## Available pnpm Scripts: Your Development Toolbox

Here's a summary of the `pnpm` commands available in this project, along with detailed explanations:

- `pnpm dev`:
  - **Purpose:** Starts the local development server, enabling rapid development with hot-reloading.
  - **Description:** This command is the primary way you'll work on the project locally. It watches for file changes, recompiles code, and updates the browser automatically.
  - **Usage:** Run this command in your terminal when you start working on the project.
- `pnpm build`:
  - **Purpose:** Compiles the application code for production.
  - **Description:** This command performs a full build of the project, creating optimized code in the `dist` directory. The output is ready to be deployed to a web server.
  - **Usage:** Run this command when you're ready to deploy your application.
- `pnpm preview`:
  - **Purpose:** Starts a local server that can run production code.
  - **Description:** After running `pnpm build`, this command starts local server for preview.
  - **Usage:** Run this command to check the quality of the code build.

## Technologies Used

Match Tracker is built using a suite of modern and powerful web development technologies:

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A typed superset of JavaScript that adds static typing.
- **Styled-components:** A library that allows you to write CSS directly within your JavaScript code using tagged template literals.
- **@tanstack/react-query:** A library to fetch, cache, synchronize and update server state.
- **pnpm:** A fast and disk space-efficient package manager.
- **Vite:** A fast build tool and development server for modern web development.
