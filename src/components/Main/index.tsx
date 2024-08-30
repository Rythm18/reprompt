'use client';
import React from 'react';
import Card from '../Card';
import { GoogleGenerativeAI } from '@google/generative-ai';

const myPrompt = (userPrompt) => {
  return `You are a skilled prompt designer tasked with creating a detailed and actionable prompt for an AI system that will generate a complete solution for a user. The user's request is related to ${userPrompt}.

Detailed Instructions:

Context: Provide a clear understanding of the user’s goals and the context in which this solution will be applied. Specify the industry, target audience, and any relevant background information.

Objectives: Define the specific outcomes or features the user wants to achieve. This might include functionality, design elements, or business objectives.

Requirements:

Functional Requirements: List all the features and functions the solution must include.
Technical Specifications: Outline any technical constraints or specifications, such as platforms, programming languages, or technologies.
Design Preferences: Include any design preferences or branding guidelines, if applicable.
Content: Specify the type of content that needs to be included, such as text, images, or multimedia. Provide examples or templates if available.

Structure and Layout: Describe the desired structure or layout of the final output. This includes navigation, user flow, and key sections or pages.

Examples and Inspiration: Offer examples or references to similar solutions or designs that the user finds appealing or relevant.

Tone and Style: Indicate the tone and style required for the solution. Whether it’s formal, casual, modern, or traditional, ensure it aligns with the user’s brand or project.

Review and Validation: Suggest a process for reviewing the generated output to ensure it meets the user’s needs and expectations.

Additional Notes:

Scalability: The solution should be adaptable to future needs or expansions.
User Experience: Focus on creating a seamless and intuitive user experience.
Compliance and Accessibility: Ensure that the solution adheres to relevant standards and accessibility guidelines.
Important: The generated prompt should be comprehensive and precise, providing clear guidance to produce a high-quality and effective solution. The final output should align with the user’s objectives and deliver a complete and functional result.`;
};



const Main = () => {
    const [generatedPrompt, setGeneratedPrompt] = React.useState<string>('');
    const [prompt, setPrompt] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(false);
    
    const handlePrompt = async () => {
        setLoading(true);
        try {
            console.log(process.env.NEXT_PUBLIC_API_KEY);
            const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            
            const result = await model.generateContent(myPrompt(prompt));
            console.log('result', result.response.text());
            setGeneratedPrompt(result.response.text());
    } catch (error) {
      console.error('Request failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='relative flex flex-col items-center h-auto'>
      <div className='flex gap-5'>
        <div className=''>
          <input
            type="text"
            onChange={(e) => setPrompt(e.target.value)}
            name="searchbox"
            id="search"
            className='text-white/60 text-xl w-[800px] h-18 rounded-full border-2 bg-black border-white/40 p-5 focus:outline-none'
            placeholder='Generate prompt for your idea'
          />
        </div>
        <button
          onClick={handlePrompt}
          disabled={loading}
          className='font-gilroy rounded-full px-4 text-xl inline-flex animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none'>
          {loading ? 'Loading...' : 'Generate ✨'}
        </button>
      </div>
      <div className='flex px-32 pt-20 gap-12'>
        <Card generatedPrompt={generatedPrompt} />
      </div>
    </div>
  );
};

export default Main;
function MarkdownIt() {
    throw new Error('Function not implemented.');
}

