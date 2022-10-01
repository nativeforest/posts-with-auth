import React from 'react'
import { IComment } from '../../types/Comment'

function CardComment({comment}:{comment: IComment}) {
  return (
    <div>
      <div>CardComment</div>
      <div>comment: {comment.publishDate}</div>
      <div>name {comment.owner.firstName}</div>
      <div>comment: {comment.message}</div>
    </div>
  )
}

export  {CardComment}