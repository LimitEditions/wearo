import React, { useState } from 'react'
import useApi from '../../hooks/useApi';
import { ProductModelDataResult } from '../../api/data-contracts';
import { useParams } from 'react-router-dom';
import { Products } from '../../Components/user/Product/Products';
import { FiltersData } from '../../types/interfaces/componentsProps/IFiltersProps';
import { Button } from '../../Components/common/Button';
import { Modal } from '../../Components/common/Modal';
import Filters from '../../Components/user/Filters';
import { IsLoading } from '../../Components/common/InfoGroup/IsLoading';
import { ErrorReq } from '../../Components/common/InfoGroup/ErrorReq';


const initialCategories: FiltersData = {
    "Верхняя одежда": false,
    "Платья": false,
    "Юбки": false
};

const initialSeasons: FiltersData = {
    "Зима": false,
    "Лето": false
};

const initialFilterGroups = [
    { title: "Категория", filters: initialCategories },
    { title: "Сезон", filters: initialSeasons }
];


export const ProductsPage = () => {
    const { id } = useParams();

    const [data, isLoading, error] = useApi<'productsList', ProductModelDataResult>(
        'productsList',
        {BrandGuid: id},
        {},
        true
    );

    //фильтры
    const [modal, setModal] = useState<boolean>(false);
    const [filterGroups, setFilterGroups] = useState(initialFilterGroups);
    const [disabledBtn, setDisabledBtn] = useState<boolean>(true);

    const handleFilterChange = (groupTitle: string, key: string) => {
        setFilterGroups(prevGroups => prevGroups.map(group => {
        if (group.title === groupTitle) {
            return {
            ...group,
            filters: {
                ...group.filters,
                [key]: !group.filters[key]
            }
            };
        }
        return group;
        }));
        setDisabledBtn(false);
    };

    return (
        <div>
            <h1 className='font-lg uppercase ml-3'>Изделия</h1>
            <Button 
                showButton={true} 
                className='w-1/4 float-right'
                onClick={() => {setModal(true); setDisabledBtn(true)}}
                >
                Фильтры
            </Button>
            <Modal
                isOpen={modal}
                setIsOpen={setModal}
                swipeable={true}
                >
                <Filters filterGroups={filterGroups} onFilterChange={handleFilterChange}/>
                <div className='mt-2 w-1/2 mx-auto'>
                    <Button showButton={true} onClick={() => setModal(false)} disabled={disabledBtn}>Применить</Button>
                </div>
                <Button 
                    showButton={true} 
                    className='absolute top-1 right-2 opacity-40'
                    onClick={() => setModal(false)}
                >
                    <img src='images/closeBtn.png' alt='крестик'/>
                </Button>
            </Modal>
            <div>
                <IsLoading show={isLoading} />
                <ErrorReq show={!!error} error={error} />
                {data && <Products productsList={data?.data || []}/>}
            </div>
        </div>
    );
};
