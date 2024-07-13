import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Category } from '../../types/interfaces/ICategories';
import CheckboxUnit from '../common/CheckboxUnit';


type CategoryListProps = {
    categories: Category[];
    onFilterChange: (categoryName: string, filterName: string) => void;
};

const CategoryList: React.FC<CategoryListProps> = ({ categories, onFilterChange }) => {
    const renderCategory = (category: Category) => {

        if (category.subcategories.length > 0 || category.leafCategoryStates.length > 0) {
        return (
            <div className='my-2' key={category.title.guid}>
                <Disclosure>
                    <DisclosureButton className='w-full flex justify-between relative'>
                        <div className='text-lg text-white-fon'>{category.title.name}</div>
                    </DisclosureButton>
                    <DisclosurePanel className='pl-4'>
                        {category.subcategories.map(subcategory => renderCategory(subcategory))}
                            {
                                category.leafCategoryStates.map((state, index) => {
                                    const [key] = Object.keys(state);
                                    const enabled = state[key]['status'];
                                    return (
                                        <CheckboxUnit
                                            key={index}
                                            enabled={enabled}
                                            setEnabled={() => onFilterChange(category.title.name, key)}
                                            text={key}
                                        />
                                    );
                                })
                            }
                    </DisclosurePanel>
                </Disclosure>
            </div>
        );
        }
    };

    return (
        <div>
            {categories.map(category => renderCategory(category))}
        </div>
    );
};

export default CategoryList;
