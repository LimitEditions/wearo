import React, { Dispatch, SetStateAction, useState } from 'react'
import { Button } from '../Button';
import { SearchInput } from './SearchInput';
import { BlockStyle } from '../../../types/interfaces/IStyles';


// логика отображения строки и кнопки вызова фильтрации
export const Search = ({ callBack }: { callBack: Dispatch<SetStateAction<string>> }) => {
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const handleSearchClick = () => {
        setShowSearch(prevState => !prevState);
    };

    return (
        <div className='relative h-12 w-full '>
            <Button 
                showButton={!showSearch}
                onClick={handleSearchClick}
                styles={btnSearch}
                >
            </Button>
            <SearchInput show={showSearch} setShow={handleSearchClick} callback={ callBack }/>
        </div>
    );
};

const btnSearch: BlockStyle = {
    blockSize: "opacity-70 absolute",
    spacing: "right-2",
    background: "bg-[url('https://www.pngall.com/wp-content/uploads/15/Search-Bar-PNG.png')] bg-no-repeat bg-center bg-contain h-10 w-10"
};
