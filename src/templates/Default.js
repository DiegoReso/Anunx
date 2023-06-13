'use client'

import { Box } from '@material-ui/core'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
      <Footer/>
    </>
  )
}

export default Default