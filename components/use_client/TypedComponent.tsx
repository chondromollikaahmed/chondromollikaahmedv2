'use client';

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TypedComponent() {
  const typedElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedElement.current, {
      strings: [
        '<strong>UI/UX Designer</strong>',
        '<strong>Frontend Developer</strong>',
        '<strong>React Developer</strong>'
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      contentType: 'html' // Render HTML within the typed strings
    });

    // Destroy Typed instance during cleanup to avoid memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div style={{ display: 'inline' }}>
      <div style={{display:'inline'}} ref={typedElement}></div> {/* This is where Typed.js will render the text */}
    </div>
  );
}
