import React, { useMemo, useState} from 'react'
import { Modal } from '../../common/Modal'
import Style from './Stories/style.module.css'
import { More } from './Stories/More'
import { Progress } from './Stories/Progress'
import { Controll } from './Stories/Control';
import { useSwipeable } from 'react-swipeable';
import useApi from '../../../hooks/useApi'
import { retrieve } from '../../../utils/encryption'
import { HighlightStoryModel } from '../../../api/data-contracts'

interface StoriesProps {
    close: React.Dispatch<React.SetStateAction<boolean>>;
    stories: string[]
}

export const Stories = ({ close, stories }: StoriesProps) => {
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const [pressedScreen, setPressedScreen] = useState(true);

    const token = useMemo(() => retrieve("token"), []);
    const [ data, isLoading, error ] = useApi<'storiesHighlightsDetail', any>('storiesHighlightsDetail', stories[currentStoryIndex], { headers: { Authorization: `Bearer ${token}` } }, true)

    const changeIndex = (operation : (x: number) => number) => {
        if (stories[operation(currentStoryIndex)] !== undefined) {
            setCurrentStoryIndex(operation);
        } else {
            close(false);
        }
    }

    const src = `https://vne.su:8081/api/Files/${data?.fileGuid}`;

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

    if (data === null) {
        return <div></div>;
    }

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
                        pause={showMore || src === null || pressedScreen || isLoading}
                        key={stories.length}
                    />
                </div>
                {
                    isLoading ? (
                        <div className="text-[white] h-[100vh] w-full flex items-center justify-center">
                            <div>ЗАГРУЗКА...</div>
                        </div>
                    )
                    :
                    (
                        <>
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
                        </>
                    )
                }
            </div>
        </Modal>
    )
}