import React from 'react';

function inIframe () {
  try {
      return window.self !== window.top;
  } catch (e) {
      return true;
  }
}

export default function Root({children}) {
  return (
    <div className={inIframe() ? 'inIframe' : ''}>
      {children}
    </div>
  );
}