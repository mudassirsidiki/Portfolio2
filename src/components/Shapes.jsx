import React from 'react';

// Circles Component
function Circles({ className = '', variant = 'solid' }) {
  if (variant === 'dotted') {
    return (
      <div className={`relative ${className}`}>
        <div className="absolute w-24 h-24">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-700 rounded-full"
              style={{
                left: `${(i % 4) * 8}px`,
                top: `${Math.floor(i / 4) * 8}px`
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div className="absolute w-16 h-16 rounded-full border border-gray-700"></div>
    </div>
  );
}

// Triangles Component
function Triangles({ className = '', direction = 'up' }) {
  const styles = {
    up: 'border-l-transparent border-r-transparent border-b-gray-700 border-l-8 border-r-8 border-b-16',
    down: 'border-l-transparent border-r-transparent border-t-gray-700 border-l-8 border-r-8 border-t-16',
    left: 'border-t-transparent border-b-transparent border-r-gray-700 border-t-8 border-b-8 border-r-16',
    right: 'border-t-transparent border-b-transparent border-l-gray-700 border-t-8 border-b-8 border-l-16'
  };
  return <div className={`absolute w-0 h-0 ${styles[direction]} ${className}`}></div>;
}

// Waves Component
function Waves({ className = '' }) {
  return (
    <div className={`absolute w-full h-8 bg-gray-700 ${className}`} style={{ clipPath: 'polygon(0% 50%, 25% 60%, 50% 50%, 75% 40%, 100% 50%, 100% 100%, 0% 100%)' }}></div>
  );
}

// Blurred Shapes Component
function BlurredShapes({ className = '' }) {
  return <div className={`absolute w-24 h-24 bg-gray-700 opacity-30 blur-2xl rounded-full ${className}`}></div>;
}

// Gradient Overlays Component
function GradientOverlays({ className = '' }) {
  return (
    <div className={`absolute w-full h-full bg-gradient-to-r from-gray-700 to-transparent opacity-50 ${className}`}></div>
  );
}

export { Circles, Triangles, Waves, BlurredShapes, GradientOverlays };
