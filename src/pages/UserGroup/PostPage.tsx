import { useParams } from 'react-router-dom'
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
