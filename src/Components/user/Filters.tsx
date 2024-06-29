import React from 'react';
import CheckboxUnit from '../common/CheckboxUnit';
import { FiltersProps } from '../../types/interfaces/componentsProps/IFiltersProps';


const Filters: React.FC<FiltersProps> = ({ filterGroups, onFilterChange }) => {
    return (
        <div className="space-y-4 px-2">
            {filterGroups.map(group => (
                <div key={group.title.guid}>
                    <h2 className="text-lg font-bold pl-2">{group.title.name}</h2>
                    {Object.keys(group.filters).map(key => (
                        <CheckboxUnit
                            key={key}
                            enabled={group.filters[key]}
                            setEnabled={() => onFilterChange(group.title.name, key)}
                            text={key}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Filters;
