import React, { useState} from 'react'
import { Modal } from '../../common/Modal'
import Style from './Stories/style.module.css'
import { More } from './Stories/More'
import { Progress } from './Stories/Progress'
import { Controll } from './Stories/Control';
import { useSwipeable } from 'react-swipeable';

interface StoriesProps {
    close: React.Dispatch<React.SetStateAction<boolean>>;
    stories: string[]
}

export const Stories = ({ close, stories }: StoriesProps) => {
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const [pressedScreen, setPressedScreen] = useState(true);

    const changeIndex = (operation : (x: number) => number) => {
        if (stories[operation(currentStoryIndex)] !== undefined) {
            setCurrentStoryIndex(operation);
        } else {
            close(false);
        }
    }

    const src = `https://vne.su:8081/api/Files/${stories[currentStoryIndex]}`;

    const handler = useSwipeable({
        onSwipedUp: () => {
            if (!showMore) {
                setShowMore(true)
            }
        },
        onSwipedDown: () => {
            if (showMore) {
                setShowMore(false)
            } else {
                close(false)
            }
        },
        delta: 100,
    })

    const share = () => {
        if (navigator.clipboard) {
            // Пока просто копирую ссылку на бренд
            navigator.clipboard.writeText(window.location.href)
        }
    }

    return (
        <Modal
            isOpen={true}
            setIsOpen={close}
            swipeable={false}
            additionalStyles={{
                container: 'fixed top-0 w-full h-full p-0',
                panel: 'p-0'
            }}
        >
            <div {...handler} className='relative'>
                <div className="absolute top-4 left-2 right-2 z-[15]">
                    <Progress
                        needChangeIndex={() => changeIndex((x) => x + 1)}
                        currentStoryIndex={currentStoryIndex}
                        storiesCount={stories.length}
                        pause={showMore || src === null || pressedScreen}
                        key={stories.length}
                    />
                </div>
                <div className="relative flex justify-center align-center bg-[black] rounded-[4px]">
                    <div className={Style.img__container}>
                        {
                            stories[currentStoryIndex] &&
                            src &&
                            <img rel="preload" className="h-full w-full object-contain object-center" src={src} alt='asd'/>}
                    </div>
                    <Controll
                        changePressed={(v: boolean) => setPressedScreen(v)}
                        changeIndex={changeIndex}
                        currentStoryIndex={currentStoryIndex}
                        showMoreClick={() => setShowMore(true)}
                    />
                    {
                        showMore && <More close={() => setShowMore(false)} />
                    }
                </div>
                <div className={['p-[5px] rounded-br-[5px] rounded-bl-[5px] flex justify-center gap-[10px]', showMore ? 'bg-white' :'bg-black'].join(" ")}>
                    <button onClick={share} className={
                        ['font-bold', showMore ? 'text-[black]' : 'text-[white]'].join(' ')
                    }>
                        Поделиться
                    </button>
                </div>
            </div>
        </Modal>
    )
}