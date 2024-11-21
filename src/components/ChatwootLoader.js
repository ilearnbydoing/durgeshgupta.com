import React, { useEffect } from 'react';

const ChatwootLoader = () => {
  useEffect(() => {
    const loadChatwoot = () => {
      const BASE_URL = "https://app.chatwoot.com";
      const script = document.createElement('script');
      script.src = `${BASE_URL}/packs/js/sdk.js`;
      script.defer = true;
      script.async = true;

      script.onload = () => {
        if (window.chatwootSDK) {
          window.chatwootSDK.run({
            websiteToken: 'uVksWgN32vS8s4kx5tdGLvjZ',
            baseUrl: BASE_URL,
          });
        }
      };

      document.body.appendChild(script);
    };

    loadChatwoot();

    // Clean up script when the component unmounts
    return () => {
      const existingScript = document.querySelector(`script[src="https://app.chatwoot.com/packs/js/sdk.js"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null; // This component doesn't render anything visually
};

export default ChatwootLoader;
