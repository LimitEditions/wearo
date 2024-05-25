import React, { Fragment, useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';
import { IModalProps } from '../../types/interfaces/componentsProps/IModalProps';
import { useSwipeable } from 'react-swipeable';


export const Modal = ({isOpen, setIsOpen, title, children, additionalStyles, swipeable}: IModalProps) => {
    const [positionY, setPositionY] = useState(0);  // Для отслеживания позиции по оси Y

    const handlers = useSwipeable({
        onSwiping: (eventData) => {
            setPositionY(eventData.deltaY); // Обновление позиции по мере свайпа
        },
        onSwiped: (eventData) => {
            if (eventData.deltaY > 100) { // Если свайп достаточно длинный, закрыть модальное окно
                setIsOpen(false);
            };
            // Ставим таймер, чтобы не видеть возврат окна в исходное положение на странице
            setTimeout(() => {
                setPositionY(0); // Сброс позиции после завершения свайпа
            }, 300)
            
        },
        trackMouse: true
    });

    const modalStyle = {
        transform: `translateY(${positionY}px)`,
        transition: positionY === 0 ? 'transform 0.2s ease-out' : 'none'
    };


    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className={getStyles(dialogStyle)} onClose={() => setIsOpen(false)}>
                {/* анимация затемнения фона */}
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-700"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className={getStyles(backgroundStyle)} />
                </TransitionChild>

                <div className={additionalStyles?.container? additionalStyles.container: getStyles(containerStyle)} {...(swipeable? handlers: {})} style={modalStyle}>
                    {/* анимация появления и исчезновения окна */}
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-500"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <DialogPanel className={additionalStyles?.panel? additionalStyles.panel: getStyles(panelStyle)}>
                            <DialogTitle as="h3" className={getStyles(titleStyle)}>
                                {title}
                            </DialogTitle>
                            <div className={getStyles(contentStyle)}>
                                {children}
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    );
};

const dialogStyle: BlockStyle = {
    container: 'relative z-10',
};

const backgroundStyle: BlockStyle = {
    container: 'fixed inset-0 ',
    background: 'bg-black/50'
};

const containerStyle: BlockStyle = {
    container: 'fixed inset-0 overflow-y-auto flex min-h-full items-center justify-center',
    spacing: 'p-10',
    text: 'text-center',
};

const panelStyle: BlockStyle = {
    blockSize: 'w-full transform overflow-hidden',
    container: 'rounded-2xl',
    spacing: 'p-6',
    background: 'bg-white',
    text: 'text-left align-middle',
    transitionsAnimation: 'shadow-xl transition-all'
};

const titleStyle: BlockStyle = {
    text: 'text-lg font-medium leading-6 text-gray-900'
};

const contentStyle: BlockStyle = {
    text: 'text-sm text-gray-500',
};
