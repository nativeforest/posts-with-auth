import React from 'react'
import { IComment } from '../../types/Comment'
import { CardComment } from '../Cardcomment/CardComment'
import './CommentList.css'
function CommentList({comments}:{comments:Array<IComment>}) {
console.log(comments,"commentsssss")
  return (
    <div className='comments-list-container'>
      <h2>Comments</h2>
      {comments.length>0?
      comments.map((comment: IComment) => <CardComment comment={comment} key={comment.id}  />):
      <div>There is no comment yet</div>
      }
      <div className='comments-list-container__pagination' ></div>
    </div>
  )
}

export {CommentList}