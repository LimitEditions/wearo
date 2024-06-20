import React, { useState } from 'react';
import Example from '../common/Example';



interface FiltersData {
    [key: string]: boolean;
}

const categories: FiltersData = {
    "Верхняя одежда": false,
    "Платья": false,
    "Юбки": false
};

const seasons: FiltersData = {
    "Зима": false,
    "Лето": false
};

const Filters: React.FC = () => {
    const [categoryFilters, setCategoryFilters] = useState<FiltersData>(categories);
    const [seasonFilters, setSeasonFilters] = useState<FiltersData>(seasons);

    console.log(categoryFilters)

    const handleFilterChange = (type: 'category' | 'season', key: string) => {
        if (type === 'category') {
            setCategoryFilters(prev => ({ ...prev, [key]: !prev[key] }));
        } else if (type === 'season') {
            setSeasonFilters(prev => ({ ...prev, [key]: !prev[key] }));
        }
    };

    return (
        <div className="space-y-4 px-2">
            <div>
                <h2 className="text-lg font-bold pl-2">Категория</h2>
                {Object.keys(categoryFilters).map(key => (
                <Example
                    key={key}
                    enabled={categoryFilters[key]}
                    setEnabled={() => handleFilterChange('category', key)}
                    text={key}
                />
                ))}
            </div>
            <input type="checkbox" name='check'/>
            <label htmlFor="check" className='ml-3'>Чекбокс дефолтный</label>
            <div>
                <h2 className="text-lg font-bold pl-2">Сезон</h2>
                {Object.keys(seasonFilters).map(key => (
                <Example
                    key={key}
                    enabled={seasonFilters[key]}
                    setEnabled={() => handleFilterChange('season', key)}
                    text={key}
                />
                ))}
            </div>
            
        </div>
    );
};

export default Filters;
