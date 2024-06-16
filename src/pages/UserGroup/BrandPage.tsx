import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BrandModel } from '../../api/data-contracts';
import useApi from '../../hooks/useApi';
import { IsLoading } from '../../Components/common/InfoGroup/IsLoading';
import Item from '../../Components/user/Profile/ProfileItem';
import { Photo } from '../../Components/common/Photo';
import { ErrorReq } from '../../Components/common/InfoGroup/ErrorReq';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Arrow } from '../../Components/common/Arrow';
import { Highlights } from '../../Components/user/Stories&Hightlights/Highlights';
import useSubscribe from '../../hooks/useSubscribe';
import { Button } from '../../Components/common/Button';
import { BlockStyle } from '../../types/interfaces/IStyles';
import { ContactButtons } from '../../Components/common/ContactButtons';


export const BrandPage = () => {
    // id бренда
    const { id } = useParams();
    // загрузка данных по бренду с сервера
    const [data, isLoading, error] = useApi<'brandsDetail', BrandModel>(
        'brandsDetail', id, {}, true
    );

    // статус подписки с возможностью подписаться/отписаться
    const [subStatus, handlerSub] = useSubscribe(id as string);
    const handleClick = (event: any) => {
        handlerSub();
        event.target.disabled = true;
        const timer = setTimeout(() => {
            event.target.disabled = false;
        }, 1000)
        return () => clearTimeout(timer);
    };

    // Cтейт и колбек на разворот стрелки вниз и обратно
    const [isRotated, setIsRotated] = useState<boolean>(false);
    const handleRotate = () => {
        setIsRotated(!isRotated);
    };

    return (
        <div className='space-y-5 w-full px-3'>
            <IsLoading show={isLoading} />
            <ErrorReq show={!!error} error={error} />
            {data &&
                <>
                    <Photo id={data?.photo || null} styles={'border-4'} alt={'фото бренда'}/>
                    <div className='flex justify-between '>
                        <Link to={`${data.link}`}>{data?.name}</Link>
                        <div className='flex  space-x-2'>
                            <ContactButtons telegram={'tarasoft_a'} whatsapp={''} email={''}/>
                            <Button showButton={true} onClick={ handleClick } >
                                { subStatus ? 'Отписаться': 'Подписаться'}
                            </Button>
                        </div>
                    </div>
                    <Highlights brandId={data.guid || null} />
                    <div className='text-center'>
                        {data?.description}
                    </div>
                    <Disclosure>
                        <DisclosureButton className='w-full flex justify-between relative' onClick={handleRotate}>
                            <div className='text-lg'>Коллекции</div>
                            <div className={`absolute right-1 top-1/2 transform -translate-y-1/2 ${isRotated ? "rotate-90" : ""}`} >
                                <Arrow direct={'right'} />
                            </div>
                        </DisclosureButton>
                        <DisclosurePanel>
                            {data.collections?.map(col => {
                                return <Item path={`./../collection/${col.guid}`} key={col.guid}>{col.name}</Item>
                            })}
                        </DisclosurePanel>
                    </Disclosure>
                    <div>
                        Публикации
                    </div>
                </>
            }
        </div>
    )
};

const cursorStyle: BlockStyle = {
    hover: 'cursor-pointer'
};
