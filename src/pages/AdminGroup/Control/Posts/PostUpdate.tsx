import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useApi from '../../../../hooks/useApi';
import { PostModel, UpdatePostModel } from '../../../../api/data-contracts';
import { retrieve } from '../../../../utils/encryption';
import { Button } from '../../../../Components/common/Button';
import { fromPostModelToUpdatePostModel } from '../../../../utils/fromPostModelToUpdatePostModel';
import { Modal } from '../../../../Components/common/Modal';
import { ResultInModal } from '../../../../Components/common/ResultInModal';


export const PostUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [dataToUpdate, setDataToUpdate] = useState<UpdatePostModel>({});
    // флаг на изменение данных (чтобы не отправлять запрос в холостую)
    const [changeFlag, setChangeFlag] = useState<boolean>(false);
    const config = { headers: { Authorization: `Bearer ${retrieve("token")}` } };

    // модалка
    const [modal, setModal] = useState<boolean>(false);
    const [msg, setMsg] = useState<'Данные успешно отправлены' | 'Публикация удалена' | 'Ошибка! Данные не удалось отправить' | null>(null);
    const [img, setImg] = useState<'success' | 'failure' | null>(null);

    // get-запрос на получение исходников по посту
    const [getFlag, setGetFlag] = useState<boolean>(true);
    const [getData, isLoadingGet, getEerror] = useApi<'postsDetail', PostModel>('postsDetail', id, config, getFlag);

    useEffect(() => {
        if (isLoadingGet) setGetFlag(false);
        if (getData && !getEerror) {
            setDataToUpdate(fromPostModelToUpdatePostModel(getData));
        };
    }, [getData, isLoadingGet, getEerror])

    // put-запрос на обновление данных
    const [putFlag, setPutFlag] = useState<boolean>(false);
    const [putData, isLoadingPut, putError] = useApi<'postsUpdate', PostModel>('postsUpdate', dataToUpdate, config, putFlag);

    useEffect(() => {
        if (isLoadingPut) setPutFlag(false);
        if (putData || putError) {
            setModal(true);
            if (putData) {
                setDataToUpdate(fromPostModelToUpdatePostModel(putData));
                setMsg('Данные успешно отправлены'); setImg('success');
            } else if (putError) {
                setMsg('Ошибка! Данные не удалось отправить'); setImg('failure');
            };
        };
    }, [putData, isLoadingPut, putError]);

    // delete-запрос
    const [deleteFlag, setDeleteFlag] = useState<boolean>(false);
    const [, isLoadingDelete, deleteError] = useApi<'postsDelete', void>('postsDelete', id, config, deleteFlag);

    useEffect(() => {
        if (isLoadingDelete) {
            setModal(true);
            if (!deleteError) {
                setMsg('Публикация удалена'); setImg('success');
            } else {
                setMsg('Ошибка! Данные не удалось отправить'); setImg('failure');
            };
        };
    }, [isLoadingDelete, deleteError]);

    const handleCh = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setChangeFlag(true);
        setDataToUpdate({ ...dataToUpdate, [event.target.name]: event.target.value });
    };

    const handleSub = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (changeFlag) {
            setPutFlag(true); setChangeFlag(false);
        };
    };
    
    return (
        <>
            <form className='border-t w-full py-3 px-2 text-sm' onSubmit={handleSub}>
                <h3 className='w-full text-center uppercase my-2'>Редактирование поста</h3>
                <textarea
                    className='w-full h-48 my-1 p-2 bg-light-gray focus:outline-none rounded-md'
                    name='text'
                    value={dataToUpdate.text}
                    onChange={handleCh}
                />
                <div className='flex items-center justify-between text-white text-xs'>
                    <Button showButton={true} className={`${btnStyle} bg-red-700 hover:bg-red-900`} type='button' onClick={() => setDeleteFlag(true)}>Удалить</Button>
                    <Button showButton={true} className={`${btnStyle} bg-custom-blue hover:bg-navy-blue`} type='submit'>Изменить</Button>
                </div>
            </form>
            <Modal
                isOpen={modal}
                setIsOpen={setModal}
                swipeable={true}
            >
                <ResultInModal message={msg || ''} imgPath={`/images/${img}.png`}/>
                <Button showButton={true} onClick={() => { msg === 'Публикация удалена'? navigate(-1): setModal(false) }}>Закрыть</Button>
            </Modal>
        </>
    );
};

const btnStyle = 'px-2 py-1 my-2 border rounded-md';
