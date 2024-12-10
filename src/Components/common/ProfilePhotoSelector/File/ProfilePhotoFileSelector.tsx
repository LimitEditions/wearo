import React, { useState, useCallback, useRef } from "react";
import ReactCrop, { Crop, PixelCrop, PercentCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import handlePhotoUpload from "../PhotoUploader";
import useAuth from "../../../../hooks/useAuth";
import FileSelector from "./FileSelector";
import PhotoCropper from "../PhotoCropper";

/*
    ProfilePhotoFileSelector -
    1) дает выбрать фотку из файлов (doing)
    2) обрезает ее (doing)
    3) отправляет в апи (done)
    4) обновляет 
*/

function ProfilePhotoFileSelector({
    aspect,
    setGuidImg,
}: {
    aspect: number;
    setGuidImg: React.Dispatch<React.SetStateAction<string | null>>;
}) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
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
            <FileSelector setFile={setSelectedFile} />
            {selectedFile && (
                <PhotoCropper
                    file={selectedFile}
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
                        className="box-content rounded-md px-2 py-1 my-2 bg-gray-400 hover:bg-black text-white text-md "
                    >
                        Принять
                    </button>
                </div>
            )}
        </div>
    );
}

export default ProfilePhotoFileSelector;
