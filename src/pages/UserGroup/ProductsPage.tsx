import React, { useEffect, useState } from 'react'
import useApi from '../../hooks/useApi';
import { ProductCategoryModel, ProductCategoryModelDataResult, ProductModelDataResult } from '../../api/data-contracts';
import { useParams } from 'react-router-dom';
import { Products } from '../../Components/user/Product/Products';
import { Button } from '../../Components/common/Button';
import { Modal } from '../../Components/common/Modal';
import { IsLoading } from '../../Components/common/InfoGroup/IsLoading';
import { ErrorReq } from '../../Components/common/InfoGroup/ErrorReq';
import { buildHierarchyIteratively } from '../../utils/buildHierarchyIteratively';
import { Category } from '../../types/interfaces/ICategories';
import CategoryList from '../../Components/user/CategoryList';


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
        {PageSize: 248},
        {},
        true
    );
    
    // все доступные категории
    const [filterCategories, setFilterCategories] = useState<Category[]>([]);

    // отмеченные категории (сет уникальных значений)
    const [checkedCategories, setCheckedCategories] = useState<Set<{name: string, id: string}>>();

    // все полученные категории с сервера преобразовываем в единый стейт с иерархической структурой
    // и сохраняем в соответствующую переменную
    useEffect(() => {
        if (filtersData) {
            const data = filtersData.data as ProductCategoryModel[];
            const hierarchy = buildHierarchyIteratively(data);
            setFilterCategories(hierarchy)
        };
    }, [filtersData]);
    
    // стейты на модалку и кнопку внутри нее (вкл/выкл)
    const [modal, setModal] = useState<boolean>(false);
    const [disabledBtn, setDisabledBtn] = useState<boolean>(true);

    // колбек на изменение стейта filterCategories после отмеченных чекбоксов
    const handleFilterChange = (categoryName: string, filterName: string) => {
        setFilterCategories(prevCategories => prevCategories.map(category => {
            const updateCategory = (cat: Category): Category => {
                if (cat.title.name === categoryName) {
                    return {
                        ...cat,
                        leafCategoryStates: cat.leafCategoryStates.map(state => {
                            if (filterName in state) {
                                return { [filterName]: {
                                    ...state[filterName],
                                    status: !state[filterName].status
                                } };
                            }
                            return state;
                        })
                    };
                }
                return {
                    ...cat,
                    subcategories: cat.subcategories.map(updateCategory)
                };
            };
            return updateCategory(category);
        }));
    
        setDisabledBtn(false);
    };

    // колбек на обновление выбранных категорий
    const updateСheckedCategories = (filterCategories: Category[]) => {
        const checked: Set<{name: string, id: string}> = new Set();
    
        const traverse = (categories: Category[]) => {
          categories.forEach(category => {
            category.leafCategoryStates.forEach(state => {
                const [key] = Object.keys(state);
                if (state[key].status) {
                    checked.add({
                        name: key,
                        id: state[key].id
                    });
                }
            });
            traverse(category.subcategories);
          });
        };
    
        traverse(filterCategories);
        setCheckedCategories(checked);
    };

    console.log(checkedCategories)

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
                swipeable={false}
                additionalStyles={{
                    container: 'fixed bg-white-fon inset-0 overflow-y-scroll my-16 flex items-center justify-center',
                    panel: 'w-full h-3/4 px-4'
                }}
            >
                <CategoryList categories={filterCategories} onFilterChange={handleFilterChange}/>
                <div className='mt-2 w-1/2 mx-auto'>
                    <Button showButton={true} onClick={() => {setModal(false); updateСheckedCategories(filterCategories)}} disabled={disabledBtn}>Применить</Button>
                </div>
                <Button 
                    showButton={true} 
                    className='absolute -top-20 right-3'
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
