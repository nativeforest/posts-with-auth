import React, { Children } from 'react'
import './Tag.css'

function Tag({children,tag}:{children?:React.ReactNode,tag?: string}) {
  return (
    <div className='tag-container' >#{children || tag}</div>
  )
}

export  {Tag}