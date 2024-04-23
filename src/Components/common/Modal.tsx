import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';
import { IModalProps } from '../../types/interfaces/componentsProps/IModalProps';


export const Modal = ({isOpen, setIsOpen, title, children, additionalStyles}: IModalProps) => {

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className={getStyles(dialogStyle)} onClose={() => setIsOpen(false)}>
                {/* анимация затемнения фона */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className={getStyles(backgroundStyle)} />
                </Transition.Child>

                <div className={getStyles(additionalStyles? additionalStyles: containerStyle)} >
                    {/* анимация появления и исчезновения окна */}
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className={additionalStyles? getStyles(panelStyle): getStyles(panelStyle) + ' max-w-md rounded-b-2xl'}>
                            <Dialog.Title as="h3" className={getStyles(titleStyle)}>
                                {title}
                            </Dialog.Title>
                            <div className={getStyles(contentStyle)}>
                                {children}
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
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
    container: 'rounded-t-2xl',
    spacing: 'p-6',
    background: 'bg-white',
    text: 'text-left align-middle',
    transitionsAnimation: 'shadow-xl transition-all'
};

const titleStyle: BlockStyle = {
    text: 'text-lg font-medium leading-6 text-gray-900'
};

const contentStyle: BlockStyle = {
    spacing: 'mt-2',
    text: 'text-sm text-gray-500',
};