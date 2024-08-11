import React, { useEffect, useState } from 'react'
import useApi from '../../hooks/useApi';
import { BrandModel, PostModel } from '../../api/data-contracts';
import { Photo } from '../common/Photo';
import { useNavigate } from 'react-router-dom';
import { Switcher } from '../common/Switcher';
import { IReading, readingOff, readingOn, readingOnDark } from '../../types/interfaces/IReading';


export const Post = ({ id }: { id: string }) => {
    const navigate = useNavigate();
    // данные по посту
    const [data, , error] = useApi<'postsDetail', PostModel>(
        'postsDetail', id, {}, true
    );
    
    // данные по бренду
    const [getInfo, setGetInfo] = useState<boolean>(false)
    const [brandInfo, ,] = useApi<'brandsDetail', BrandModel>(
        'brandsDetail', data?.brandGuid, {}, getInfo
    );
    useEffect(() => {
        if(data) {setGetInfo(true)};
    }, [data])

    const [readingMode, setReadingMode] = useState<IReading>(readingOff)

    // колбек на изменение вышеуказанных стейтов
    const hanldeReadingMode = () => {
        if(readingMode.state === 'off') {
            setReadingMode(readingOn);
        } else {
            setReadingMode(readingOff);
        };
    };
    
    // переключатель яркости фона
    const [enabledSwitch, setEnabledSwitch] = useState<boolean>(false);
    useEffect(() => {
        enabledSwitch ? setReadingMode(readingOnDark): setReadingMode(readingOff)
    }, [enabledSwitch]);


    return (
        <div className="w-full pb-2">
            {!error && data && (
                <div className="relative w-full bg-light-gray" style={{ paddingBottom: "175%" }}>
                    <div className='absolute top-2 left-7 z-10'>
                        <Switcher enabledSwitch={enabledSwitch} setEnabledSwitch={setEnabledSwitch} />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Photo
                        id={data.file?.guid ?? null}
                        styles="object-contain max-h-full"
                        alt="изображение поста"
                        />
                        <div className={`absolute inset-0 bg-black opacity-${readingMode.opacity}`}></div>
                    </div>
                    <div className={`absolute bottom-4 left-8 w-3/4 animate-fade-in ${readingMode.slide}`}>
                        <div className="flex space-x-3 mb-3 cursor-pointer">
                            <Photo
                                id={brandInfo?.photo ?? null}
                                styles="rounded-full w-16"
                                alt="изображение логотипа бренда"
                            />
                            <div
                                onClick={() => navigate(`.././brand/${data.brandGuid}`)}
                                className="text-white text-sm my-auto"
                            >
                                {brandInfo?.name}
                            </div>
                        </div>
                        <p className={`text-white text-sm overflow-hidden ${readingMode.lines}`} onClick={hanldeReadingMode}>{data.text}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
