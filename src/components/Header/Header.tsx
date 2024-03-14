import React from 'react'
import { Box } from '@mui/material'
import { blue } from '@mui/material/colors';

type Props = {}

const Header = (props: Props) => {
  return (
    <Box sx={{height: '60px', backgroundColor: blue[100], display: 'flex', justifyContent: 'center'}}>VPO của MGF</Box>
  )
}

export default Header