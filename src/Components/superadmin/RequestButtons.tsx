import React from 'react'
import { BlockStyle } from '../../types/interfaces/IStyles'
import getStyles from '../../utils/getStyles'
import { ApproveRequest } from './ApproveRequest'
import { RejectReques } from './RejectReques'

// Кнопки для одобрения или отклонения заявки
export const RequestButtons = () => {
  return (
    <div className={getStyles(divStyle)}>
        <ApproveRequest />
        <RejectReques />
    </div>
  )
}

const divStyle: BlockStyle = {
    blockSize: 'w-9/12 max-w-screen-md',
    spacing: 'm-auto mt-10',
    container: 'flex flex-col gap-2'
}


