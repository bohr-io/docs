import React, { useEffect, useState } from 'react';
import EnhancedChat from 'enhancedocs-chat';

import 'enhancedocs-chat/dist/style.css';

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
      <EnhancedChat
          config={{
            projectId: '64abdae3f695bfc185b9335e',
            accessToken: 'pk_6f7c19ffe3058593c68e9cc07bc24c2771bcf8f8e7123c87'
          }}
          size="large"
      />
    </div>
  );
}
