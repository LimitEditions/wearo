import React, { useEffect, useState } from 'react'
import useApi from '../../hooks/useApi';
import { ProductCategoryModelDataResult, ProductModelDataResult } from '../../api/data-contracts';
import { useParams } from 'react-router-dom';
import { Products } from '../../Components/user/Product/Products';
import { FilterGroup, FiltersData } from '../../types/interfaces/componentsProps/IFiltersProps';
import { Button } from '../../Components/common/Button';
import { Modal } from '../../Components/common/Modal';
import Filters from '../../Components/user/Filters';
import { IsLoading } from '../../Components/common/InfoGroup/IsLoading';
import { ErrorReq } from '../../Components/common/InfoGroup/ErrorReq';


// const initialCategories: FiltersData = {
//     "Верхняя одежда": false,
//     "Платья": false,
//     "Юбки": false
// };

// const initialSeasons: FiltersData = {
//     "Зима": false,
//     "Лето": false
// };

// const initialFilterGroups = [
//     { title: "Категория", filters: initialCategories },
//     { title: "Сезон", filters: initialSeasons }
// ];


export const ProductsPage = () => {
    const { id } = useParams();

    const [data, isLoading, error] = useApi<'productsList', ProductModelDataResult>(
        'productsList',
        {BrandGuid: id},
        {},
        true
    );

    //фильтры
    const [filtersData, ,] = useApi<'productCategoriesList', ProductCategoryModelDataResult>(
        'productCategoriesList',
        {},
        {},
        true
    );
    
    const [filterGroups, setFilterGroups] = useState<FilterGroup[]>([]);
    useEffect(() => {
        const titles = filtersData?.data?.filter(el => el.parentCategoryGuid === null);
        const titlesData = titles?.map(el => {
            const filters = filtersData?.data?.filter(element => el.guid === element.parentCategoryGuid)
                .reduce((acc, curr) => {
                    if (curr.name) {
                        acc[curr.name] = false;
                    }
                    return acc;
                }, {} as FiltersData);

            return {
                title: {
                    name: el.name || '',
                    guid: el.guid || ''
                },
                filters: filters
            };
        });

        setFilterGroups(titlesData as FilterGroup[]);
    }, [filtersData])
    

    const [modal, setModal] = useState<boolean>(false);
    const [disabledBtn, setDisabledBtn] = useState<boolean>(true);

    const handleFilterChange = (groupTitle: string, key: string) => {
        setFilterGroups(prevGroups => prevGroups.map(group => {
            if (group.title.name === groupTitle) {
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
                additionalStyles={{
                    container: 'fixed inset-0 overflow-y-scroll px-8 pt-48 flex items-center justify-center'
                }}
                >
                <Filters filterGroups={filterGroups} onFilterChange={handleFilterChange}/>
                <div className='mt-2 w-1/2 mx-auto'>
                    <Button showButton={true} onClick={() => setModal(false)} disabled={disabledBtn}>Применить</Button>
                </div>
                <Button 
                    showButton={true} 
                    className='absolute top-3 right-3 opacity-40'
                    onClick={() => setModal(false)}
                >
                    <img src='images/closeBtn.png' alt='крестик'/>
                </Button>
            </Modal>
            <div>
                <IsLoading show={isLoading} />
                <ErrorReq show={!!error} error={error} />
                {data && <Products productsList={data?.data || []} />}
            </div>
        </div>
    );
};
