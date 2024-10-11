import React, { useEffect, useMemo, useState } from "react";
import PinInput from "react-pin-input";
import { Button } from "../../common/Button";
import { retrieve } from "../../../utils/encryption";
import useApi from "../../../hooks/useApi";
import { NavigateFunction } from "react-router-dom";
import { Modal } from "../../common/Modal";
import { Api } from "../../../api/Api";

export const Pin = ({ navigate }: { navigate: NavigateFunction }) => {
    // стейт на значение пин-кода
    const [pinValue, setPinValue] = useState("");

    // колбек на изменение пина
    const handlePinChange = (value: React.SetStateAction<string>) => {
        // setPinValue(value)
        if (value.length > 3) {
            // нужно добавить дефис между 3 и 4 символами
            let withDash = value as string;
            withDash = `${withDash.slice(0, 3)}-${withDash.slice(3)}`;
            setPinValue(withDash);
        }
    };

    // стейты на модальное окно и отправку запроса на сервер
    const [modal, setModal] = useState<boolean>(false);
    const [shouldExecute, setShouldExecute] = useState<boolean>(false);

    // описание метода отправки данных на сервер
    const params_config: [keyof Api<unknown>, any, any, boolean] =
        useMemo(() => {
            return [
                "confirmationRequestsEmailConfirmCreate",
                { guid: retrieve("email-guid"), code: pinValue },
                { headers: { Authorization: `Bearer ${retrieve("token")}` } },
                shouldExecute,
            ];
        }, [pinValue, shouldExecute]);
    const [data, isLoading, error] = useApi(...params_config);

    // остановка запроса
    useEffect(() => {
        if (isLoading) {
            setShouldExecute(false);
        }
    }, [isLoading]);

    // колбек на подтверждение заполненной формы (можно сделать автоматом после ввода последнего значения)
    const handleSubmit = () => {
        if (pinValue.length === 7) {
            setShouldExecute(true);
        }
    };

    // действия после получения успешного ответа
    useEffect(() => {
        if (data === "" || error) {
            setModal(true);
            const timer = setTimeout(() => {
                navigate("../");
            }, 2000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [data, error, navigate]);

    return (
        <div className="mt-10 space-y-5 text-center">
            <div>
                <h1 className="text-lg text-center">
                    Введите код подтверждения
                </h1>
                <p className="text-sm text-gray-500">
                    шестизначный код отправлен на вашу почту
                </p>
            </div>

            <PinInput
                length={6}
                initialValue=""
                onChange={handlePinChange}
                type="numeric"
                inputMode="number"
                focus={true}
                style={{
                    padding: "2vw",
                }}
                inputStyle={{
                    borderColor: "gray",
                    borderRadius: "8px",
                    marginRight: "1vw",
                }}
                inputFocusStyle={{
                    borderColor: "#3447BC",
                }}
            />
            <div className="w-2/3 m-auto">
                <Button
                    showButton={pinValue.length === 7}
                    onClick={handleSubmit}
                >
                    Подтвердить
                </Button>
            </div>
            <div className="flex items-center justify-center">
                <Modal isOpen={modal} setIsOpen={setModal} swipeable={false}>
                    <img src="/images/success.svg" />
                    <p
                        className="text-center text-lg text-[#3447BC]"
                        tabIndex={0}
                    >
                        {data === ""
                            ? "Почта подтверждена"
                            : `Ошибка - ${error?.message}`}
                    </p>
                </Modal>
            </div>
        </div>
    );
};
