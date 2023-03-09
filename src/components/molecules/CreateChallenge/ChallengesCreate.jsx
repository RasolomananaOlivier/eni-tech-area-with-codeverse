import { Typography } from '@mui/material'
import React from 'react'
import "./style.css"
export default function ChallengesCreate() {
  return (
    <div className='card'>
       <Typography variant="h5" component="div">Rules</Typography>
         <div className='card-child'>
            <div>
                <Typography variant='h2' component="div">Create challenge</Typography>
                <Typography variant='p' > challenge and test others</Typography>
            </div>
            <div></div>
         </div>
    </div>
  )
}
