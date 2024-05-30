import React, { useState, useEffect, useMemo, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { HighlightStoryModel } from '../../../api/data-contracts';
import { Modal } from '../../common/Modal';


export const Stories = ({ highlightStories, open, setOpen }: 
    { 
        highlightStories: HighlightStoryModel[], 
        open: boolean, 
        setOpen: React.Dispatch<React.SetStateAction<boolean>>
    }
) => {
    const [loadingProgress, setLoadingProgress] = useState<number>(0);
    const stories = useMemo(() => highlightStories.map(el => {
        return el.story
    }), [highlightStories]);
    const intervalId = useRef<ReturnType<typeof setInterval> | null>(null);

    const settings = {
        dots: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: () => setLoadingProgress(0),
        afterChange: (currentSlide: number) => {
            setLoadingProgress(0);  // Сброс прогресса при каждом переключении слайда
            if(intervalId.current) clearInterval(intervalId.current);  // Остановка текущего интервала
            startLoading();  // Запуск нового интервала
            if (currentSlide === activeStories.length - 1) {
                setTimeout(() => setOpen(false), 5000); // Дать последнему слайду показаться перед закрытием
            };
        }
    };

    const startLoading = () => {
        let intCur = intervalId.current;
        if (intCur) clearInterval(intCur);  // Очистка предыдущего интервала, если он существует
    
        intCur = setInterval(() => {
            setLoadingProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    if (intCur) clearInterval(intCur);
                    return 100;
                }
                return oldProgress + 1;
            });
        }, 45);
    }

    useEffect(() => {
        if (open) {
            startLoading();
        } else {
            setLoadingProgress(0);
            if (intervalId.current) clearInterval(intervalId.current);
        };
        if (intervalId.current) {
            return clearInterval(intervalId.current);
        };
    }, [open]);


    const isStoryActive = (createDT: string) => {
        const currentTime = new Date().getTime();
        const storyTime = new Date(createDT).getTime();
        const diff = currentTime - storyTime;
        return diff < 86400000;
    };


    // сортировка активных сторисов по датам
    const activeStories = stories.filter(story => isStoryActive(story?.createDT as string));


    return (
        <>
            <Modal 
                isOpen={open} 
                setIsOpen={setOpen} 
                swipeable={true} 
                additionalStyles={{
                    container: 'fixed top-12 w-full px-2' ,
                    panel: 'p-0'
                }}
            >
                <div className="bg-inherit">
                    <button 
                        className="absolute right-5 top-5 text-white text-2xl leading-none z-50"
                        onClick={() => setOpen(false)}
                    >
                        &times; 
                    </button>
                    <div className="w-3/4 mx-auto h-1 bg-gray-500">
                        <div className="h-full bg-white" style={{ width: `${loadingProgress}%`, transition: 'width 0.1s linear' }}></div>
                    </div>
                    <Slider {...settings}>
                        {activeStories.map((story) => (
                        <div key={story?.guid} className="flex justify-center items-center w-full h-screen">
                            <div className="relative w-full max-w-screen-sm" style={{ paddingTop: "177.78%" }}>
                                <img src={`${story?.fileGuid}`} alt="Story" className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 object-contain" />
                            </div>
                        </div>
                        
                        ))}
                    </Slider>
                </div>
            </Modal>
        </>
    );
};
