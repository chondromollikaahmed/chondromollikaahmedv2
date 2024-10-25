'use client'
import { useEffect } from "react";
import { activeAnimation, initCursor, jarallaxAnimation, stickyNav } from "@/components/utility/utils";

interface EffectsProps {
  pageClassName?: string;
}

declare global {
  interface Window {
    Splitting: any;
  }
}

const Effects = ({ pageClassName }: EffectsProps) => {
    useEffect(() => {
      activeAnimation();
      initCursor();
      window.addEventListener("scroll", activeAnimation);
      window.addEventListener("scroll", stickyNav);
    }, []);
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        window.Splitting = require("splitting");
      }
      window.Splitting();
      jarallaxAnimation();
      const bodyElement = document.querySelector("body");
      if (bodyElement) {
        bodyElement.className = pageClassName ? pageClassName : "";
      }
        });
      
        return null;
    };
    
    export default Effects;