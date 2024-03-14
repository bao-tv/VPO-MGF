import React from 'react'
import WorkFlow from '../../layout/WorkFlow'
import Sidebar from '../../components/Sidebar'
import RightBlock from './RightBlock'
import { Box } from '@mui/material'

const Home = () => {
  return (
    <Box>
        <WorkFlow Left={<Sidebar />} Right={<RightBlock />}/>
    </Box>
  )
}

export default Home