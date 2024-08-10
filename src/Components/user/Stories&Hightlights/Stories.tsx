import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { HighlightStoryModel } from '../../../api/data-contracts';
import { Modal } from '../../common/Modal';
import ProgressBar from '@ramonak/react-progress-bar';


// export const Stories = ({ highlightStories, open, setOpen }: 
//     { 
//         highlightStories: HighlightStoryModel[], 
//         open: boolean, 
//         setOpen: React.Dispatch<React.SetStateAction<boolean>>
//     }
// ) => {
//     // Извлечение историй из пришедших данных
//     const stories = useMemo(() => highlightStories.map(el => el.story), [highlightStories]);
//     const [paused, setPaused] = useState<boolean>(false); // Состояние паузы
//     const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0); // Индекс текущего слайда
//     const [loadingProgress, setLoadingProgress] = useState<number[]>(Array(stories.length).fill(0)); // Прогресс загрузки
//     const intervalId = useRef<ReturnType<typeof setInterval> | null>(null); // Идентификатор интервала
//     const lastSlideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null); // Таймаут для последнего слайда
//     const sliderRef = useRef<Slider>(null); // Референс для слайдера

//     // Проверка, активна ли история
//     const isStoryActive = (createDT: string) => {
//         const currentTime = new Date().getTime();
//         const storyTime = new Date(createDT).getTime();
//         const diff = currentTime - storyTime;
//         return diff < 86400000;
//     };

//     // Фильтрация активных историй
//     const activeStories = stories.filter(story => isStoryActive(story?.createDT as string));

//     // Функция для начала загрузки прогресса
//     const startLoading = useCallback(() => {
//         let progress = 0;
//         setLoadingProgress(prev => {
//             const updated = [...prev];
//             updated[currentSlideIndex] = progress;
//             return updated;
//         });

//         intervalId.current = setInterval(() => {
//             if (!paused) {
//                 progress += 1;
//                 setLoadingProgress(prev => {
//                     const updated = [...prev];
//                     updated[currentSlideIndex] = progress;
//                     return updated;
//                 });

//                 // Если прогресс достиг 100%, переключаем на следующий слайд или закрываем модальное окно
//                 if (progress >= 100) {
//                     if (intervalId.current) clearInterval(intervalId.current);
//                     if (currentSlideIndex < activeStories.length - 1) {
//                         sliderRef.current?.slickNext();
//                     } else if (currentSlideIndex === activeStories.length - 1) {
//                         console.log('2')
//                         lastSlideTimeout.current = setTimeout(() => {
//                             setOpen(false);
//                         }, 500);
//                     }
//                 }
//             }
//         }, 50);
//     }, [paused, setOpen, activeStories.length, currentSlideIndex]);

//     // Эффект для запуска загрузки прогресса при открытии модального окна
//     useEffect(() => {
//         if (open) {
//             setLoadingProgress(Array(activeStories.length).fill(0));
//             startLoading();
//         } else {
//             setLoadingProgress([]);
//             setCurrentSlideIndex(0);
//             if (intervalId.current) clearInterval(intervalId.current);
//             if (lastSlideTimeout.current) clearTimeout(lastSlideTimeout.current);
//         }

//         return () => {
//             if (intervalId.current) clearInterval(intervalId.current);
//             if (lastSlideTimeout.current) clearTimeout(lastSlideTimeout.current);
//         };
//     }, [open, activeStories.length, startLoading]);

//     // Настройки для слайдера
//     const settings = {
//         dots: false,
//         infinite: false,
//         autoplay: false,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         afterChange: (currentSlide: number) => {
//             setCurrentSlideIndex(currentSlide);
//             if (intervalId.current) clearInterval(intervalId.current);
//             if (lastSlideTimeout.current) clearTimeout(lastSlideTimeout.current);
//             if (!paused) {
//                 startLoading();
//             }
//         },
//     };

//     // Обработчик клика для установки паузы
//     const handleClick = () => {
//         setPaused(!paused);
//         if (!paused) {
//             setLoadingProgress(prev => {
//                 const updated = [...prev];
//                 updated[currentSlideIndex] = 0;
//                 return updated;
//             });
//         } else {
//             startLoading();
//         }
//     };

//     return (
//         <>
//             <Modal 
//                 isOpen={open} 
//                 setIsOpen={setOpen} 
//                 swipeable={true} 
//                 additionalStyles={{
//                     container: 'fixed top-12 w-full px-2',
//                     panel: 'p-0'
//                 }}
//             >
//                 <div className="bg-inherit">
//                     <button 
//                         className="absolute right-5 top-5 text-white text-2xl leading-none z-50"
//                         onClick={() => setOpen(false)}
//                     >
//                         &times;
//                     </button>
//                     <div className="w-3/4 mx-auto h-1 bg-white-fon flex space-x-1">
//                         {Array.from({ length: activeStories.length }).map((_, index) => (
//                             <div key={index} className="relative h-full bg-medium-gray flex-1">
//                                 <ProgressBar 
//                                     completed={loadingProgress[index]} 
//                                     height="100%"
//                                     baseBgColor="#797C8E"
//                                     bgColor="#F9F8FF"
//                                     isLabelVisible={false}
//                                     transitionDuration="0.05s"
//                                     animateOnRender={true}
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                     <Slider {...settings} ref={sliderRef}>
//                         {activeStories.map((story, index) => (
//                             <div 
//                                 key={story?.guid} 
//                                 className="flex justify-center items-center w-full h-screen"
//                                 onClick={handleClick}
//                             >
//                                 <div className="relative w-full max-w-screen-sm" style={{ paddingTop: "177.78%" }}>
//                                     <img src={`${story?.fileGuid}`} alt="Story" className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 object-contain" />
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             </Modal>
//         </>
//     );
// };

import Style from './Stories/style.module.css'
import { More } from './Stories/More'
import { Progress } from './Stories/Progress'
import { Controll } from './Stories/Control';
import { useImage } from '../../../hooks/useImage';

interface StoriesProps {
    close: React.Dispatch<React.SetStateAction<boolean>>;
    stories: string[]
}

const STORIES = ['https://media.sproutsocial.com/uploads/2022/12/IMG_6187.png', 'https://q5n8c8q9.rocketcdn.me/wp-content/uploads/2022/01/img_61d46dbe26b3a.png', 'https://i.pinimg.com/236x/e6/65/c0/e665c028e0f8330971cea535bae4e05f.jpg']

export const Stories = ({ close, stories }: StoriesProps) => {
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

    const [showMore, setShowMore] = useState(false);
    const [pressedScreen, setPressedScreen] = useState(false);

    const changeIndex = (operation : (x: number) => number) => {
        if (STORIES[operation(currentStoryIndex)] !== undefined) {
            setCurrentStoryIndex(operation);
        } else {
            close(false);
        }
    }

    const src = useImage(STORIES[currentStoryIndex])

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
            <div>
                <div onClick={() => close(false)}>X</div>
                <Progress needChangeIndex={() => changeIndex((x) => x + 1)} pause={showMore || src === null || pressedScreen} key={currentStoryIndex}/>
            </div>
            <div className={Style.stories}>
                <div className={Style.img__container}>
                    {STORIES[currentStoryIndex] && src && <img rel="preload" className={Style.img__item} src={src} alt='asd'/>}
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
        </Modal>
    )
}