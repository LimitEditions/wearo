import React, { Fragment } from 'react'
import { Button } from './Button'
import { Input } from './Input'
import getStyles from '../../utils/getStyles';
import { BlockStyle } from '../../types/interfaces/IStyles';
import { Transition } from '@headlessui/react';

export const SearchInput = ({show, setShow}: { show: boolean, setShow: () => void }) => {
    return (
        <Transition show={show} as={Fragment}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-700"
                enterFrom="opacity-0 translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="ease-in duration-700"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-full"
            >
                <div className={getStyles(containerStyle)}>
                    <Input className={getStyles(inputStyle)} type='text' placeholder='Поиск'/>
                    <Button showButton={true} onClick={setShow} className={getStyles(btnStyle)}>Отменить</Button>
                </div>
            </Transition.Child>
        </Transition>
    );
};

const containerStyle: BlockStyle = {
    container: 'flex absolute w-full',
    spacing: 'm-0 px-3',
};

const btnStyle: BlockStyle = {
    container: 'w-1/4',
    text: 'text-sm'
};

const inputStyle: BlockStyle = {
    container: 'w-3/4',
    spacing: 'p-1',
    border: "rounded-md",
};
