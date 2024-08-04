import React, { useEffect, useState } from 'react'
import getStyles from '../../../utils/getStyles';
import { BlockStyle } from '../../../types/interfaces/IStyles';
import { LogOut } from '../../common/LogOut';
import Item from '../../common/ItemGroup/Item';
import { Photo } from '../../common/Photo';
import { Modal } from '../../common/Modal';
import ImageCrop from '../../common/ImageCrop';
import { useUserUpdate } from '../../../hooks/useUserUpdate';
import { IAuthMeList } from '../../../types/interfaces/ApiResponses/IAuthMeList';
import useAuth from '../../../hooks/useAuth';
import { Button } from '../../common/Button';
import { useNavigate } from 'react-router-dom';


export const Profile = () => {
    const navigate = useNavigate();
    const isAuth = useAuth(true);
    const [profileInfo, setPorfileInfo] = useState<IAuthMeList>(isAuth);
    useEffect(() => {
        setPorfileInfo(isAuth);
    }, [isAuth]);

    const [showImageCrop, setShowImageCrop] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);
    const [guidImg, setGuidImg] = useState<string | null>(null);
    useEffect(() => {
        if (profileInfo.mainAvatarGuid) setGuidImg(profileInfo.mainAvatarGuid);
    }, [profileInfo.mainAvatarGuid])

    const [sendData, setSendData] = useState<boolean>(false);
    const [data, ] = useUserUpdate({mainAvatarGuid: guidImg}, sendData, setSendData);
    useEffect(() => {
        if(guidImg) {
            setSendData(true);
            setShowImageCrop(false);
        };
    }, [guidImg]);

    useEffect(() => {
        if(data) {
            setSendData(false);
            setModal(false);
        };
    }, [data]);

    
    return (
        <div className={getStyles(profStyle)}>
            <h2 className={getStyles(headStyle)}>Профиль</h2>
            <div className={getStyles(nameStyle)} onClick={() => setModal(true)}>
                <Photo id={profileInfo.mainAvatarGuid || null} styles={getStyles(fotoStyle)} alt={'foto'} />
                <p>{profileInfo.username}</p>
            </div>
            <Button showButton={true} styles={scanBtn} onClick={() => navigate('./scan')}>
                Отсканировать изделие
            </Button>

            <Item path="/favorites">Избранное</Item>
            <Item path="/subscriptions">Подписки</Item>
            <Item path="/scans">Сканирования</Item>

            <h2 className={getStyles(headStyle)}>Настройки</h2>
            <Item path="./email">
                <div className='flex flex-col'>
                    <div>
                        Почта:
                    </div>
                    <div>
                        {profileInfo.userInfo?.email ? profileInfo.userInfo.email: 'не подтверждена'}
                    </div>
                </div>
                {profileInfo.userInfo?.email && <span className='cursor-pointer text-xs m-0 absolute right-5'>Обновить</span>}
            </Item>
            <Item path="./phone">
                <div className='flex flex-col'>
                    <div>
                        Телефон:
                    </div>
                    <div>
                        {profileInfo.userInfo?.phone ? profileInfo.userInfo.phone: 'не подтвержден'}
                    </div>
                </div>
            </Item>
            <Item path="/password">Пароль</Item>

            <LogOut show={true} />
            <Modal 
                isOpen={modal} 
                setIsOpen={setModal} 
                swipeable={false}
                additionalStyles={
                    {
                        container: 'fixed inset-0 overflow-hidden flex items-end justify-center',
                        panel: 'w-full transform overflow-hidden rounded-t-2xl bg-white p-16'
                    }
                }
            >
                {showImageCrop && <ImageCrop aspect={1} setGuidImg={setGuidImg}/>}
                <Button 
                    showButton={!profileInfo.mainAvatarGuid && !showImageCrop} 
                    onClick={ () => setShowImageCrop(true) }
                    >
                        Добавить фото
                </Button>
                <Button 
                    showButton={!!profileInfo.mainAvatarGuid} 
                    onClick={ () => {setGuidImg(null); setSendData(true)} }
                    >
                        Удалить фото
                </Button>
            </Modal>
        </div>
    );
};

const profStyle: BlockStyle = {
    blockSize: "w-full",
    spacing: "px-3",
};

const nameStyle: BlockStyle = {
    blockSize: "flex items-center",
};

const fotoStyle: BlockStyle = {
    blockSize: "w-20 h-20 rounded-full ",
    spacing: "mr-3",
};

const headStyle: BlockStyle = {
    text: "text-xl font-bold",
    spacing: "my-4",
};

const scanBtn: BlockStyle = {
    container: "w-full rounded-xl",
    spacing: "my-3 py-4",
    background: "bg-violet"
};
