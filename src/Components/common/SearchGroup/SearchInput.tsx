import React, { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Button } from '../Button'
import getStyles from '../../../utils/getStyles';
import { BlockStyle } from '../../../types/interfaces/IStyles';
import { Transition, TransitionChild } from '@headlessui/react';
import { Input } from '../InputGroup/Input';


// поисковая строка и ее анимация
export const SearchInput = ({show, setShow, callback }: { show: boolean, setShow: () => void, callback: Dispatch<SetStateAction<string>> }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        callback(inputValue);
    };
    
    return (
        <Transition show={show} as={Fragment}>
            <TransitionChild
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
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <Button showButton={true} onClick={setShow} className={getStyles(btnStyle)}>Скрыть</Button>
                </form>
            </TransitionChild>
        </Transition>
    );
};

const containerStyle: BlockStyle = {
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
