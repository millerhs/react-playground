import Box from '@mui/system/Box';
import { HtmlEditor } from 'devextreme-react';
import { Toolbar, Item } from 'devextreme-react/html-editor';
import React from 'react';

const minHeight = 200;

const RichTextTest = () => {
  const containerRef = React.useRef<HTMLElement>(null);
  const [height, setHeight] = React.useState(minHeight);

  /** Whenever the container's height changes, update the HtmlEditor's height accordingly */
  React.useEffect(() => {
    setHeight(Math.max(minHeight, containerRef.current?.clientHeight ?? 0));
  }, [containerRef.current?.clientHeight]);

  /** Pulls the HtmlEditor's HTMLElement by ID and opens it in fullscreen mode. This is done through the  */
  const requestFullscreen = () => {
    const editor = document.getElementById('htmlEditor');
    if (editor) {
      if (document.fullscreenElement) {
        /** If the document (window) is already fullscreen, exit */
        document.exitFullscreen();
      } else {
        /** Otherwise, open fullscreen */
        editor.requestFullscreen();
      }
    }
  };

  return (
    <Box sx={{ height: 500 }}>
      <Box ref={containerRef} sx={{ height: '100%', minHeight: minHeight }}>
        {/** You have to set a background color here or the screen will appear black when opening in fullscreen. */}
        <HtmlEditor
          id='htmlEditor'
          height={height}
          style={{ backgroundColor: 'white' }}
        >
          <Toolbar>
            {/** Custom Item which allows you to open the window in fullscreen mode */}
            <Item
              widget='dxButton'
              options={{
                icon: 'expand',
                stylingMode: 'text',
                onClick: () => {
                  requestFullscreen();
                },
              }}
            />
            <Item name='separator' />
            <Item name='undo' />
            <Item name='redo' />
            <Item name='separator' />
            <Item name='header' />
            <Item name='separator' />
            <Item name='bold' />
            <Item name='italic' />
            <Item name='strike' />
            <Item name='underline' />
            <Item name='separator' />
            <Item name='alignLeft' />
            <Item name='alignCenter' />
            <Item name='alignRight' />
            <Item name='alignJustify' />
          </Toolbar>
        </HtmlEditor>
      </Box>
    </Box>
  );
};

export default RichTextTest;
