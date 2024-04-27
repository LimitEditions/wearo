import React, { useEffect, useState } from 'react'
import useApi from '../hooks/useApi';
import { PostModel, PostModelDataResult } from '../api/data-contracts';
import { Info } from '../Components/common/Info';
import { Post } from '../Components/user/Post';

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
           <Info showInfo={isLoading} msg={'Загружаю'} style={''}/>
           { 
                posts?.map(post => {
                    return <Post key={post.guid} id={post.guid as string}/>
                })
           }
        </div>
    );
};
