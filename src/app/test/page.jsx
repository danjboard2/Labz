"use client";
import React, { useEffect } from 'react';
import SetContainerCursor from '../../partials/layout.tsx'; // Update the path as needed
import { SwupTransitions } from '../../components/swup.js'; // Update the path as needed
import { utils, getIndexPage } from '../../../public/media/scripts/utils'; // Update the path as needed
import { Cursor1 } from '../../../public/media/scripts/cursors/cursor1'; // Update the path as needed

const Contact = () => {
  useEffect(() => {
    const setCursor = () => {
      const index = getIndexPage();
      switch (index) {
        case 1:
          new Cursor1(index);
          break;
        default:
      }
    };

    const initialize = async () => {
      await utils();
      SwupTransitions();
      setCursor();
    };

    window.addEventListener('load', initialize);

    return () => {
      window.removeEventListener('load', initialize);
    };
  }, []);

  return (
    <>
      <SetContainerCursor number={1} />
      {/* Add other components or logic here */}
    </>
  );
};

export default Contact;
