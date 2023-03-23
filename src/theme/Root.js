import React, { useEffect, useState } from 'react';

function inIframe () {
  try {
      return window.self !== window.top;
  } catch (e) {
      return true;
  }
}

export default function Root({children}) {
  const [isInIframe, setIsInIframe] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => {
      if (inIframe()) {
        setIsInIframe(true);
      }
    });
  }, []);

  return (
    <div className={isInIframe ? 'inIframe' : ''}>
      {children}
    </div>
  );
}