import React from 'react'
import { CommentModel } from '../../api/data-contracts'

export const Comments = ({comments}: {comments: CommentModel[]}) => {
  return (
    <>
      {comments.map(comment => {
          return <>
              <div>
              <span>{comment.user?.username}</span>
              <span>{comment.createDT}</span>
              </div>
              <div>{comment.text}</div>
          </>
      })}
    </>
  )
}
