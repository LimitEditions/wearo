import { useEffect, useState } from "react"
import Styles from './style.module.css'

interface StoriesIconProps {
  image?: string | null
  name?: string | null
  caller: () => void
}

export const StoriesIcon = ({ image, caller, name }: StoriesIconProps) => {
  const [ src, setSrc ] = useState<null | string>(null)

  useEffect(() => {
    if (!image) return;

    const img = new Image();

    img.onload = () => {
      setSrc(image as string)
    }

    img.src = image;
  }, [image])



  return (
    <div className='flex flex-col items-center space-y-1' onClick={caller}>   
      <div 
          className={[`h-14 w-14 object-contain rounded-full border-2 border-black bg-cover bg-center`, !src && Styles.img ].join(' ')}
          style={{
            backgroundImage: src ? `url(${src})` : undefined
          }}
      />
      <h3 className='text-xs'>{name ?? "Нет названия"}</h3>
  </div>
  )
}