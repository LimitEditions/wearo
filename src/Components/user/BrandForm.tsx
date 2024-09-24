import React, { useState } from "react";
import { Button } from "../common/Button";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";
import withMask from "../common/hoc/withMask";
import { Input } from "../common/InputGroup/Input";

const InputWithMask = withMask(Input);

export const BrandForm = () => {
    const [modal, setModal] = useState<boolean>(false);
    //here will be use state <BrandCreateData>
    //form html + onchanges
    //button with onClick console.log(<BrandCreateData>)
    return (
        <>
            <form className={getStyles(formStyle)}>
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

                <a className="flex flex-row gap-2">
                    <img src="/images/attachment.svg" />
                    <span> Прикрепить файл</span>
                </a>
                <h3 className="uppercase mb-2">Реквизиты</h3>

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
                <a className="flex flex-row gap-2">
                    <img src="/images/attachment.svg" />
                    <span> Прикрепить файл</span>
                </a>
            </form>
            <div className="w-2/3 m-auto">
                <Button showButton={true}>Отправить заявку</Button>
            </div>
        </>
    );
};
const formStyle: BlockStyle = {
    container: "flex flex-col items-start justify-center",
    spacing: "px-4 py-5 space-y-3",
};
