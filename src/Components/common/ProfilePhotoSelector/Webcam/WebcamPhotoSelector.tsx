/*
    WebcamPhotoSelector -
    1) making foto with camera  (done)
    2) обрезает ее (done)
    3) отправляет в апи (done)
    4) обновляет 
*/

import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import handlePhotoUpload from "../PhotoUploader";
import PhotoCropper from "../PhotoCropper";

import { BlockStyle } from "../../../../types/interfaces/IStyles";
import getStyles from "../../../../utils/getStyles";
import { WebcamPhotoMaker } from "./WebcamPhotoMaker";

export const WebcamPhotoSelector = ({
    setGuidImg,
}: {
    setGuidImg: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
    const [capturedPhoto, setCapturedPhoto] = useState<File | null>(null);
    const [croppedFile, setCroppedFile] = useState<File | null>(null);
    const info = useAuth(true);

    const handleUploadAndSaveImg = async () => {
        if (croppedFile) {
            handlePhotoUpload(croppedFile, info.username ?? "not found").then(
                (imgGuid) => {
                    setGuidImg(imgGuid);
                }
            );
        }
    };
    return (
        <div className="flex flex-col items-center justify-center p-4">
            {capturedPhoto === null && (
                <WebcamPhotoMaker setCapturedPhoto={setCapturedPhoto} />
            )}
            {capturedPhoto && (
                <PhotoCropper
                    file={capturedPhoto}
                    setCroppedFile={setCroppedFile}
                />
            )}

            {croppedFile && (
                <div className="flex flex-col items-center mt-4">
                    <img
                        src={URL.createObjectURL(croppedFile)}
                        alt="Cropped"
                        className="max-w-full rounded shadow"
                    />
                    <button
                        onClick={handleUploadAndSaveImg}
                        className={getStyles(btnApplyStyle)}
                    >
                        Принять
                    </button>
                </div>
            )}
        </div>
    );
};
const btnApplyStyle: BlockStyle = {
    container: "box-content rounded-md",
    spacing: "px-2 py-1 my-2",
    background: "bg-gray-400 hover:bg-black",
    text: "text-white text-md",
};
