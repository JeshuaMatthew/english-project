import React from 'react';
import MarkdownDisplayPage from '../components/MarkdownDisplayPage';

// --- Sample Markdown Content (Replace with your actual content) ---
const markdownContent = `
## -Introduction 👋

Are you interested in working with backend development? **Nest.js** is a very popular backend framework used in the industry. Here are the steps to create a basic **Nest.js**
 project scaffold using the **Nest.js CLI** on Windows.

## -Equpments 🛠️

### 1.  Windows Computer / laptop 💻 
### 2.  Internet Connection 🌐
### 3.  Code Editor 📝

## -Steps 🏃🏻‍♂️‍➡️

1.  Download the [Node.js](https://nodejs.org/en) runtime.
2.  Double-click the Node.js installer file to install the **Node.js** runtime on your computer.
3.  Open the search bar on your Windows taskbar, search for “**Command Prompt**” and press Enter.
4.  To verify the **Node.js** installation, run the command \`node -v\` in the **Command Prompt**. If it displays the Node.js version number, you are ready for the next step.
5.  Run this command using **NPM** (Node Package Manager) to install the **Nest.js CLI** globally:
    \`\`\`bash
    npm i -g @nestjs/cli
    \`\`\`
6.  Ensure your **Command Prompt** is open in the desired directory where you want to create your project.
7.  If necessary, navigate to your desired folder using the \`cd\` command. For example:
    \`\`\`bash
    cd C:/jeshuaMatthew/document/Ngoding
    \`\`\`
8.  Once in the correct directory, run the command: \`nest new your-project-name\`. Replace \`your-project-name\` with the actual name you want for your project (e.g., \`nest new nestjsExcercise\`).
    \`\`\`bash
    nest new your-project-name 
    \`\`\` 
    *Example:*
    \`\`\`bash
    nest new nestjsExcercise
    \`\`\`
9.  The CLI might prompt you to choose a package manager. Select **npm** using your arrow keys and press Enter.
10. Wait for the **Nest.js CLI** to download dependencies and set up the project structure.
11. Once finished, you can start coding! The main application code is typically located in the \`src\` folder within your new project directory.`;
// --- End Sample Markdown Content ---

const HowToOperate: React.FC = () => {
  return (
    <MarkdownDisplayPage
      title="How to Generate Nest.js 🦁 Scaffold Project in Windows 🪟"
      markdownContent={markdownContent}
    />
  );
};

export default HowToOperate;