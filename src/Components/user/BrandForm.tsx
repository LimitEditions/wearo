import React, { useState } from "react";
import { Button } from "../common/Button";
import withMask from "../common/hoc/withMask";
import { Input } from "../common/InputGroup/Input";
import { ChangeEvent } from "react";
import { nanoid } from "nanoid";

const InputWithMask = withMask(Input);
type MyFile = {
    file: File;
    id: string;
};
export const BrandForm = () => {
    const [modal, setModal] = useState<boolean>(false);
    const [files, setFiles] = useState<MyFile[]>([]);
    const [brandData, setBrandData] = useState<MyFile[]>([]);

    const onChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const f = (e.target as HTMLInputElement).files;
        if (f === null) {
            return;
        }
        const newMyFiles = Array.from(f).map((element) => {
            return { file: element, id: nanoid() } as MyFile;
        });

        setFiles((oldF) => {
            return [...newMyFiles, ...oldF];
        });
    };

    //here will be use state <BrandCreateData>
    //form html + onchanges
    //button with onClick console.log(<BrandCreateData>)
    return (
        <>
            <form className="flex flex-col items-start justify-center px-4 py-5 space-y-3 ">
                <div className="w-full border-b border-grey-300 relative">
                    <h3 className="uppercase mb-2 ">
                        Заявка на открытие бренда
                    </h3>
                    <Button
                        showButton={true}
                        className="absolute top-1.5 right-1 "
                        onClick={() => setModal(false)}
                    >
                        <img src="images/closeBtn.svg" alt="крестик" />
                    </Button>
                </div>
                <label>Наименование бренда</label>
                <InputWithMask placeholder="Наименование" />

                <label>Сайт бренда</label>
                <InputWithMask placeholder="Ссылка на сайт" />

                <label>Социальные сети бренда</label>
                <InputWithMask placeholder="Ссылка на социальные сети" />

                <label>Рич-контент</label>
                <p className="text-sm text-gray-400 ">
                    Предоставьте презентацию или описание вашего бренда
                </p>

                <label className="flex flex-row gap-2 justify-center items-center cursor-pointer">
                    <img src="/images/attachment.svg" />
                    Прикрепить файл
                    <input
                        className="hidden"
                        type="file"
                        style={{ color: "transparent" }}
                        onChange={onChange}
                    />
                </label>
                {files.map((element) => {
                    return (
                        <div className="flex flex-row gap-2 justify-center items-center">
                            <img src="/images/multPages.svg" />
                            <h1>{element.file.name}</h1>
                        </div>
                    );
                })}

                <h3 className="uppercase mb-2 ">Реквизиты</h3>

                <label>Полное наименование</label>
                <InputWithMask placeholder="ИП/ООО" />

                <label>Юридический адрес</label>
                <InputWithMask placeholder="Адрес" />

                <label>ИНН</label>
                <InputWithMask placeholder="48496269594" />

                <label>ОГРН / ОГРНИП</label>
                <InputWithMask placeholder="48496269594" />
                <label>КПП</label>
                <p className="text-sm text-gray-400">
                    Заполняется только для организаций, зарегистрированных как
                    ООО
                </p>
                <InputWithMask placeholder="48496269594" />
                <label>Электронная почта</label>
                <InputWithMask placeholder="example@gmail.com" />
                <label>Номер телефона</label>
                <InputWithMask placeholder="" />
                <label>Свидетельство на товарный знак</label>
                <p className="text-sm text-gray-400">
                    Предоставьте свидетельство на товарный знак
                </p>
                <label className="flex flex-row gap-2 justify-center items-center cursor-pointer">
                    <img src="/images/attachment.svg" />
                    Прикрепить файл
                    <input
                        className="hidden"
                        type="file"
                        style={{ color: "transparent" }}
                        onChange={onChange}
                    />
                </label>
                {files.map((element) => {
                    return (
                        <div className="flex flex-row gap-2 justify-center items-center">
                            <img src="/images/multPages.svg" />
                            <h1>{element.file.name}</h1>
                        </div>
                    );
                })}
            </form>
            <div className="w-2/3 m-auto">
                <Button showButton={true}>Отправить заявку</Button>
            </div>
        </>
    );
};
