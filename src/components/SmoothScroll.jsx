import React from 'react';

export default function SmoothScroll({ children }) {
  return <div className="smooth-scroll-wrapper overflow-x-hidden">{children}</div>;
}

