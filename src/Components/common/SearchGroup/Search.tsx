import React, { Dispatch, SetStateAction, useState } from 'react'
import { Button } from '../Button';
import { SearchInput } from './SearchInput';


// логика отображения строки и кнопки вызова фильтрации
export const Search = ({ callBack }: { callBack: Dispatch<SetStateAction<string>> }) => {
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const handleSearchClick = () => {
        setShowSearch(prevState => !prevState);
    };

    return (
        <div className='relative h-12 w-full'>
            <Button 
                showButton={!showSearch}
                onClick={handleSearchClick}
                styles="absolute right-2 h-10 w-10 animate-fade-in-long"
            >
                <img src="/images/search.png" alt="поиск" />
            </Button>
            <SearchInput show={showSearch} setShow={handleSearchClick} callback={ callBack }/>
        </div>
    );
};

 
