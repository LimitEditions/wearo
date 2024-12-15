import React, { useEffect, useState } from 'react'
import { CommentModel, CommentModelDataResult } from '../../api/data-contracts'
import { useApiNew } from '../../hooks/useApi';
import { Input } from '../common/InputGroup/Input';
import withMask from '../common/hoc/withMask';
import { Button } from '../common/Button';
import { retrieve } from '../../utils/encryption';

interface CommentData {
    guid: string,
    userFirstName: string,
    userLastName: string,
    text: string,
}
const InputWithMask = withMask(Input);

export const CommentsList = ({ entityId, updateCommentsCount }: { entityId: string, updateCommentsCount: Function }) => {
    const commentsListApi = useApiNew<CommentModelDataResult>('postCommentsList', { token: true, immediate: false})
    const createCommentApi = useApiNew('postCommentsCreate', { token: true, immediate: false})
    useEffect(() => {
        commentsListApi.execute({
            EntityGuid: entityId,
        })
    }, [])

    const comments = commentsListApi.data

    const [comment, setComment] = useState("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setComment(value);
    };

    useEffect(() => {
        updateCommentsCount(comments?.data?.length ?? 0)
    }, [comments])

    const userId = retrieve('guid');
    const createComment = () => { 
        setComment("")
        createCommentApi.execute({userGuid: userId,
            text: comment,
            isLike: true, 
            entityGuid: entityId}).then(() => {
                commentsListApi.execute({
                    EntityGuid: entityId,
                })
            })
    }

    return (
        <div className='pt-1'>
            {
                comments?.data && comments.data.map(el => { 
                    return <div style={{marginTop: "10px", height: "50px"}}>
                            {el.text} - {el.user?.firstName} {el.user?.secondName} {el.user?.username}
                            <hr/>
                        </div> 
                })
            }
            <div style={{display: "flex"}}>
                <Input
                    value={comment}
                    onChange={handleChange}
                    placeholder="текст комментария"
                />
                <div className="w-1/5 m-auto ml-4">
                    <Button onClick={createComment} showButton={true} disabled={createCommentApi.isLoading}>Отправить заявку</Button>
                </div>
            </div>
        </div>
    )
}