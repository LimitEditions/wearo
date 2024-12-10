import React, { useState, useCallback, useRef } from "react";
import "react-image-crop/dist/ReactCrop.css";

import Webcam from "react-webcam";

const videoConstraints = {
    width: 720,
    height: 360,
    facingMode: "user",
};

export const WebcamPhotoMaker = ({
    setCapturedPhoto,
}: {
    setCapturedPhoto: Function;
}) => {
    const [isCaptureEnable, setCaptureEnable] = useState<boolean>(true);

    const webcamRef = useRef<Webcam>(null);

    const capturePhoto = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();

        if (imageSrc) {
            fetch(imageSrc)
                .then((res) => res.blob())
                .then((blob) => {
                    const file = new File([blob], "Avatar.jpeg", {
                        type: "image/jpeg",
                    });
                    const fileType =
                        file.type
                            .replace("image/", "")
                            .charAt(0)
                            .toUpperCase() +
                        file.type.replace("image/", "").slice(1);
                    setCaptureEnable(false);
                    setCapturedPhoto(file);
                });
        }
    }, [webcamRef]);
    return (
        <>
            {isCaptureEnable && (
                <div className="flex flex-col items-center justify-center gap-3">
                    <div>
                        <Webcam
                            audio={false}
                            width={540}
                            height={360}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                            mirrored={true}
                        />
                    </div>
                    <button
                        className="box-content rounded-md px-2 py-1 my-2 bg-gray-400 hover:bg-black text-white text-md "
                        onClick={capturePhoto}
                    >
                        Сделать фото
                    </button>
                </div>
            )}
        </>
    );
};
