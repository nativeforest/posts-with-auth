import React from 'react'
import './PostList.css';
function PostList({children,isLoading}:{children:React.ReactNode | React.ReactNode[],isLoading:boolean}) {
  return (
    <>
    <div className='posts-container__posts' >
    {isLoading ? <div className='posts-container__loading'><h1>Loading Posts...</h1></div> : children}
    </div>
    
    </>
  )
}

export  {PostList}