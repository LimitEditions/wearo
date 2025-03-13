import React from 'react'
import { useParams } from 'react-router-dom'
import { useApiNew } from '../../hooks/useApi';
import { IsLoading } from '../../Components/common/InfoGroup/IsLoading';
import { ErrorReq } from '../../Components/common/InfoGroup/ErrorReq';
import { PostModelDataResult } from '../../api/data-contracts';
import { Post } from '../../Components/user/Post';


export const PostPage = () => {
    // id бренда
    const { id } = useParams();

    return (
        <div className='space-y-5 w-full px-3'>
            <Post id={id || ""} />
        </div>
    )
};
