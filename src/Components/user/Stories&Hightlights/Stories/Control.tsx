import { useEffect, useState } from 'react'
import Style from './style.module.css'

interface ControllProps {
  changeIndex: (m: (x: number) => number) => void,
  showMoreClick: () => void
  currentStoryIndex: number
  changePressed: (v: boolean) => void
}

const KEY_FOR_LOCALSTORAGE = 'stories-controll-instustion'

export const Controll = ({ changeIndex, currentStoryIndex, showMoreClick, changePressed } : ControllProps) => {
  const [isShowControllHelper, setIsShowControllHelper] = useState(false);

  useEffect(() => {
    const item = localStorage.getItem(KEY_FOR_LOCALSTORAGE);

    if (!item) {
      localStorage.setItem(KEY_FOR_LOCALSTORAGE, '1');
      setIsShowControllHelper(true);
      changePressed(true);
      setTimeout(() => {
        changePressed(false)
        setIsShowControllHelper(false);
      }, 2000)
    }
  }, [changePressed])

  const pressEvent = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>, operation: () => void) => {
    operation();
  }

  const EventPack = {
    onTouchStart: (e: React.TouchEvent<HTMLDivElement>) => pressEvent(e, () => changePressed(true)),
    onTouchEnd: (e: React.TouchEvent<HTMLDivElement>) => pressEvent(e, () => changePressed(false)),
    onMouseEnter: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => pressEvent(e, () => changePressed(true)),
    onMouseLeave: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => pressEvent(e, () => changePressed(false))
  }

  return (
    <div className={[Style.stories__control, !isShowControllHelper ? Style.stories__control__show : ''].join(' ')}>
        <div className={Style.controller__wrapper}>
            {(currentStoryIndex !== 0 || isShowControllHelper) && (
                <div
                  className={Style.controller__outline}
                  onClick={() => changeIndex((x) => x - 1)}
                  {...EventPack}
                >
                  {isShowControllHelper ? "← Left" : ''}
                </div>
            )}
            <div
              className={Style.controller__outline}
              onClick={() => changeIndex((x) => x + 1)}
              {...EventPack}
            >
              {isShowControllHelper ? "Right →" : ''}
            </div>
        </div>
        <div
          className={[Style.controller__more, Style.controller__outline].join(" ")}
          onClick={showMoreClick}
          {...EventPack}
        >
          {isShowControllHelper ? "↑ More" : ''}
        </div>
    </div>
  )
}