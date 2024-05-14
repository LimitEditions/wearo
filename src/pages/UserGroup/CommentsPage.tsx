import React from 'react'
import { CommentModel } from '../../api/data-contracts'
import { CommentComponent } from '../../Components/user/CommentComponent';

export const CommentsPage = ({ comments }: { comments: CommentModel[] }) => {

  const mock: CommentModel[] = [
    {
      guid: 'e4d1b691-e07f-4ab7-af81-7518268f4857',
      isDeleted: false,
      createDT: '2023-05-01T10:30:00Z',
      updateDT: '2023-05-01T10:30:00Z',
      userGuid: '9cbd314a-9c35-4bb5-9412-8d3cf555505a',
      text: 'This is the first comment about a new product feature.',
      isLike: true,
      entityGuid: 'f8d3b2c1-4f6e-4d8b-b3d9-e6e7b5f6b3a2'
    },
    {
      guid: 'b2e6c9e8-f7a4-4f6f-8d9f-0d8e7b1a6b2c',
      isDeleted: false,
      createDT: '2023-05-02T14:45:00Z',
      updateDT: '2023-05-02T14:45:00Z',
      userGuid: '9cbd314a-9c35-4bb5-9412-8d3cf555505a',
      text: 'I have a suggestion for improving the user experience.',
      isLike: false,
      entityGuid: '8d7e6b2f-1c4a-4f9e-b8d1-f3e7c6a5d9b2'
    },
    {
      guid: 'c9e7d2b6-f8a5-4b3f-9d8f-e6e7b1a6b2c8',
      isDeleted: true,
      createDT: '2023-05-03T18:20:00Z',
      updateDT: '2023-05-04T09:15:00Z',
      userGuid: '9cbd314a-9c35-4bb5-9412-8d3cf555505a',
      text: 'This comment has been deleted.',
      isLike: null,
      entityGuid: 'e6e7b1a6b2c8-f8a5-4b3f-9d8f-c9e7d2b6f8a5'
    }
  ];
  
  const toRender = comments.length > 0 ? comments: mock;

  return (
    <>
      {
        toRender.map(el => { return <CommentComponent comment={el} key={el.guid}/> })
      }
    </>
  )
}
