import { useEffect, useState } from 'react';
import { Button } from '../common/Button';
import { useNavigate } from 'react-router-dom';
import { retrieve } from '../../utils/encryption';
import { useApiNew } from '../../hooks/useApi';
import { Photo } from '../common/Photo';
import { CommentModel, UserModel } from '../../api/data-contracts';
import moment from 'moment';
import { Likes } from './Likes';

export const CommentComponent = ({ comment }: { comment: CommentModel }) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState<UserModel>({ username: '', mainAvatarGuid: '' });
    const date = comment.updateDT ? comment.updateDT : comment.createDT;


    const { data } = useApiNew('usersDetail', {
        token: true,
        immediate: true,
        body: { userGuid: comment.userGuid },
    });

    console.log(data);

    useEffect(() => {
        if (data) {
            const userData = data as UserModel;
            setUserData({
                username: userData.username,
                mainAvatarGuid: userData.mainAvatarGuid
            });
        }
    }, [data]);

    if (!comment || comment.isDeleted) return null;

    return (
        <div className='flex flex-col space-y-5 mt-5 mx-[10px] pb-2 border-b'>
            {/* <RatingStars value={4} /> */}
            <div className='flex justify-between mx-2'>
                <div className="flex items-center gap-1">
                    <Photo
                        id={userData.mainAvatarGuid || null}
                        styles="w-4 h-4 rounded-full"
                        alt={`photo ${userData.mainAvatarGuid}`}
                    />
                    <span>{userData.username}</span>
                </div>
                <span className='text-normal-gray'>{moment(date).format('DD.MM.YYYY')}</span>
            </div>
            <div className='flex justify-between'>
                <p className='p-3 mx-2 border rounded-md text-black'>{comment.text}</p>
                {comment.guid && <Likes id={comment.guid} entityType="PostComment" />}
            </div>
            <div className='flex justify-between mx-2'>
                <span className='text-normal-gray'>Ответы</span>
                <Button showButton={true} onClick={() => navigate('/reply')} className='sm text-normal-gray'>Ответить</Button>
            </div>
        </div>
    );
};
