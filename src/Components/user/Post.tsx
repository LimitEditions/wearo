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
        <div className="space-y-10 py-5 w-full">
            {!error && data && (
                <div className="relative w-full" style={{ paddingBottom: `153%`}}> 
                {/* <div className="relative w-full" style={{ paddingBottom: `${aspectRatio}%`}}>  */}
                    <div className="absolute inset-0">
                        <Photo id={data.file?.guid || null} styles="w-full h-full" alt="изображение поста" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full px-2 pb-5">
                        <div className='flex space-x-3 mb-3'>
                            <Photo id={brandInfo?.photo || null} styles={'rounded-full w-16'} alt='изображение логотипа бренда'/>
                            <div onClick={() => navigate(`.././brand/${data.brandGuid}`)} className='text-white text-sm my-auto'>{brandInfo?.name}</div>
                        </div>
                        <p className="text-white pr-16 text-justify">{data.text}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
