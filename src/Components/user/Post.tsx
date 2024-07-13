import React, { useEffect, useState } from 'react'
import useApi from '../../hooks/useApi';
import { BrandModel, PostModel } from '../../api/data-contracts';
import { Photo } from '../common/Photo';
import { useNavigate } from 'react-router-dom';
import { Switch } from '@headlessui/react';


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

    const [opacity, setOpacity] = useState<number>(0);
    const [lines, setLines] = useState<string>('line-clamp-2');
    const [slideUp, setSlideUp] = useState<string>('line-clamp-2');
    const readingMode = () => {
        setLines('');
        setSlideUp('animate-slide-up');
        setOpacity(40);
    };
    
    // переключатель яркости фона
    const [enabledSwitch, setEnabledSwitch] = useState<boolean>(false);
    useEffect(() => {
        enabledSwitch ? setOpacity(70): setOpacity(0)
    }, [enabledSwitch]);


    // подгружаем предварительно фото для вычисления соотношения сторон
    // const [aspectRatio, setAspectRatio] = useState<number | null>(null);
    // useEffect(() => {
    //     if (data && data.file?.guid) {
    //         const img = new Image();
    //         img.src = `http://vne.su:8081/api/Files/${data.file.guid}`;
    //         img.onload = () => {
    //         setAspectRatio(100 / (img.width / img.height));
    //         };
    //     }
    // }, [data]);
    

    return (
        <div className="w-full pb-2">
            {!error && data && (
                <div className="relative w-full bg-light-gray" style={{ paddingBottom: "133%" }}>
                    <div className='absolute top-2 left-7 z-10'>
                        <Switch
                            checked={enabledSwitch}
                            onChange={setEnabledSwitch}
                            className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-white/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
                        >
                            <span
                                aria-hidden="true"
                                className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                            />
                        </Switch>
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Photo
                        id={data.file?.guid ?? null}
                        styles="object-contain max-h-full"
                        alt="изображение поста"
                        />
                        <div className={`absolute inset-0 bg-black opacity-${opacity}`}></div>
                    </div>
                    <div className={`absolute bottom-4 left-8 w-3/4 animate-fade-in ${slideUp}`}>
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
                        <p className={`text-white text-sm overflow-hidden ${lines}`} onClick={readingMode}>{data.text}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
