import { useEffect, useState } from "react";
import { LogOut } from "../../common/LogOut";
import Item from "../../common/ItemGroup/Item";
import { Photo } from "../../common/Photo";
import { Modal } from "../../common/Modal";

import { useUserUpdate } from "../../../hooks/useUserUpdate";
import { IAuthMeList } from "../../../types/interfaces/ApiResponses/IAuthMeList";
import useAuth from "../../../hooks/useAuth";
import { Button } from "../../common/Button";
import { useNavigate } from "react-router-dom";
import ProfilePhotoFileSelector from "../../common/ProfilePhotoSelector/File/ProfilePhotoFileSelector";
import { WebcamPhotoSelector } from "../../common/ProfilePhotoSelector/Webcam/WebcamPhotoSelector";

//add to Profile.tsx buttons  i peremennlike in ImageCrop ()
//Webcam.tsx remove  input, replace inputfile to webcamfile

export const Profile = () => {
    const navigate = useNavigate();
    const isAuth = useAuth(true);
    const [profileInfo, setPorfileInfo] = useState<IAuthMeList>(isAuth);
    useEffect(() => {
        setPorfileInfo(isAuth);
    }, [isAuth]);

    const [showImageCrop, setShowImageCrop] = useState<boolean>(false);
    const [showWebcamCrop, setShowWebcamCrop] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);
    const [guidImg, setGuidImg] = useState<string | null>(null);

    useEffect(() => {
        if (profileInfo.mainAvatarGuid) setGuidImg(profileInfo.mainAvatarGuid);
    }, [profileInfo.mainAvatarGuid]);

    const [sendData, setSendData] = useState<boolean>(false);
    const [data] = useUserUpdate(
        { mainAvatarGuid: guidImg },
        sendData,
        setSendData
    );
    useEffect(() => {
        if (guidImg) {
            setSendData(true);
            setShowImageCrop(false);
            setShowWebcamCrop(false);
        }
    }, [guidImg]);

    useEffect(() => {
        if (data) {
            setSendData(false);
            setModal(false);
        }
    }, [data]);

    useEffect(() => {
        if (localStorage.getItem("email-guid") || localStorage.getItem("phone-guid")) {
            localStorage.removeItem("email-guid");
            localStorage.removeItem("phone-guid");
        }
    }, []);

    return (
        <div className="w-full px-3">
            <h2 className="text-xl font-bold my-4">Профиль</h2>
            <div className="flex items-center" onClick={() => setModal(true)}>
                <div className="m-4">
                    <Photo
                        id={profileInfo.mainAvatarGuid || null}
                        styles="w-14 h-14 rounded-full"
                        alt="фото профиля"
                    />
                </div>
                <p>{profileInfo.username}</p>
            </div>
            <Button
                showButton={true}
                styles="flex w-full rounded-xl my-3 py-4 pl-16 bg-violet items-center justify-start gap-3 hover:bg-[#948DFE]"
                onClick={() => navigate("./scan")}
            >
                <img src="/images/scan.svg" alt="значок сканирования изделия"/>
                Отсканировать изделие
            </Button>
            <Button
                showButton={true}
                styles="flex w-full rounded-xl mb-3  py-4 pl-16 bg-violet items-center justify-start gap-3 hover:bg-[#948DFE]"
                onClick={() => navigate("./scan")}
            >
                <img src="/images/check.svg" alt="значок проверки оригинальности изделия"/>
                Проверить оригинальность
            </Button>

            <Item path="./favorites">Избранное</Item>
            <Item path="/subscriptions">Подписки</Item>
            <Item path="/scans">Сканирования</Item>

            <h2 className="text-xl font-bold my-4">Настройки</h2>
            <Item path="./email">
                <div className="flex flex-col">
                    <div>Почта:</div>
                    <div>
                        {profileInfo.userInfo?.email
                            ? profileInfo.userInfo.email
                            : "не подтверждена"}
                    </div>
                </div>
                {profileInfo.userInfo?.email && (
                    <span className="cursor-pointer text-xs m-0 absolute right-8">
                        Обновить
                    </span>
                )}
            </Item>
            <Item path="./phone">
                <div className="flex flex-col">
                    <div>Телефон:</div>
                    <div>
                        {profileInfo.userInfo?.phone
                            ? profileInfo.userInfo.phone
                            : "не подтвержден"}
                    </div>
                </div>
            </Item>
            <Item path="/password">Пароль</Item>
            <div className="w-2/3 m-auto">
                <Button
                    showButton={true}
                    onClick={() => navigate("/brand/create")}
                >
                    Отправить заявку
                </Button>
            </div>
            <LogOut show={true} />
            <Modal
                isOpen={modal}
                setIsOpen={setModal}
                swipeable={false}
                additionalStyles={{
                    container:
                        "fixed inset-0 overflow-hidden flex items-end justify-center",
                    panel: "w-full h-[40%] transform overflow-hidden rounded-t-2xl bg-white px-16 py-10",
                }}
            >
                {showImageCrop && (
                    <ProfilePhotoFileSelector
                        aspect={1}
                        setGuidImg={setGuidImg}
                    />
                )}

                {showWebcamCrop && (
                    <WebcamPhotoSelector setGuidImg={setGuidImg} />
                )}

                <div className="flex flex-col gap-2">
                    <Button
                        showButton={!showWebcamCrop && !showImageCrop}
                        onClick={() => {
                            setShowWebcamCrop(true);
                        }}
                    >
                        Сделать фото
                    </Button>

                    <Button
                        showButton={!showImageCrop && !showWebcamCrop}
                        onClick={() => setShowImageCrop(true)}
                    >
                        Добавить фото
                    </Button>

                    <Button
                        showButton={
                            profileInfo.mainAvatarGuid !== null &&
                            !showImageCrop &&
                            !showWebcamCrop
                        }
                        onClick={() => {
                            setGuidImg(null);
                            setSendData(true);
                        }}
                    >
                        Удалить фото
                    </Button>
                </div>
            </Modal>
        </div>
    );
};
