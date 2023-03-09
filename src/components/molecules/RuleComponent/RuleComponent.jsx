import { Typography } from '@mui/material'
import React from 'react'
import "./cardStyle.css"
export default function RuleComponent() {
    const table =[
        {
            title:"Rules",
            p:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eum saepe repellendus quas est.  "
        },
        {
            title:"the last rules",
            p:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eum saepe repellendus quas est.  "
        },
        {
            title:"Rules",
            p:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eum saepe repellendus quas est.  "
        },
        {
            title:"the last rules",
            p:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eum saepe repellendus quas est.  "
        },
    ]
  return (
    <div>
        <div className='box'>
            {table.map((param,i)=>(
            <div className='box-child' key={i}>
                 <Typography variant='h6' >{param.title}</Typography>
                 <Typography variant='p' >{param.p}</Typography>
             </div>
            ))}
        </div>
    </div>
  )
}
