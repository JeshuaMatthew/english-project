import React from 'react';
import MarkdownDisplayPage from '../components/MarkdownDisplayPage';
import PaperImg from '../assets/paper.png'


// --- Sample Markdown Content (Replace with your actual content) ---
const markdownContent = `
## -Introduction 👋

Imagine you are taking notes while your teacher is talking. Suddenly, your teacher says a word or phrase you have never heard before. You might be confused and not know if you should write it down.

![Note Taking](https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRha2luZyUyMG5vdGVzfGVufDB8fDB8fHww)
*(Image 1 : Note Taking)*

Wei Sun studied how students take notes. In the research paper *“Note-taking Practices, Challenges and Strategies: Their Effects on EFL Chinese Students’ Listening Comprehension”*, Wei Sun said that the biggest problem when taking notes is finding it hard to understand the information while you are writing.

![Wei Sun's paper](${PaperImg})
*(Image 2 : Note-taking Practices, Challenges and Strategies: Their Effects on EFL Chinese Students’ Listening Comprehension)*

So, to help with this problem, is there a technology that can help students understand information while they are taking notes? Yes, the answer is **Genote**. **Genote** is a note-taking app that uses **AI** (Artificial Intelligence). Its goal is to help students understand their notes during the note-taking process.

## -System Features ✨

*   **Login**: Users need to enter their details (like email and password) before they can use **Genote's** features. This makes sure that only the right user can access their own notes and information.
*   **Register**: Users need to enter their details to create an account. This adds them to the system so the app knows who they are.
*   **Save Notes**: Users who are logged in can add new notes on the website.
*   **Delete Notes**: Users who are logged in can remove notes they made before.
*   **Read Notes**: Users who are logged in can read the notes they wrote earlier.
*   **Edit Notes**: Users who are logged in can change the notes they wrote earlier.
*   **Chat to Gemini AI**: Users who are logged in can talk with the **Gemini AI**. A chat box will appear on the note list page.

## -API Documentation 📝

**Endpoint**: \`POST /api/register\`
**Description**: Sends the user's information to create an account.
**Request Body (Example)**

\`\`\`json
{
  "name": "jeshua matthew",
  "email": "jeshuamatthew@gmail.com",
  "password": "123"
}
\`\`\`

**Response (If successful - \`200 OK\`)**: (The system confirms the account is made, details might vary)

---

**Endpoint**: \`POST /api/login\`
**Description**: Checks if the user's email and password are correct to let them log in.
**Request Body (Example)**:

\`\`\`json
{
  "email": "jeshuamatthew@gmail.com",
  "password": "123"
}
\`\`\`

**Response (If successful - \`200 OK\`)**:

\`\`\`json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
\`\`\`

**Response (If email or password is wrong - \`401 Invalid Credentials\`)**:

\`\`\`json
{
  "message": "Invalid email or password"
}
\`\`\`

## -System Workflow (How to Use Genote) 🚶

1.  First, open the **Genote** website in your internet browser.
2.  Second, register for an account (sign up).
3.  Third, log in using the account you just registered.
4.  After you log in successfully, **Genote** will show you the **'note list'** page. On this page, you can use all the main features, like saving notes or chatting with **Gemini AI**.

## -Security Measures (How Genote Protects User Data) 🔒 

*   **JWT (Json Web Token)**: **Genote** uses this technology to make sure no strangers can access a user's data. It checks that you are the correct logged-in user.
*   **Password Hashing**: **Genote** uses this technology to protect user passwords stored in its database. It changes the password into a secret code, so even if someone sees the database, they cannot read the real password easily.
`;
// --- End Sample Markdown Content ---

const SystemDocumentation: React.FC = () => {
  return (
    <MarkdownDisplayPage
      title="Genote System Documentation ⚙️"
      markdownContent={markdownContent}
    />
  );
};

export default SystemDocumentation;