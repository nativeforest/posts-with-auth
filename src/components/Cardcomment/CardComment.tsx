import React from 'react'
import { IComment } from '../../types/Comment'
import './CardComment.css'
function CardComment({comment}:{comment: IComment}) {
  const event = new Date(comment.publishDate );
  const datex = event.toLocaleString('es', { dateStyle: 'short' });
  return (
    <div className='card-comment-container'>
      <small>{datex || '-'} Comment </small>
      <div><strong>By </strong> {comment.owner.firstName} {comment.owner.lastName}</div>
      <div className='card-comment-container__message' >{comment.message}</div>
    </div>
  )
}

export  {CardComment}