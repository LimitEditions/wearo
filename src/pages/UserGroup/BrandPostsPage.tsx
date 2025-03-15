import { useParams } from 'react-router-dom'
import { useApiNew } from '../../hooks/useApi';
import { IsLoading } from '../../Components/common/InfoGroup/IsLoading';
import { ErrorReq } from '../../Components/common/InfoGroup/ErrorReq';
import { PostModelDataResult } from '../../api/data-contracts';
import { BrandPosts } from '../../Components/user/BrandPosts';


export const BrandPostsPage = () => {
    // id бренда
    const { id } = useParams();
    // загрузка постов по бренду с сервера
    const {data, isLoading, error} = useApiNew<PostModelDataResult>("postsList", {
        token: true, 
        immediate: true, 
        body: { BrandGuid: id }
    });

    return (
        <div className='space-y-5 w-full px-3'>
            <IsLoading show={isLoading} />
            <ErrorReq show={!!error} error={error} />
            {data && <BrandPosts brandPosts={data?.data ?? []}/> }
        </div>
    )
};
