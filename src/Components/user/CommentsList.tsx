import React, { useEffect, useState, useRef } from 'react'
import { CommentModelDataResult } from '../../api/data-contracts'
import { useApiNew } from '../../hooks/useApi';
import { Input } from '../common/InputGroup/Input';
import { Button } from '../common/Button';
import { retrieve } from '../../utils/encryption';
import moment from 'moment';
import { useNavigate } from "react-router-dom";
import { Photo } from '../common/Photo';
import { Likes } from './Likes';

interface CommentsListProps {
    entityId: string;
    updateCommentsCount: (newCount: number) => void;
    onClose: () => void;
}

export const CommentsList: React.FC<CommentsListProps> = ({ entityId, updateCommentsCount, onClose }) => {

    const navigate = useNavigate();
    const commentsListApi = useApiNew<CommentModelDataResult>('postCommentsList', { token: true, immediate: false })
    const createCommentApi = useApiNew('postCommentsCreate', { token: true, immediate: false })
    const [comment, setComment] = useState<string>('');
    const [replyTo, setReplyTo] = useState<{ userName: string; commentId: string } | null>(null);

    const userId = retrieve('guid');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        commentsListApi.execute({ EntityGuid: entityId });
    }, []);

    const comments = commentsListApi.data

    useEffect(() => {
        updateCommentsCount(comments?.data?.length ?? 0)
    }, [comments, updateCommentsCount])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    };

    const handleReplyClick = (userName: string, commentId: string) => {
        setReplyTo({ userName, commentId });
        setComment(`@${userName}, `);
        setTimeout(() => inputRef.current?.focus(), 50);
    };

    const createComment = () => {
        if (!comment.trim()) return;
        createCommentApi.execute({
            userGuid: userId,
            text: comment,
            isLike: true,
            entityGuid: entityId,
            replyAtGuid: replyTo?.commentId ?? null
        })
        setComment("");
        setReplyTo(null);
        commentsListApi.execute({
            EntityGuid: entityId,
        })
    }

    return (
        <div className='flex flex-col'>
            <div className='h-[70vh] overflow-y-auto scrollbar-hide'>
                <div className='flex justify-between px-[10px] py-[18px] sticky top-0 bg-white'>
                    <h1 className='uppercase size-4 text-black'>Комментарии</h1>
                    <img src="./images/closeBtn.png" alt="close" onClick={onClose} className='cursor-pointer w-4 h-4' />
                </div>
                <div className='px-3 bg-white-fon'>
                    {
                        comments?.data && comments.data.map((el) => (
                            <div key={el.guid} className='min-h-[50px]'>
                                <div className='py-4'>
                                    <div className='flex justify-between'>
                                        <div className="flex items-center gap-1">
                                            <Photo
                                                id={el.user?.mainAvatarGuid || null}
                                                styles="w-4 h-4 rounded-full"
                                                alt={`photo ${el.user?.mainAvatarGuid}`}
                                            />
                                            <span>{el.user?.firstName} {el.user?.secondName || el.user?.username}</span>
                                        </div>
                                        <span className='text-normal-gray'>{moment(el.updateDT || el.createDT).format("DD.MM.YYYY")}</span>
                                    </div>
                                    <div className='mt-[10px] flex gap-10'>
                                        <p className='w-full min-h-7 ml-5 p-2 border rounded-md text-black flex items-center'>{el.text}</p>
                                        {el.guid && <Likes id={el.guid} entityType="postComment" />}
                                    </div>
                                </div>
                                <div className='flex justify-between mb-5'>
                                    <span className='text-normal-gray ml-5'>Ответы ({el.repliesCount})</span>
                                    <Button showButton={true} onClick={() => handleReplyClick(el.user?.firstName || "Пользователь", el.guid ?? "")} className='sm text-normal-gray'>Ответить</Button>
                                </div>
                                {/* ответы */}
                                {/* {mainComments
                                    .filter((comment) => comment.replyAtGuid === el.guid)
                                    .map((reply) => (
                                        <div key={reply.guid} className="ml-10 border-l-2 pl-4 py-2">
                                            <div className="flex items-center gap-1">
                                                <Photo id={reply.user?.mainAvatarGuid || null} styles="w-4 h-4 rounded-full" alt={`photo ${reply.user?.mainAvatarGuid}`} />
                                                <span>{reply.user?.firstName} {reply.user?.secondName || reply.user?.username}</span>
                                            </div>
                                            <p className="w-full min-h-7 ml-5 p-2 border rounded-md text-black flex items-center">
                                                {reply.text}
                                            </p>
                                        </div>
                                    ))} */}
                                <hr />
                            </div>
                        ))
                    }
                </div>
                <div className='h-14 sticky bottom-0 bg-white px-3 py-2 flex mt-5 gap-5'>
                    <Input
                        reflink={inputRef}
                        value={comment}
                        onChange={handleChange}
                        placeholder="Ваш комментарий"
                    />
                    <Button
                        onClick={createComment}
                        showButton={true}
                        disabled={createCommentApi.isLoading}
                        style={{ all: "unset" }}>
                        <img src="./images/sendComment.svg" alt="send comment" className='w-6 h-6' />
                    </Button>
                </div>
            </div>
        </div>
    )
}