import React, { useState, useMemo } from 'react';


// логика фильтрации
const useFilter = <T extends { name?: string }>(data?: T[]) => {
    const [searchTarget, setSearchTarget] = useState<string>('');

    const filteredData = useMemo(() => {
        if (!searchTarget) return null;
        const regex = new RegExp(searchTarget, 'i');
        return data?.filter(item => item.name?.match(regex));
    }, [data, searchTarget]);

    return { setSearchTarget, filteredData };
};

export default useFilter;
