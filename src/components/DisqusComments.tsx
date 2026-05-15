import { DiscussionEmbed } from 'disqus-react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

interface DisqusCommentsProps {
  shortname?: string;
}

const DisqusComments = ({ shortname = 'ambientweather-disqus-com' }: DisqusCommentsProps) => {
  const location = useLocation();

  const disqusConfig = {
    url: window.location.href,
    identifier: location.pathname,
    title: document.title,
  };

  return (
    <Box sx={{ mt: 6, p: 2, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
      <DiscussionEmbed
        shortname={shortname}
        config={disqusConfig}
      />
    </Box>
  );
};

export default DisqusComments;
