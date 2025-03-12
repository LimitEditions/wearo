import React, { useEffect, useState } from 'react';
import { Button } from '../common/Button';
import { useNavigate } from 'react-router-dom';
import { retrieve } from '../../utils/encryption';
import useApi from '../../hooks/useApi';
import { Photo } from '../common/Photo';
import { IconLike } from '../common/icons/IconLike';
import { CommentModel, UserModel } from '../../api/data-contracts';
import moment from 'moment';
import { Likes } from './Likes';

export const CommentComponent = ({ comment }: { comment: CommentModel }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<string>('');
    const [userPhoto, setUserPhoto] = useState<string>('');
    const date = comment.updateDT ? comment.updateDT : comment.createDT;


    const [data] = useApi<'usersDetail', UserModel>(
        'usersDetail',
        comment.userGuid,
        { headers: { Authorization: `Bearer ${retrieve("token")}` } },
        true
    );
    useEffect(() => {
        setUser(data?.username as string);
    }, [data]);

    useEffect(() => {
        setUserPhoto(data?.mainAvatarGuid as string);
    }, [data]);

    if (!comment || comment.isDeleted) return null;

    return (
        <div className='flex flex-col space-y-5 mt-5 mx-[10px] pb-2 border-b'>
            {/* <RatingStars value={4} /> */}
            <div className='flex justify-between mx-2'>
                <div className="flex items-center gap-1">
                    <Photo
                        id={userPhoto || null}
                        styles="w-4 h-4 rounded-full"
                        alt={`photo ${user}`}
                    />
                    <span>{user}</span>
                </div>
                <span className='text-normal-gray'>{moment(date).format('DD.MM.YYYY')}</span>
            </div>
            <div className='flex justify-between'>
                <p className='p-3 mx-2 border rounded-md text-black'>{comment.text}</p>
                {comment.guid && <Likes id={comment.guid} entityType="postComment" />}
            </div>
            <div className='flex justify-between mx-2'>
                <span className='text-normal-gray'>Ответы</span>
                <Button showButton={true} onClick={() => navigate('/reply')} className='sm text-normal-gray'>Ответить</Button>
            </div>
        </div>
    );
};
