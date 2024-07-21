import React, { useState } from 'react'
import { Modal } from '../../common/Modal';
import { Button } from '../../common/Button';


export const NFCOnboarding = () => {
    const [onboarding, setOnboarding] = useState<boolean>(true);

    return (
        <Modal
            isOpen={onboarding}
            setIsOpen={setOnboarding}
            swipeable={false}
            additionalStyles={{
                container: 'fixed inset-0 overflow-y-auto',
                panel: 'h-screen bg-violet pb-16 flex items-end justify-center'
            }}
        >
            <img src='images/closeBtn.png' alt='крестик' className='absolute right-2 top-3' onClick={() => setOnboarding(false)}></img>
            <img src='images/nfc_onboarding.png' alt='телефон в руке'></img>
            <div className='mx-4'>
                <h1 className='text-black text-4xl '>Как отсканировать NFC-метку</h1>
                <p className='mt-3 mb-10 text-black'>Поднесите левый верхний угол вашего смартфона к NFC-метке. Убедитесь, 
                    что метка находится в непосредственной близости от указанной зоны для успешного сканирования.
                    Не забудьте включить NFC-reader на своем устройстве.
                </p>
                <div className='w-3/4 mx-auto'>
                    <Button showButton={true} onClick={() => setOnboarding(false)}>
                        Начать сканирование
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
