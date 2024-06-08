import React from 'react'
import useApi from '../../hooks/useApi';
import { PostModel } from '../../api/data-contracts';
import { Photos } from './Photos';
import Item from '../common/ItemGroup/Item';

export const Post = ({ id }: { id: string }) => {
    const [data, , error] = useApi<'postsDetail', PostModel>('postsDetail', id, {}, true)
    
    return (
        <div className='space-y-10 py-5 w-full sm:w-1/4'>
            {
                !error && data &&
                <>
                    <Photos photos={null} imgSize='w-full'/>
                    <div className='px-2'>
                        <p>{data.text}</p>
                        <Item path={`.././brand/${data.brandGuid}`}>Название бренда</Item>
                    </div>
                </>
            }
        </div>
    );
};
