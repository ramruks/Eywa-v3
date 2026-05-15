import { useEffect } from 'react';

declare global {
  interface Window {
    disqus_config: () => void;
  }
}

const DisqusComments = () => {
  useEffect(() => {
    window.disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = window.location.pathname;
    };

    const script = document.createElement('script');
    script.src = 'https://ambientweather.disqus.com/embed.js';
    script.setAttribute('data-timestamp', Date.now().toString());
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      // Clean up Disqus variables to prevent issues on re-mount
      delete window.DISQUS;
    };
  }, []);

  return (
    <div id="disqus_thread" style={{ marginTop: '3rem', padding: '1rem', background: '#f5f5f5', borderRadius: '8px' }} />
  );
};

export default DisqusComments;
