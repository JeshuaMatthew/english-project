import React from 'react';
import ReactMarkdown from 'react-markdown';
import './FormalEmail.css'; 
import PageWrapper from '../components/PageWrapper';

// --- The original Markdown Content ---
const markdownContent = `
Greetings,

I hope this email finds you well. I would send you my deepest gratitude for handing me the Gemini API key.

Hi there, I’m Matthew, I am a student at Universitas Advent Indonesia (Indonesian Adventist University), in the prior month, I sent you a request on the Gemini api key for building a note-taking app website that is integrated with Gemini 2.0-exp.

I am very thankful for the Gemini api key that you’ve sent. Since receiving the key, I have not only successfully integrated Gemini into the website, but I have also integrated it into various mobile apps. Examples include Horse Tinder, which is like Tinder but for horses, and Fix it Yourself, an application that lets AI guide users to repair electronic devices. The key has given me the opportunity to develop as a programmer and has provided me with a lot of experience in using APIs.

Thank you for your kindness.

Sincerely,

Jeshua Matthew .H`;

// --- Component Implementation ---
const FormalEmail: React.FC = () => {
  // --- Placeholder Email Details ---
  const emailDetails = {
    from: '2381009@unai.edu', // Example From
    to: '	trisnendringajar@gmail.com',     // Example To
    subject: 'Gratitude for the Gemini API Key', // Example Subject
    date: new Date().toDateString(),       // Example Date
  };

  return (
    <PageWrapper>
      <h1 className="page-title">
        Formal Email 📧
      </h1>
      <div className="email-container">
      <div className="email-header">
        <p>
          <strong>From:</strong> {emailDetails.from}
        </p>
        <p>
          <strong>To:</strong> {emailDetails.to}
        </p>
        <p>
          <strong>Date:</strong> {emailDetails.date}
        </p>
        <p>
          <strong className="email-subject">Subject:</strong>{' '}
          {emailDetails.subject}
        </p>
      </div>
      <div className="email-body">
        {/* Use ReactMarkdown to render the body content */}
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
    </PageWrapper>
    
  );
};

export default FormalEmail;