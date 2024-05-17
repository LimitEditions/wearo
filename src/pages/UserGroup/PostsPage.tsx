import React, { useEffect, useState } from 'react'
import useApi from '../../hooks/useApi';
import { PostModel, PostModelDataResult } from '../../api/data-contracts';
import { Post } from '../../Components/user/Post';
import { IsLoading } from '../../Components/common/InfoGroup/IsLoading';

export const PostsPage = () => {
    const [posts, setPosts] = useState<PostModel[] | undefined>()
    const [data, isLoading, error] = useApi<'postsList', PostModelDataResult>('postsList', {}, {}, true);


    useEffect(() => {
        if(!error) {
            setPosts(data?.data)
        };
        
    }, [data, error])

    return (
        <div>
           <IsLoading show={isLoading} />
           { 
                posts?.map(post => {
                    return <Post key={post.guid} id={post.guid as string}/>
                })
           }
        </div>
    );
};
