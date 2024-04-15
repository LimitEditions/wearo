import React from 'react'
import { ISectionsTitle } from '../../types/interfaces/componentsProps/ISectionsTitle'
import { BlockStyle } from '../../types/interfaces/IStyles'
import getStyles from '../../utils/getStyles'
import { CloseBtn } from './CloseBtn'

export const SectionsTitle = ({title, needsClose}: ISectionsTitle) => {
  return (
    <div className={needsClose ? getStyles(containerWithClose) : getStyles(containerWithoutClose)}>
        <div className={getStyles(divStyle)}>
            <h2 className={getStyles(h2Style)}>{title}</h2>
            {needsClose ? <CloseBtn /> : null}
        </div>
    </div>
  )
}

const containerWithoutClose: BlockStyle = {
    blockSize: 'w-full',
    background: 'bg-gray-100',
    spacing: 'px-2 py-4'
}

const containerWithClose: BlockStyle = {
    blockSize: 'w-full',
    spacing: 'px-2 py-4',
}

const divStyle: BlockStyle = {
    container: 'flex justify-between',
    blockSize: 'w-full',
    spacing: 'm-auto'
}

const h2Style: BlockStyle = {
    text: 'text-base font-normal'
}


