import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface CardProps {
  generatedPrompt: string;
}

const Card: React.FC<CardProps> = ({ generatedPrompt }) => {
  return (
    <div className='rounded-xl p-8 bg-white/20 h-auto w-[1000px]'>
  <ReactMarkdown 
    className='markdown-container text-justify '
    remarkPlugins={[remarkGfm]}
  >
    {generatedPrompt}
  </ReactMarkdown>
</div>

  );
};

export default Card;
