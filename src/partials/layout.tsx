"use client"
import React from 'react';

interface SetContainerCursorProps {
  number: number;
}

const SetContainerCursor: React.FC<SetContainerCursorProps> = ({ number }) => {
  return (
    <section className="cursor-container" id={`cursor-${number}`}>
      {/* Your content here */}
    </section>
  );
};

const App = () => {
  const cursors = ["Waves"];

  return (
    <>
        <div id="swup">
          
          <main role="main">
            {/* Your main content here */}
            <SetContainerCursor number={1} />
          </main>
        </div>
    </>
  );
};

export default App;