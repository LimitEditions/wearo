import { useEffect, useState } from 'react'
import useApi from '../../hooks/useApi';
import { PostModel, PostModelDataResult } from '../../api/data-contracts';
import { Post } from '../../Components/user/Post';
import { IsLoading } from '../../Components/common/InfoGroup/IsLoading';
import { ErrorReq } from '../../Components/common/InfoGroup/ErrorReq';
import { Route, Routes } from 'react-router-dom';
import { PostProducts } from '../../Components/user/PostProducts';


export const PostsPage = () => {
    const [posts, setPosts] = useState<PostModel[] | undefined>()
    const [data, isLoading, error] = useApi<'postsList', PostModelDataResult>('postsList', {}, {}, true);


    useEffect(() => {
        if(!error) {
            setPosts(data?.data)
        };
        
    }, [data, error])

    return (
        <>
            <Routes>
                <Route index element={
                    <>
                        <IsLoading show={isLoading} />
                        <ErrorReq show={!!error} error={error} />
                        { 
                            posts?.map(post => {
                                return <Post key={post.guid} entity="post" id={post.guid as string}/>
                            })
                        }
                    </>
                } />
                <Route path='/post_products/*' element={<PostProducts />} />
            </Routes>
        </>
    );
};
