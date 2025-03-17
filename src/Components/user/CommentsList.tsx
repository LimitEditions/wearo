import React, { useEffect, useState } from 'react'
import { CommentModelDataResult } from '../../api/data-contracts'
import { useApiNew } from '../../hooks/useApi';
import { Input } from '../common/InputGroup/Input';
import withMask from '../common/hoc/withMask';
import { Button } from '../common/Button';
import { retrieve } from '../../utils/encryption';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { Photo } from '../common/Photo';
import { Likes } from './Likes';


interface CommentsListProps {
    entityId: string;
    updateCommentsCount: (newCount: number) => void;
    onClose: () => void;
}
const InputWithMask = withMask(Input);

export const CommentsList: React.FC<CommentsListProps> = ({ entityId, updateCommentsCount, onClose }) => {
    const navigate = useNavigate();
    const commentsListApi = useApiNew<CommentModelDataResult>('postCommentsList', { token: true, immediate: false })
    const createCommentApi = useApiNew('postCommentsCreate', { token: true, immediate: false })
    const [comment, setComment] = useState<string>('');

    const userId = retrieve('guid');

    useEffect(() => {
        commentsListApi.execute({
            EntityGuid: entityId,
        })
    }, [])

    const comments = commentsListApi.data


    useEffect(() => {
        updateCommentsCount(comments?.data?.length ?? 0)
    }, [comments, updateCommentsCount])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    };

    const createComment = () => {
        if (!comment.trim()) return;
        createCommentApi.execute({
            userGuid: userId,
            text: comment,
            isLike: true,
            entityGuid: entityId
        }).then(() => {
            setComment("");
            commentsListApi.execute({
                EntityGuid: entityId,
            })
        })
    }

    return (
        <div className='pt-1'>
            <div className='max-h-[300px] overflow-y-auto pr-2 min-h-0'>
                <div className='flex justify-between px-[10px] py-[18px] sticky top-0 shadow-md bg-white'>
                    <h1 className='uppercase'>Комментарии</h1>
                    <img src="./images/closeBtn.png" alt="close" onClick={onClose} className='cursor-pointer' />
                </div>
                {
                    comments?.data && comments.data.map((el, index) => (
                        <div key={index} className='mt-2 min-h-[50px]'>
                            <div className='flex justify-between mx-2'>
                                <div className="flex items-center gap-1">
                                    <Photo
                                        id={el.user?.mainAvatarGuid || null}
                                        styles="w-4 h-4 rounded-full"
                                        alt={`photo ${el.user?.mainAvatarGuid}`}
                                    />
                                    <span>{el.user?.firstName} {el.user?.secondName || el.user?.username}</span>
                                </div>
                                <span className='text-normal-gray'>{moment(el.updateDT || el.createDT).format('DD.MM.YYYY')}</span>
                            </div>
                            <div className='flex justify-between'>
                                <p className='p-3 mx-2 border rounded-md text-black'>{el.text}</p>
                                {el.guid && <Likes id={el.guid} entityType="postComment" />}
                            </div>
                            <div className='flex justify-between mx-2'>
                                            <span className='text-normal-gray'>Ответы</span>
                                            <Button showButton={true} onClick={() => navigate('/reply')} className='sm text-normal-gray'>Ответить</Button>
                                        </div>
                            <hr />
                        </div>
                    ))
                }
            </div>
            <div className='flex flex-col mt-5 gap-5'>
                <Input
                    value={comment}
                    onChange={handleChange}
                    placeholder="текст комментария"
                />
                <div className="m-auto flex">
                    <Button onClick={createComment} showButton={true} disabled={createCommentApi.isLoading}>Отправить заявку</Button>
                </div>
            </div>
        </div>
    )
}