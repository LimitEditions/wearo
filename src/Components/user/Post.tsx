import React from 'react'
import useApi from '../../hooks/useApi';
import { PostModel } from '../../api/data-contracts';
import { Photos } from './Photos';
import ProfileItem from './ProfileItem';

export const Post = ({ id }: { id: string }) => {
    const [data, , error] = useApi<'postsDetail', PostModel>('postsDetail', id, {}, true)
    
    return (
        <div className='space-y-10 py-5 w-full sm:w-1/4'>
            {
                !error && data &&
                <>
                    <Photos photos={undefined} imgSize='w-full'/>
                    <div className='px-2'>
                        <p>{data.text}</p>
                        <ProfileItem path={`./../brand/${data.brandGuid}`}>Название бренда</ProfileItem>
                    </div>
                </>
            }
        </div>
    );
};
