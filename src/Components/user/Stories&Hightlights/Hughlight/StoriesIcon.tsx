import Styles from './style.module.css'

interface StoriesIconProps {
  image?: string | null
  name?: string | null
  caller: () => void
}

export const StoriesIcon = ({ image, caller, name }: StoriesIconProps) => {
  return (
    <div className='flex flex-col items-center space-y-1' onClick={caller}>   
      <div 
          className={[`h-14 w-14 object-contain rounded-full border-2 border-black bg-cover bg-center`, !image && Styles.img ].join(' ')}
          style={{
            backgroundImage: image ? `url(${process.env.REACT_APP_URL_REQUEST}/api/Files/${image})` : undefined
          }}
      />
      <h3 className='text-xs'>{name ?? "Нет названия"}</h3>
  </div>
  )
}