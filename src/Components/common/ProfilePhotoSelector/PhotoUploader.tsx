import { retrieve } from "../../../utils/encryption";

const handlePhotoUpload = async (file: File, username: string): Promise<string> => {
    const fileType = file.type.replace("image/", "")
    const apiFileType = fileType.charAt(0).toUpperCase() + fileType.slice(1);
    const formData = new FormData();
    formData.append("Name", `mainAvatarGuid - ${username}`);
    formData.append("Type", apiFileType);
    formData.append("File", file);
    console.log(fileType, file);
    try {
        const token = await retrieve("token");
        const response = await fetch(
            `${process.env.REACT_APP_URL_REQUEST}/api/Files`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            }
        );

        return await response.json();
    } catch (error) {
        console.error(
            "Ошибка при отправке изображения на сервер:",
            error
        );
        return ""
    }
}

export default handlePhotoUpload