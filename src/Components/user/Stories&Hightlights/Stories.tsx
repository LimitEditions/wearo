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
    const [loadingProgress, setLoadingProgress] = useState<number[]>([]);
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
        beforeChange: (oldIndex: number, newIndex: number) => {
            setLoadingProgress(prev => {
                const updated = [...prev];
                updated[oldIndex] = 100;
                return updated;
            });
        },
        afterChange: (currentSlide: number) => {
            if (intervalId.current) clearInterval(intervalId.current);
            startLoading(currentSlide);
            if (currentSlide === activeStories.length - 1) {
                setTimeout(() => setOpen(false), 5000);
            }
        },
    };

    const startLoading = (currentSlide: number) => {
        let progress = 0;
        setLoadingProgress(prev => {
            const updated = [...prev];
            updated[currentSlide] = progress;
            return updated;
        });
    
        intervalId.current = setInterval(() => {
            progress += 1;
            setLoadingProgress(prev => {
                const updated = [...prev];
                updated[currentSlide] = progress;
                return updated;
            });
            if (progress >= 100) {
                if (intervalId.current) clearInterval(intervalId.current);
            }
        }, 50);
    }

    useEffect(() => {
        if (open) {
            setLoadingProgress(Array(stories.length).fill(0));
            startLoading(0);
        } else {
            setLoadingProgress([]);
            if (intervalId.current) clearInterval(intervalId.current);
        }
        return () => {
            if (intervalId.current) clearInterval(intervalId.current);
        };
    }, [open, stories.length]);

    const isStoryActive = (createDT: string) => {
        const currentTime = new Date().getTime();
        const storyTime = new Date(createDT).getTime();
        const diff = currentTime - storyTime;
        return diff < 86400000;
    };

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
                    <div className="w-3/4 mx-auto h-1 bg-gray-300 flex space-x-1">
                        {Array.from({ length: stories.length }).map((_, index) => (
                            <div
                                key={index}
                                className="relative h-full bg-gray-900 flex-1"
                            >
                                <div 
                                    className="absolute left-0 top-0 h-full bg-white transition-all duration-100"
                                    style={{ width: `${loadingProgress[index]}%` }}
                                ></div>
                            </div>
                        ))}
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
