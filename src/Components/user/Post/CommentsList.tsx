import React, { useEffect, useState, useRef } from 'react'
import { CommentModel, CommentModelDataResult } from '../../../api/data-contracts'
import { useApiNew } from '../../../hooks/useApi';
import { Input } from '../../common/InputGroup/Input';
import { Button } from '../../common/Button';
import { retrieve } from '../../../utils/encryption';
import moment from 'moment';
import { Photo } from '../../common/Photo';
import { Likes } from './Likes';
import { CommentsListProps } from '../../../types/interfaces/componentsProps/ICommentListProps';

export const CommentsList: React.FC<CommentsListProps> = ({ entityId, updateCommentsCount, onClose }) => {
    const { data, execute: fetchComments } = useApiNew<CommentModelDataResult>('postCommentsList', { token: true, immediate: false });
    const { execute: createCommentPost } = useApiNew('postCommentsCreate', { token: true, immediate: false });
    const { execute: fetchReplies } = useApiNew<CommentModelDataResult>('postCommentsList', { token: true, immediate: false });


    const [comment, setComment] = useState<string>('');
    const [replyTo, setReplyTo] = useState<{ userName: string; commentId: string } | null>(null);

    // Храним ответы в виде объекта где ключ — guid комментария
    const [replies, setReplies] = useState<Record<string, CommentModel[]>>({});

    const userId = retrieve('guid');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        fetchComments({ EntityGuid: entityId });
    }, []);

    useEffect(() => {
        updateCommentsCount(data?.data?.length ?? 0);
    }, [data, updateCommentsCount]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    };

    const handleReplyClick = (userName: string, commentId: string) => {
        setReplyTo({ userName, commentId });
        setComment(`${userName}, `);
        setTimeout(() => inputRef.current?.focus(), 50);
    };

    const createComment = async () => {
        if (!comment.trim()) return;

        await createCommentPost({
            userGuid: userId,
            text: comment,
            isLike: false,
            entityGuid: entityId,
            replyAtGuid: replyTo?.commentId ?? null
        });

        setComment('');
        setReplyTo(null);
        fetchComments({ EntityGuid: entityId }); // Обновляем список комментариев
    };

    const loadReplies = async (commentId: string) => {
        if (replies[commentId]) return; // Если ответы уже загружены, не делать повторный запрос

        const response = await fetchReplies({ EntityGuid: entityId, replyAtGuid: commentId });
        if (response?.data) {
            setReplies((prev) => ({ ...prev, [commentId]: response.data }));
        }
    };

    return (
        <div className='flex flex-col'>
            <div className='h-[70vh] overflow-y-auto scrollbar-hide'>
                <div className='flex justify-between px-[10px] py-[18px] sticky top-0 bg-white'>
                    <h1 className='uppercase size-4 text-black'>Комментарии</h1>
                    <img src="./images/closeBtn.png" alt="close" onClick={onClose} className='cursor-pointer w-4 h-4' />
                </div>
                <div className='px-3 bg-white-fon'>
                    {
                        data?.data?.map((comment) => (
                            <div key={comment.guid} className='min-h-[50px]'>
                                <div className='py-4'>
                                    <div className='flex justify-between'>
                                        <div className="flex items-center gap-1">
                                            <Photo
                                                id={comment.user?.mainAvatarGuid ?? null}
                                                styles="w-4 h-4 rounded-full"
                                                alt={`photo ${comment.user?.mainAvatarGuid}`}
                                            />
                                            <span>{comment.user?.firstName} {comment.user?.secondName || comment.user?.username}</span>
                                        </div>
                                        <span className='text-normal-gray'>{moment(comment.updateDT || comment.createDT).format("DD.MM.YYYY")}</span>
                                    </div>
                                    <div className='mt-[10px] flex gap-10'>
                                        <p className='w-full min-h-7 ml-5 p-2 border rounded-md text-black flex items-center'>{comment.text}</p>
                                        {comment.guid && <Likes id={comment.guid} entityType="PostComment" />}
                                    </div>
                                </div>
                                <div className='flex justify-between mb-5'>
                                    <Button showButton={true} onClick={() => loadReplies(comment.guid ?? "")} className='text-normal-gray ml-5'>Ответы ({comment.repliesCount})</Button>
                                    <Button showButton={true} onClick={() => handleReplyClick(comment.user?.firstName || "Пользователь", comment.guid ?? "")} className='sm text-normal-gray'>Ответить</Button>
                                </div>

                                {/* Рендерим ответы */}
                                {comment.guid && replies[comment.guid] && replies[comment.guid].map((reply) => (
                                    <div key={reply.guid} className='ml-8 border-l-2 pl-4'>
                                        <div className='py-4'>
                                            <div className='flex justify-between'>
                                                <div className="flex items-center gap-1">
                                                    <Photo
                                                        id={reply.user?.mainAvatarGuid || null}
                                                        styles="w-4 h-4 rounded-full"
                                                        alt={`photo ${reply.user?.mainAvatarGuid}`}
                                                    />
                                                    <span>{reply.user?.firstName} {reply.user?.secondName || reply.user?.username}</span>
                                                </div>
                                                <span className='text-normal-gray'>{moment(reply.updateDT || reply.createDT).format("DD.MM.YYYY")}</span>
                                            </div>
                                            <div className='mt-[10px] flex gap-10'>
                                                <p className='w-full min-h-7 ml-5 p-2 border rounded-md text-black flex items-center'>{reply.text}</p>
                                                {reply.guid && <Likes id={reply.guid} entityType="PostComment" />}
                                            </div>
                                        </div>
                                        <div className='flex justify-between mb-5'>
                                            <Button showButton={true} onClick={() => loadReplies(comment.guid ?? "")} className='text-normal-gray ml-5'>Ответы ({comment.repliesCount})</Button>
                                            <Button showButton={true} onClick={() => handleReplyClick(reply.user?.firstName || "Пользователь", reply.guid ?? "")} className='sm text-normal-gray'>Ответить</Button>
                                        </div>
                                    </div>
                                ))}

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
                        style={{ all: "unset" }}>
                        <img src="./images/sendComment.svg" alt="send comment" className='w-6 h-6' />
                    </Button>
                </div>
            </div>
        </div>
    );
};
