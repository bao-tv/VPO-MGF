import { Box } from '@mui/material';
import React, {useRef} from 'react';
import {
    ImperativePanelHandle,
    Panel,
    PanelGroup,
    PanelResizeHandle,
  } from "react-resizable-panels";


  const WorkFlow = ({Right, Left}: any) => {
    const ref = useRef<ImperativePanelHandle>(null);

  return (
    <Box
      sx={{
        display: 'flex',
        // flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}
    >
      <PanelGroup direction="horizontal">
        <Panel collapsible ref={ref} defaultSize={20}>
            {Left}
        </Panel>
        <PanelResizeHandle />
        <Panel>
            {Right}
        </Panel>
        </PanelGroup>
      {/* <Right /> */}
    </Box>
  )
}

export default WorkFlow