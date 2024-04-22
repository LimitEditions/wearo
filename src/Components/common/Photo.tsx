import React from 'react'
import photoNone from '../../images/photonone.png'; 

export const Photo = ({id, styles}: {id: string | undefined | null, styles: string}) => {
    const src = id ? `http://vne.su:8081/api/Files/${id}` : photoNone
  return (
    <img src={src} className={styles}/>
  )
}
