import React, { useState, useEffect, useMemo } from 'react';
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

    const settings = {
        dots: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: () => setLoadingProgress(0),
        afterChange: () => incrementLoading()
    };

    const incrementLoading = () => {
        const interval = setInterval(() => {
            setLoadingProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return oldProgress + 1;
            });
        }, 45);
    };

    useEffect(() => {
        incrementLoading();
        return () => setLoadingProgress(0);
    }, []);

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
                    container: 'fixed top-12 w-full px-1' ,
                    panel: 'p-0'
                }}
            >
                <div className="bg-inherit rounded-2xl">
                    <div className="w-3/4 mx-auto h-1 bg-gray-500">
                        <div className="h-full bg-yellow-300" style={{ width: `${loadingProgress}%`, transition: 'width 0.1s linear' }}></div>
                    </div>
                    <Slider {...settings}>
                        {activeStories.map((story) => (
                            <div key={story?.guid} className="h-full">
                                <img src={`${story?.fileGuid}`} alt="Story" className=" rounded-2xl" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </Modal>
        </>
    );
};
