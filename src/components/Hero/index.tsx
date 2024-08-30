"use client";
import React from 'react'
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
const Hero = () => {
    const words = [
        {
          text: "REPROMPT!",
          className: "text-blue-500 dark:text-blue-500 font-bold",
        },
      ];
      return (
        <div className="flex flex-col items-center justify-center pt-20 pb-10">
          <p className="font-gilroy text-4xl md:text-4xl lg:text-7xl font-bold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-to-white dark:via-neutral-300 dark:to-neutral-800">
            Generate your prompts
          </p>
          
        </div>
      );
}

export default Hero

