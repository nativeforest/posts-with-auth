import React from 'react'
import { IComment } from '../../types/Comment'
import { CardComment } from '../Cardcomment/CardComment'

function CommentList({comments}:{comments:Array<IComment>}) {

  return (
    <div className='comments-list-container'>
      {!!comments?
      comments.map((comment: IComment) => <CardComment comment={comment} key={comment.id}  />):
      <div>There is no comment yet</div>
      }
    </div>
  )
}

export {CommentList}