import React from 'react'

export const NFCAni = () => {
    return (
        <div className='relative h-[calc(70vh-100px)] mb-16'>
            <div className='absolute w-1/3 top-32 left-1/2 transform -translate-x-1/2'>
                <img src="images/nfc.png" alt="nfc-метка" />
            </div>
            <div className='absolute w-1/3 bottom-16 right-1 animate-slide-diagonal'>
                <img src="images/nfc_phone.png" alt="телефон" />
            </div>
            <p className='absolute w-full px-24 bottom-0 text-center text-lg text-medium-gray'>Поднесите смартфон к NFC-метке</p>
        </div>
    );
};
