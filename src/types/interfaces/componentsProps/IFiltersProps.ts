export interface FiltersData {
    [key: string]: boolean;
};

export interface FilterGroup {
    title: {
        name: string;
        guid: string;
    };
    filters: FiltersData;
};

export interface FiltersProps {
    filterGroups: FilterGroup[];
    onFilterChange: (groupTitle: string, key: string) => void;
};