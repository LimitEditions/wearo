import React, { useMemo } from 'react'
import { HighlightModel, HighlightModelDataResult } from '../../../api/data-contracts';
import { Highlight } from './Highlight';
import { HighlightsData } from './HighlightsData';
import useApi, { useApiNew } from '../../../hooks/useApi';
import { retrieve } from '../../../utils/encryption';
import { IsLoading } from '../../common/InfoGroup/IsLoading';
import { ErrorReq } from '../../common/InfoGroup/ErrorReq';


export const Highlights = ({ brandId }: { brandId: string | null}) => {
    const token = useMemo(() => retrieve("token"), []);

    // const [data, isLoading, error] = useApi<'storiesHighlightsList', HighlightModelDataResult>(
    //     'storiesHighlightsList',
    //     {BrandGuid: brandId},
    //     { headers: { Authorization: `Bearer ${token}` } },
    //     true
    // );

    const { data, isLoading, error } = useApiNew('storiesHighlightsList', { BrandGuid: brandId }, null, { token: true, autoExecute: true })
    
    const highlights = data?.data as HighlightModel[];
    const res = highlights && highlights.length > 0 ? highlights: HighlightsData;

    return (
        <>
            <IsLoading show={isLoading} />
            <ErrorReq show={!!error} error={error} />
            <div className='flex space-x-2 px-2 py-3'>
                {res.map((highlight) => (
                    <Highlight highlight={highlight} key={highlight.guid} />))}
            </div>
        </>
    );
};
