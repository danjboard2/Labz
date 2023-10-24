"use client"
import React, { useEffect } from 'react';
import Swup from 'swup';
import SwupFadeTheme from '@swup/fade-theme';
import { setCursor } from '../../public/media/scripts/setCursor';

const SwupTransitions = () => {
  useEffect(() => {
    // Initialize Swup
    const swup = new Swup({
      plugins: [new SwupFadeTheme()]
    });

    // Initialize page
    const initPage = () => {
      setCursor();
    };

    initPage();

    // Add event listener
    swup.on('contentReplaced', initPage);

    // Cleanup: Remove event listeners or other side effects here
    return () => {
      swup.off('contentReplaced', initPage);
    };
  }, []);

  return null; // or return some JSX if needed
};

export default SwupTransitions;