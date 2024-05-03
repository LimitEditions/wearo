import React from 'react'
import { BlockStyle } from '../../types/interfaces/IStyles'
import getStyles from '../../utils/getStyles'

// Стрелка вправо
export const ArrowRight = () => {
  return (
    <div className={getStyles(divStyle)}>
        <img src='/images/arrowRight.png' alt='Стрелка вправо'/>
      </div>
  )
}

const divStyle: BlockStyle = {
    container: 'self-center'
}