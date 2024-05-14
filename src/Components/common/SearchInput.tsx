import React, { Fragment, useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'
import getStyles from '../../utils/getStyles';
import { BlockStyle } from '../../types/interfaces/IStyles';
import { Transition } from '@headlessui/react';

export const SearchInput = ({show, setShow, search}: { show: boolean, setShow: () => void, search: (value:string) => void }) => {
    const [value, setValue] = useState<string>('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        search(value);
    };

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
                <form className={getStyles(containerStyle)} onSubmit={handleSubmit}>
                    <Input 
                        className={getStyles(inputStyle)} 
                        type='text' 
                        placeholder='Поиск'
                        value={value}
                        onChange={handleChange}
                        />
                    <Button showButton={true} onClick={setShow} className={getStyles(btnStyle)}>Отменить</Button>
                </form>
            </Transition.Child>
        </Transition>
    );
};

const containerStyle: BlockStyle = {
    container: 'flex w-full absolute',
    spacing: ' mx-2',
};

const btnStyle: BlockStyle = {
    container: 'w-1/4',
    text: 'text-sm'
};

const inputStyle: BlockStyle = {
    container: 'w-3/4',
    spacing: 'p-1',
    border: "border border-gray-300 rounded-md",
};
