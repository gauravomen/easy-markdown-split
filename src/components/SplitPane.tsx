
import React, { useState, useEffect, useCallback } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface SplitPaneProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

const SplitPane = ({ left, right }: SplitPaneProps) => {
  const isMobile = useIsMobile();
  const [splitPosition, setSplitPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = useCallback(() => {
    setIsResizing(true);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isResizing) {
      const container = document.getElementById('split-pane-container');
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const newPosition = ((e.clientX - containerRect.left) / containerRect.width) * 100;
        // Constrain the position between 20% and 80%
        setSplitPosition(Math.min(Math.max(newPosition, 20), 80));
      }
    }
  }, [isResizing]);

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, handleMouseMove, handleMouseUp]);

  if (isMobile) {
    return (
      <div className="flex flex-col h-full gap-4">
        <div className="h-1/2">{left}</div>
        <div className="h-1/2">{right}</div>
      </div>
    );
  }

  return (
    <div 
      id="split-pane-container" 
      className="flex h-full relative"
      style={{ cursor: isResizing ? 'col-resize' : 'auto' }}
    >
      <div 
        className="h-full overflow-hidden"
        style={{ width: `${splitPosition}%` }}
      >
        {left}
      </div>
      <div 
        className="absolute top-0 bottom-0 w-2 bg-transparent cursor-col-resize z-10 hover:bg-editor-purple/20 transition-colors"
        style={{ left: `calc(${splitPosition}% - 4px)` }}
        onMouseDown={handleMouseDown}
      />
      <div 
        className="h-full overflow-hidden"
        style={{ width: `${100 - splitPosition}%` }}
      >
        {right}
      </div>
    </div>
  );
};

export default SplitPane;
