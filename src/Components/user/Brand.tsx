import React, { useState } from 'react'
import { BrandModel } from '../../api/data-contracts';
import useSubscribe from '../../hooks/useSubscribe';
import { Link } from 'react-router-dom';
import { Photo } from '../common/Photo';
import { ContactButtons } from '../common/ContactButtons';
import { Button } from '../common/Button';
import { Highlights } from './Stories&Hightlights/Highlights';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Arrow } from '../common/Arrow';
import Item from './Profile/ProfileItem';
import { Modal } from '../common/Modal';
import { RingLoader } from 'react-spinners';


export const Brand = ({ brandInfo }: { brandInfo: BrandModel}) => {
    // статус подписки с возможностью подписаться/отписаться
    const [subStatus, handlerSub] = useSubscribe(brandInfo.guid as string);
    const [modal, setModal] = useState<boolean>(false);
    const handleClick = (event: any) => {
        handlerSub();
        // отключаем кнопку и выводим модальное на передний план
        setModal(true);
        event.target.disabled = true;
        const timer = setTimeout(() => {
            setModal(false);
            event.target.disabled = false;
        }, 5000)
        return () => clearTimeout(timer);
    };

    // Cтейт и колбек на разворот стрелки вниз и обратно
    const [isRotated, setIsRotated] = useState<boolean>(false);
    const handleRotate = () => {
        setIsRotated(!isRotated);
    };
    
    return (
        <>
            <Photo id={brandInfo?.photo || null} styles={'border-4'} alt={'фото бренда'}/>
            <div className='flex justify-between '>
                <Link to={`${brandInfo.link}`} target="_blank" rel="noopener noreferrer">{brandInfo?.name}</Link>
                <div className='flex space-x-2'>
                    <ContactButtons 
                        telegram={brandInfo.telegramId || ''} 
                        whatsapp={brandInfo.whatsappId || ''} 
                        email={brandInfo.email || ''}
                    />
                    <Button showButton={true} onClick={ handleClick }>
                        { subStatus ? 'Отписаться': 'Подписаться'}
                    </Button>
                </div>
            </div>
            <Highlights brandId={brandInfo.guid || null} />
            <div className='text-center'>
                {brandInfo?.description}
            </div>
            <Disclosure>
                <DisclosureButton className='w-full flex justify-between relative' onClick={handleRotate}>
                    <div className='text-lg'>Коллекции</div>
                    <div className={`absolute right-1 top-1/2 transform -translate-y-1/2 ${isRotated ? "rotate-90" : ""}`} >
                        <Arrow direct={'right'} />
                    </div>
                </DisclosureButton>
                <DisclosurePanel>
                    {brandInfo.collections?.map(col => {
                        return <Item path={`/collection/${col.guid}`} key={col.guid}>{col.name}</Item>
                    })}
                </DisclosurePanel>
            </Disclosure>
            <Item path={`/products/${brandInfo.guid}`}>Изделия</Item>
            <div>
                Публикации
            </div>
            <Modal
                isOpen={modal}
                setIsOpen={setModal}
                swipeable={false}
                additionalStyles={{panel: 'w-full bg-transparent flex justify-center'}}
            >
                <RingLoader color='#F9F8FF' loading={modal} size={45} speedMultiplier={0.75} />
            </Modal>
        </>
    );
};
