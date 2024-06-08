import React, { useEffect, useState } from 'react';
import { Button } from '../common/Button';
import { useNavigate } from 'react-router-dom';
import { retrieve } from '../../utils/encryption';
import useApi from '../../hooks/useApi';
import { RatingStars } from '../common/RatingStars';
import { CommentModel, UserModel } from '../../api/data-contracts';
import moment from 'moment';
import getStyles from '../../utils/getStyles';
import { BlockStyle } from '../../types/interfaces/IStyles';

export const CommentComponent = ({ comment }: { comment: CommentModel }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<string>('');
    const date = comment.updateDT ? comment.updateDT : comment.createDT;
    

    const [data, , ] = useApi<'usersDetail', UserModel>(
        'usersDetail',
        comment.userGuid,
        { headers: { Authorization: `Bearer ${retrieve("token")}` } },
        true
    );

    useEffect(() => {
        setUser(data?.username as string);
    }, [data]);

    if (!comment || comment.isDeleted) return null;

    return (
        <div className={getStyles(containerStyle)}>
            <RatingStars value={4} />
            <div className={getStyles(pairStyle)}>
                <span>{user}</span>
                <span>{moment(date).format('DD.MM.YYYY')}</span>
            </div>
            <p className={getStyles(textStyle)}>{comment.text}</p>
            <div className={getStyles(pairStyle)}>
                <Button showButton={true} onClick={() => navigate('/reply')} className={getStyles(btnStyle)}>Ответить</Button>
                <span>Ответы</span>
            </div>
        </div>
    );
};


const containerStyle: BlockStyle = {
    container: 'flex flex-col',
    spacing: 'space-y-5 mt-8 mx-1 pb-2',
    border: 'border-b'
};

const pairStyle: BlockStyle = {
    container: 'flex justify-between',
    spacing: 'mx-2'
};

const textStyle: BlockStyle = {
    spacing: 'p-3 mx-2',
    border: 'border rounded-md',
    text: 'text-gray-500'
};

const btnStyle: BlockStyle = {
    text: 'sm'
};
