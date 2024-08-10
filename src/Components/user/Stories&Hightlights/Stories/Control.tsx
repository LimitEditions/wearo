import { useEffect, useState } from 'react'
import Style from './style.module.css'

interface ControllProps {
  changeIndex: (m: (x: number) => number) => void,
  showMoreClick: () => void
  currentStoryIndex: number,
}

const KEY_FOR_LOCALSTORAGE = 'stories-controll-instustion'

export const Controll = ({ changeIndex, currentStoryIndex, showMoreClick } : ControllProps) => {
  const [isShowControllHelper, setIsShowControllHelper] = useState(false);

  useEffect(() => {
    const item = localStorage.getItem(KEY_FOR_LOCALSTORAGE);

    if (!item) {
      // localStorage.setItem(KEY_FOR_LOCALSTORAGE, '1');
      setIsShowControllHelper(true);
      setTimeout(() => {
        setIsShowControllHelper(false);
      }, 3000)
    }
  }, [])

  return (
    <div className={Style.stories__control}>
        <div className={Style.controller__wrapper}>
            {(currentStoryIndex !== 0 || isShowControllHelper) && <div onClick={() => changeIndex((x) => x - 1)}>left</div>}
            <div onClick={() => changeIndex((x) => x + 1)}>right</div>
        </div>
        <div className={Style.controller__more} onClick={showMoreClick}>
            ...
        </div>
    </div>
  )
}