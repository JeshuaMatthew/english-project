import React from 'react';
import ReactMarkdown from 'react-markdown';
import PageWrapper from '../components/PageWrapper';

interface MarkdownDisplayPageProps {
  title: string;
  markdownContent: string;
}

const MarkdownDisplayPage: React.FC<MarkdownDisplayPageProps> = ({ title, markdownContent }) => {
  return (
    <PageWrapper>
      {/* Add page-title class */}
      <h1 className="page-title">
        {title}
      </h1>
      {/* Add markdown-container class, remove glossy-effect */}
      <div className="markdown-container markdown-content">
        {/* Ensure markdown-content class is on ReactMarkdown */}
        <ReactMarkdown>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </PageWrapper>
  );
};

export default MarkdownDisplayPage;