import React, { useEffect, useState } from 'react'
import { NFCReader } from '../../Components/user/NFC/NFCReader';
import { NFCOnboarding } from '../../Components/user/NFC/NFCOnboarding';
import { Modal } from '../../Components/common/Modal';
import { ResultInModal } from '../../Components/common/ResultInModal';
import { Button } from '../../Components/common/Button';


export const ScanPage = () => {
    const [modal, setModal] = useState<'success' | 'failure' | null>(null);
    const handleModal = () => {
        setModal(null)
    };

    useEffect(() => {
        if(modal === 'success') {
            setTimeout(() => {handleModal()}, 4000)
        };
    }, [modal]);

    return (
        <>

            <NFCReader />
            <NFCOnboarding />
            
            <Modal
                isOpen={modal !== null}
                setIsOpen={handleModal}
                swipeable={true}
            >
                {modal === 'success' && 
                    <ResultInModal message={'Оригинальность подтверждена'} path="/images/successful.png"/>}
                {modal === 'failure' && 
                    <ResultInModal message={'Оригинальность не подтверждена'} path="/images/failure.png"/>}
                <div className='w-3/4 mx-auto my-4'>
                    <Button showButton={modal === 'failure'} onClick={handleModal}>Повторить</Button>
                </div>
            </Modal>
        </>
    );
};
