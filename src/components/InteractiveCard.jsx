import React, { createContext, useContext, useRef, useState } from 'react';

const MouseEnterContext = createContext([false, () => {}]);

export function CardContainer({ children, className = '', containerClassName = '' }) {
  const containerRef = useRef(null);
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (event.clientX - left - width / 2) / 12;
    const y = (event.clientY - top - height / 2) / 12;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEnter(false);
    containerRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)';
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEnter, setIsMouseEnter]}>
      <div className={`flex items-center justify-center ${containerClassName}`} style={{ perspective: '1000px' }}>
        <div
          ref={containerRef}
          onMouseEnter={() => setIsMouseEnter(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`relative flex items-center justify-center transition-all duration-200 ease-out ${className}`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
}

export function CardBody({ children, className = '' }) {
  return <div className={`h-full w-full [transform-style:preserve-3d] ${className}`}>{children}</div>;
}

export function CardItem({ as: Tag = 'div', children, className = '', translateZ = 0, translateX = 0, translateY = 0, rotateX = 0, rotateY = 0, rotateZ = 0, ...rest }) {
  const [isMouseEnter] = useContext(MouseEnterContext);
  const transform = isMouseEnter
    ? `translateZ(${translateZ}px) translateX(${translateX}px) translateY(${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
    : 'translateZ(0px) translateX(0px) translateY(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)';

  return (
    <Tag className={`transition-all duration-300 ease-out ${className}`} style={{ transform, transformStyle: 'preserve-3d' }} {...rest}>
      {children}
    </Tag>
  );
}

export default function InteractiveCardWrapper(props) {
  return <CardContainer {...props} />;
}
