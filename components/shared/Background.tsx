import React from 'react';
import './Background.css';

interface BackgroundProps {
  numBubbles?: number; // Optional, default number of bubbles
}

const Background: React.FC<BackgroundProps> = ({ numBubbles = 27 }) => {
  const bubblesArray = Array.from({ length: numBubbles }, (_, i) => i + 1);

  return (
    <div className="container">
      <div className="bubbles">
        {bubblesArray.map((bubble, index) => (
          <span
            key={index}
            style={{
              // Generate unique --i values based on index for animation timing and position
              '--i': index + 1,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
};

export default Background;
