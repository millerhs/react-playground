import Box from '@mui/system/Box';
import { HtmlEditor } from 'devextreme-react';
import React from 'react';

const minHeight = 200;

const RichTextTest = () => {
  const containerRef = React.useRef<HTMLElement>(null);
  const [height, setHeight] = React.useState(minHeight);

  React.useEffect(() => {
    setHeight(Math.max(minHeight, containerRef.current?.clientHeight ?? 0));
  }, [containerRef.current?.clientHeight]);

  return (
    <Box sx={{ height: 500 }}>
      <Box ref={containerRef} sx={{ height: '100%', minHeight: minHeight }}>
        <HtmlEditor height={height} />
      </Box>
    </Box>
  );
};

export default RichTextTest;
