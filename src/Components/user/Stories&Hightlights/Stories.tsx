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

const STORIES = ['https://media.sproutsocial.com/uploads/2022/12/IMG_6187.png', 'https://q5n8c8q9.rocketcdn.me/wp-content/uploads/2022/01/img_61d46dbe26b3a.png', 'https://i.pinimg.com/236x/e6/65/c0/e665c028e0f8330971cea535bae4e05f.jpg']

export const Stories = ({ close, stories }: StoriesProps) => {
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const [pressedScreen, setPressedScreen] = useState(true);

    const changeIndex = (operation : (x: number) => number) => {
        if (STORIES[operation(currentStoryIndex)] !== undefined) {
            setCurrentStoryIndex(operation);
        } else {
            close(false);
        }
    }

    const src = STORIES[currentStoryIndex];

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
                container: 'fixed top-12 w-full px-2',
                panel: 'p-10'
            }}
        >
            <div {...handler}>
                <div>
                    <Progress
                        needChangeIndex={() => changeIndex((x) => x + 1)}
                        currentStoryIndex={currentStoryIndex}
                        storiesCount={STORIES.length}
                        pause={showMore || src === null || pressedScreen}
                        key={STORIES.length}
                    />
                </div>
                <div className="relative flex justify-center align-center bg-[black] rounded-[4px]">
                    <div className={Style.img__container}>
                        {
                            STORIES[currentStoryIndex] &&
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