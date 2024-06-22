export interface FiltersData {
    [key: string]: boolean;
};

export interface FilterGroup {
    title: string;
    filters: FiltersData;
};

export interface FiltersProps {
    filterGroups: FilterGroup[];
    onFilterChange: (groupTitle: string, key: string) => void;
};