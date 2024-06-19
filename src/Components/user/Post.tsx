import React, { useEffect, useState } from 'react'
import useApi from '../../hooks/useApi';
import { BrandModel, PostModel } from '../../api/data-contracts';
import { Photo } from '../common/Photo';
import { useNavigate } from 'react-router-dom';


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
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Photo
                        id={data.file?.guid ?? null}
                        styles="object-contain max-h-full"
                        alt="изображение поста"
                        />
                    </div>
                    <div className="absolute bottom-4 left-8 w-3/4">
                        <div className="flex space-x-3 mb-3">
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
                        <p className="text-white text-sm">{data.text}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
