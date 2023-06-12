'use client'

import { Box } from '@material-ui/core'
import Header from '../components/Header'

const Default =({children})=>{

  return(
    <>
      <Header/>
        <Box
          sx={{
            p:'80px'
          }}>
        {children}
        </Box>
      
    </>
  )
}

export default Default