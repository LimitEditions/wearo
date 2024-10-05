import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useApi from '../../../../hooks/useApi';
import { retrieve } from '../../../../utils/encryption';
import { CreatePostModel, PostModel } from '../../../../api/data-contracts';
import { Input } from '../../../../Components/common/InputGroup/Input';
import { Button } from '../../../../Components/common/Button';
import { Modal } from '../../../../Components/common/Modal';
import { ResultInModal } from '../../../../Components/common/ResultInModal';


export const PostCreate = () => {
    const navigate = useNavigate();
    const [dataToCreate, setDataToCreate] = useState<CreatePostModel>({
        brandGuid: '',
        text: '',
        fileGuid: null,
        collectionGuid: null,
        lookGuid: null,
        tipGuid: null,
        promoGuid: null,
    });

    const [modal, setModal] = useState<boolean>(false);
    const [msg, setMsg] = useState<'Новая публикация создана' | 'Ошибка! Данные не удалось отправить' | null>(null);
    const [img, setImg] = useState<'success' | 'failure' | null>(null);

    const [postFlag, setPostFlag] = useState<boolean>(false);
    const [postData, isLoadingPost, postError] = useApi<'postsCreate', PostModel>(
        'postsCreate',
        dataToCreate,
        { headers: { Authorization: `Bearer ${retrieve("token")}` } },
        postFlag
    );

    useEffect(() => {
        if (isLoadingPost) setPostFlag(false);
        if (postData || postError) {
            setModal(true);
            if(postData) {
                setMsg('Новая публикация создана');
                setImg('success');
            } else if (postError) {
                setMsg('Ошибка! Данные не удалось отправить');
                setImg('failure');
            };
        };
    }, [postData, isLoadingPost, postError]);

    const handleCh = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataToCreate({ ...dataToCreate, [event.target.name]: event.target.value });
    };

    const handleSub = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setPostFlag(true);
    };

    return (
        <>
            <form className='border-t w-full py-3 px-2 text-sm' onSubmit={handleSub}>
                <h3 className='w-full text-center uppercase my-2'>Создание публикации</h3>
                {
                    (Object.keys(dataToCreate) as Array<keyof CreatePostModel>).map((field) => {
                        const fieldVal = dataToCreate[field];
                        return <div key={field}>
                            <label htmlFor={field}>{field}</label>
                            <Input
                                name={field}
                                value={fieldVal || ''}
                                onChange={handleCh}
                            />
                        </div>
                    })
                }
                <div className='flex items-center justify-end text-white text-xs'>
                    <Button showButton={true} className='px-2 py-1 my-2 border rounded-md bg-custom-blue hover:bg-navy-blue' type='submit'>Создать</Button>
                </div>
            </form>
            <Modal
                isOpen={modal}
                setIsOpen={setModal}
                swipeable={true}
            >
                <ResultInModal message={msg || ''} imgPath={`/images/${img}.png`}/>
                <Button showButton={true} onClick={() => navigate(-1)}>Вернуться к списку</Button>
            </Modal>
        </>
    );
};
