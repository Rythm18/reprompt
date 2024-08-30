"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { SparklesCore } from "../ui/sparkles";


export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="ml-20 flex">
        <div className="mt-10 w-auto bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="font-gilroy md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          REPROMPT!
        </h1>
        <div className="w-[20rem] h-10 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.2}
            maxSize={0.5}
            particleDensity={300}
            className="w-[800px] h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
    </div>
    <div
      className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50 text-xl font-semibold", className)}
    >
    
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
        </MenuItem>
      </Menu>
    </div>
    </div>
  );
}
