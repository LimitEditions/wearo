import React, { useEffect, useState } from 'react'
import useApi from '../../../../hooks/useApi';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { PostModel, PostModelDataResult } from '../../../../api/data-contracts';
import { retrieve } from '../../../../utils/encryption';
import { Input } from '../../../../Components/common/InputGroup/Input';
import { Button } from '../../../../Components/common/Button';
import { IGetPosts } from '../../../../types/interfaces/ApiResponses/IGetPosts';
import { clearEmptyFields } from '../../../../utils/clearEmptyFields';
import moment from 'moment';
import Item from '../../../../Components/common/ItemGroup/Item';
import { PostUpdate } from './PostUpdate';
import { PostCreate } from './PostCreate';


export const PostListPage = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState<PostModel[]>([]);
    const [params, setParams] = useState<IGetPosts>({
        BrandGuid: '',
        Text: '',
        createDtStart: '',
        createDtEnd: '',
        Page: '',
        PageSize: ''
    });
    const [getData, setGetData] = useState<boolean>(false);
    const [data, isLoading, error] = useApi<'postsList', PostModelDataResult>(
        'postsList',
        clearEmptyFields(params),
        { headers: { Authorization: `Bearer ${retrieve("token")}` } },
        getData
    );

    useEffect(() => {
        if (isLoading) setGetData(false);
    }, [isLoading]);

    useEffect(() => {
        if (data && !error) setPosts(data.data?.filter(el => !el.isDeleted) || []);
    }, [data, error])

    const handleCh = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParams({ ...params, [event.target.name]: event.target.value });
    };

    const handleSub = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setGetData(true);
    };

    return (
        <Routes>
            <Route
                index
                element={
                    <div>
                        <form className='border-t w-full py-3 px-2 text-sm' onSubmit={handleSub}>
                            <h3 className='font-semibold'>Параметры запроса</h3>
                            {
                                (Object.keys(params) as Array<keyof IGetPosts>).map((param) => {
                                    const fieldVal = params[param];
                                    return <div key={param}>
                                        <label htmlFor={param}>{param}</label>
                                        <Input
                                            name={param}
                                            value={fieldVal}
                                            onChange={handleCh}
                                        />
                                    </div>
                                })
                            }
                            <div className='flex items-center justify-between text-white text-xs'>
                                <Button showButton={true} className={btnStyle} type='submit'>Получить данные</Button>
                                <Button showButton={true} className={btnStyle} type='button' onClick={() => navigate('./create_new')}>Создать новую</Button>
                            </div>
                        </form>
                        {
                            posts?.length > 0 &&
                            <>
                                <h2 className='w-full text-center uppercase my-2'>Публикации</h2>
                                <ul className='py-3 px-2 space-y-1'>
                                    {
                                        posts?.map((post) => {
                                            return <li key={post.guid}>
                                                    <Item path={`./${post.guid}`} arrow={false}>
                                                        <div>{moment(post.createDT).format('DD.MM.YYYY')}</div>
                                                        <div className='line-clamp-2'>{post.text}</div>
                                                    </Item>
                                                </li>
                                        })
                                    }
                                </ul>
                            </>
                        }
                    </div>
                }
            />
            <Route path='/:id' element={<PostUpdate/>}/>
            <Route path='/create_new' element={<PostCreate/>}/>
        </Routes>
    );
};

const btnStyle = 'px-2 py-1 my-2 border rounded-md bg-custom-blue hover:bg-navy-blue';
