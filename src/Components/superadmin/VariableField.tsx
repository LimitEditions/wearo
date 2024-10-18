import React, { useEffect, useState } from 'react'
import { Input } from '../common/InputGroup/Input';
import { Button } from '../common/Button';
import { useUserUpdate } from '../../hooks/useUserUpdate';
import { keyOfUpdateUserModel } from '../../utils/keyOfUpdateUserModel';
import { UserModel } from '../../api/data-contracts';


export const VariableField = (
    { label, field, text, userData, updateBaseData }: 
    { 
        label: string, 
        field: string, 
        text?: string,
        userData: UserModel,
        updateBaseData: React.Dispatch<React.SetStateAction<UserModel>>
    }) => {
    const [toChange, setToChange] = useState<boolean>(false);
    const [value, setValue] = useState<string>(text || '');
    const [send, setSend] = useState<boolean>(false);

    const [newData,] = useUserUpdate(keyOfUpdateUserModel(field, value), send, setSend, userData);
    useEffect(() => {
        if(newData) updateBaseData(newData);
    }, [newData, updateBaseData]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div className='flex items-center justify-between max-h-24 border-t border-b border-gray-300 p-2'>
            <div>
                {
                    toChange ?
                    <>
                        <label htmlFor={label}>
                            {label}
                        </label>
                        <Input
                            name={label}
                            type='text'
                            value={value}
                            onChange={handleChange}
                        />
                        {text && <span className="text-xs">Текущее значение: {text}</span>}
                    </>
                    :
                    <div>
                        <div>
                            <p>{label}</p>
                            <p>{text}</p>
                        </div>
                    </div>
                }
            </div>
            <div className='float-right'>
                <Button showButton={!toChange} className='w-7 h-7' onClick={() => setToChange(true)}>
                    <img src="/images/edit.png" alt="редактирование" />
                </Button>
                <Button showButton={toChange} className='w-7 h-7' onClick={() => { setToChange(false); setSend(true); }}>
                    <img src="/images/success.png" alt="принять" />
                </Button>
            </div>
        </div>
    );
};
