import React, { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Button } from '../Button'
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
                <form className='mx-4' onSubmit={handleSubmit}>
                    <Input 
                        className='w-3/4 bg-light-gray p-1 border border-gray-300 rounded-md'
                        type='text' 
                        placeholder='Поиск'
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <Button showButton={true} onClick={setShow} className='w-1/4 text-sm'>
                        {
                            inputValue === '' ?
                            'Скрыть':
                            'Принять'
                        }
                    </Button>
                </form>
            </TransitionChild>
        </Transition>
    );
};
