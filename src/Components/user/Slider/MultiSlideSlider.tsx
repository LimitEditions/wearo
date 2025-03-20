import Slider from 'react-slick';
import { Photo } from '../../common/Photo';
import { HighlightModel, HighlightModelDataResult } from '../../../api/data-contracts';
import { useApiNew } from '../../../hooks/useApi';
import { useState } from 'react';
import { Stories } from '../Stories&Hightlights/Stories';

export const MultiSlideSlider = (id: {id: string}) => {
    const settingsSlider = {
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    }

    // Хайлайты бренда
    const [activeHighlight, setActiveHighlight] = useState<string | null>(null);
    const { data: highlightsData } = useApiNew<HighlightModelDataResult>("storiesHighlightsList", {
        token: true, 
        immediate: true, 
        body: { BrandGuid: id }
    });
    const highlights = highlightsData?.data ?? [];

    return (
        <Slider {...settingsSlider}>
            {highlights?.map((elem, ind) => (
                <div onClick={() => setActiveHighlight(elem?.mainPhotoGuid || null)} key={ind} className="p-[4px]">
                    <Photo
                        id={elem.mainPhotoGuid || null}
                        styles="w-[150px] h-[180px] rounded-[10px] object-cover"
                        alt="Хайлайт бренда"
                    />
                    <p className="text-[12px]">{elem.name}</p>
                    {activeHighlight === elem.mainPhotoGuid && (
                        <Stories
                            close={() => setActiveHighlight(null)}
                            stories={elem.storiesGuids as string[]}
                        />
                    )}
                </div>
            ))}
        </Slider>
    );
};
