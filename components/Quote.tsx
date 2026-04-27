// components/Quote.tsx
import React from 'react';

interface QuoteProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Quote: React.FC<QuoteProps> = ({ children, text, className = '', style }) => {
  const content = text || children;

  const defaultStyles: React.CSSProperties = {
    display: 'block',
    padding: '1.5rem 2rem',
    margin: '0',
    border: 'none',
    borderRadius: '1rem',
    background: 'linear-gradient(135deg, rgba(167, 252, 0, 0.05) 0%, rgba(189, 51, 164, 0.05) 100%)',
    borderLeft: `4px solid var(--main-green, #a7fc00)`,
    color: '#374151',
    fontStyle: 'normal',
    lineHeight: 1.6,
    fontWeight: 400,
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'DrukWide, sans-serif',
  };

  return (
    <blockquote style={{ ...defaultStyles, ...style }} className={className}>
      {content}
    </blockquote>
  );
};

export default Quote;