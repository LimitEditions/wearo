import React, { useState } from "react";
import { Button } from "../common/Button";
import withMask from "../common/hoc/withMask";
import { Input } from "../common/InputGroup/Input";
import { ChangeEvent } from "react";
import { useId } from "react";
import { MyFile } from "../../types/BrandDataType";
import { BrandDataType } from "../../types/BrandDataType";

const InputWithMask = withMask(Input);

export const BrandForm = () => {
    const [modal, setModal] = useState<boolean>(false);
    const [brandData, setBrandData] = useState<BrandDataType>({
        name: "",
        site: "",
        socialMedia: [],
        uploadPresentation: [],
        fullName: "",
        address: "",
        inn: "",
        ogrn: "",
        kpp: "",
        email: "",
        phone: "",
        uploadLabel: [],
    });

    const id = useId();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBrandData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onChangePresentation = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const file = (e.target as HTMLInputElement)?.files;
        if (file === null) {
            return;
        }
        const newMyFiles = Array.from(file).map((element) => {
            return { file: element, id: id } as MyFile;
        });

        setBrandData((prevData) => ({
            ...prevData,
            uploadPresentation: [...newMyFiles, ...prevData.uploadPresentation],
        }));
    };
    const onChangeLabel = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const file = (e.target as HTMLInputElement)?.files;
        if (file === null) {
            return;
        }
        const newMyFiles = Array.from(file).map((element) => {
            return { file: element, id: id } as MyFile;
        });

        setBrandData((prevData) => ({
            ...prevData,
            uploadLabel: [...newMyFiles, ...prevData.uploadLabel],
        }));
    };
    const deleteFile = (id: string) => {
        const filtered = brandData.uploadPresentation.filter((element) => {
            return element.id !== id;
        });
        setBrandData((prevData) => ({
            ...prevData,
            uploadPresentation: filtered,
        }));
    };

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
                        <img src="images/nav/closeBtn.svg" alt="крестик" />
                    </Button>
                </div>
                <label>Наименование бренда</label>
                <InputWithMask
                    placeholder="Наименование"
                    value={brandData.name}
                    onChange={handleChange}
                    name="name"
                />

                <label>Сайт бренда</label>
                <InputWithMask
                    placeholder="Ссылка на сайт"
                    value={brandData.site}
                    onChange={handleChange}
                    name="site"
                />

                <label>Социальные сети бренда</label>
                <InputWithMask
                    placeholder="Ссылка на социальные сети"
                    value={brandData.socialMedia}
                    onChange={handleChange}
                    name="socialMedia"
                />

                <label>Рич-контент</label>
                <p className="text-sm text-gray-400 ">
                    Предоставьте презентацию или описание вашего бренда
                </p>

                <label className="flex flex-row gap-2 justify-center items-center cursor-pointer">
                    <img src="/images/attachment.svg" />
                    Прикрепить файл
                    <Input
                        className="hidden"
                        type="file"
                        style={{ color: "transparent" }}
                        onChange={onChangePresentation}
                    />
                </label>
                {brandData.uploadPresentation.map((element) => {
                    return (
                        <div className="flex w-full">
                            <div className="flex flex-row gap-2 justify-start items-center">
                                <img src="/images/multPages.svg" />
                                <h1>{element.file.name}</h1>
                            </div>
                            <div className="flex w-full justify-end items-center">
                                <Button
                                    showButton={true}
                                    styles="false"
                                    onClick={() => {
                                        deleteFile(element.id);
                                    }}
                                >
                                    Удалить
                                </Button>
                            </div>
                        </div>
                    );
                })}

                <h3 className="uppercase mb-2 ">Реквизиты</h3>

                <label>Полное наименование</label>
                <InputWithMask
                    placeholder="ИП/ООО"
                    value={brandData.fullName}
                    onChange={handleChange}
                    name="fullName"
                />

                <label>Юридический адрес</label>
                <InputWithMask
                    placeholder="Адрес"
                    value={brandData.address}
                    onChange={handleChange}
                    name="address"
                />

                <label>ИНН</label>
                <InputWithMask
                    placeholder="48496269594"
                    value={brandData.inn}
                    onChange={handleChange}
                    name="inn"
                    type="number"
                />

                <label>ОГРН / ОГРНИП</label>
                <InputWithMask
                    placeholder="48496269594"
                    value={brandData.ogrn}
                    onChange={handleChange}
                    name="ogrn"
                    type="number"
                />

                <label>КПП</label>
                <p className="text-sm text-gray-400">
                    Заполняется только для организаций, зарегистрированных как
                    ООО
                </p>
                <InputWithMask
                    placeholder="48496269594"
                    value={brandData.kpp}
                    onChange={handleChange}
                    name="kpp"
                    type="number"
                />

                <label>Электронная почта</label>
                <InputWithMask
                    placeholder="example@gmail.com"
                    value={brandData.email}
                    onChange={handleChange}
                    name="email"
                />

                <label>Номер телефона</label>
                <InputWithMask
                    placeholder=""
                    value={brandData.phone}
                    onChange={handleChange}
                    name="phone"
                    type="number"
                />

                <label>Свидетельство на товарный знак</label>
                <p className="text-sm text-gray-400">
                    Предоставьте свидетельство на товарный знак
                </p>
                <label className="flex flex-row gap-2 justify-center items-center cursor-pointer">
                    <img src="/images/attachment.svg" />
                    Прикрепить файл
                    <Input
                        className="hidden"
                        type="file"
                        style={{ color: "transparent" }}
                        onChange={onChangeLabel}
                    />
                </label>
                {brandData.uploadLabel.map((element) => {
                    return (
                        <div className="flex w-full">
                            <div className="flex flex-row gap-2 justify-start items-center">
                                <img src="/images/multPages.svg" />
                                <h1>{element.file.name}</h1>
                            </div>
                            <div className="flex w-full justify-end items-center">
                                <Button
                                    showButton={true}
                                    styles="false"
                                    onClick={() => {
                                        deleteFile(element.id);
                                    }}
                                >
                                    Удалить
                                </Button>
                            </div>
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
