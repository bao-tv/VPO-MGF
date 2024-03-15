import { Box } from '@mui/material'
import { purple } from '@mui/material/colors';
import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <Box sx={{backgroundColor: purple[100], height: 'calc(100vh - 60px)'}}>Sidebar</Box>
  )
}

export default Sidebar