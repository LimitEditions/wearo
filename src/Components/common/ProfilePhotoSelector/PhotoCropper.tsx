import { useCallback, useEffect, useRef, useState } from "react";
import ReactCrop, { Crop, PercentCrop, PixelCrop } from "react-image-crop";
import { BlockStyle } from "../../../types/interfaces/IStyles";
import { Button } from "../Button";
import getStyles from "../../../utils/getStyles";
import fileToBase64 from "./FileUtil";

export default ({
    file,
    setCroppedFile,
}: {
    file: File;
    setCroppedFile: Function;
}) => {
    console.log(file);
    const [base64SelectedFile, setBase64SelectedFile] = useState<
        string | null
    >();
    const [base64CroppedImage, setBase64CroppedImage] = useState<string | null>(
        null
    );

    const [crop, setCrop] = useState<Crop>({
        unit: "%",
        x: 25,
        y: 25,
        width: 50,
        height: 50,
    });
    const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const onImageLoad = useCallback((img: HTMLImageElement) => {
        imageRef.current = img;
    }, []);

    const imageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        fileToBase64(file).then((base64) => setBase64SelectedFile(base64));
    }, []);

    const handleCancel = () => {
        fileToBase64(file).then((base64) => {
            setBase64SelectedFile(base64);
        });
        setBase64CroppedImage(null);
    };

    const handleSave = () => {
        const canvas = previewCanvasRef.current;
        if (!canvas) return;

        canvas.toBlob((blob) => {
            if (blob) {
                const croppedUrl = URL.createObjectURL(blob);
                setBase64CroppedImage(croppedUrl);
                setBase64SelectedFile(null); // Убираем редактируемую область после сохранения
                setCroppedFile(
                    new File([blob], file!.name, { type: blob.type })
                );
            }
        }, file.type);
    };

    const onCropComplete = useCallback(
        (crop: PixelCrop, percentCrop: PercentCrop) => {
            if (imageRef.current && crop.width && crop.height) {
                console.log("cropped");
                const image = imageRef.current;
                const canvas = previewCanvasRef.current;
                const ctx = canvas?.getContext("2d");
                if (!canvas || !ctx) return;

                const scaleX = image.naturalWidth / image.width;
                const scaleY = image.naturalHeight / image.height;

                canvas.width = crop.width;
                canvas.height = crop.height;

                ctx.drawImage(
                    image,
                    crop.x * scaleX,
                    crop.y * scaleY,
                    crop.width * scaleX,
                    crop.height * scaleY,
                    0,
                    0,
                    crop.width,
                    crop.height
                );
            }
        },
        []
    );

    console.log(base64SelectedFile);

    return (
        <div className="relative mb-4">
            <div className="w-full flex flex-col space-y-2">
                <canvas ref={previewCanvasRef} style={{ display: "none" }} />
                <div className="flex justify-end space-x-2">
                    <Button
                        showButton={!!base64SelectedFile}
                        onClick={handleSave}
                        className={getStyles(btnStyle)}
                    >
                        <img src={"/images/success.svg"} alt="галочка" />
                    </Button>
                    <Button
                        onClick={handleCancel}
                        className={getStyles(btnStyle)}
                        showButton={!!base64CroppedImage}
                    >
                        <img src={"/images/closeBtn.png"} alt="крестик" />
                    </Button>
                </div>
            </div>
            {!!base64SelectedFile && (
                <div className="relative mb-4">
                    <ReactCrop
                        crop={crop}
                        onChange={(newCrop) => setCrop(newCrop)}
                        onComplete={onCropComplete}
                        aspect={1}
                    >
                        <img
                            src={base64SelectedFile}
                            onLoad={(e) => onImageLoad(e.currentTarget)}
                            alt="Source"
                            className="max-w-full max-h-96"
                        />
                    </ReactCrop>
                </div>
            )}
        </div>
    );
};
const btnStyle: BlockStyle = {
    background: "opacity-40 hover:opacity-100",
};
