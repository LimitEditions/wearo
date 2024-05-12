import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../../../hooks/useApi";
import { validateField } from "../../../utils/validation";
import { dataToLS } from "../../../utils/dataToLS";
import { IwithAuthLogicProps } from "../../../types/interfaces/componentsProps/IwithAuthLogicProps";


export const withAuthLogic = ({ Component, type }: IwithAuthLogicProps) => {
  const HocComponent = React.memo(({ ...props }) => {
    // объявляем стартовый набор инпутов (попутно мемоизируем объект, чтобы не пересоздавался)
    const initialUser = useMemo(() => ({
      username: "",
      password: "",
      ...(type !== "login" && { firstName: "", secondName: "" })
    }), []);

    // задаем переменную для хранения ссылок на инпуты
    const [refs, setRefs] = useState<React.RefObject<HTMLInputElement>[] | []>([]);
    // основной объект с данными для отправки на сервер
    const [user, setUser] = useState<{[key: string]: string | null | undefined}>(initialUser);
    // флаг отправки данных на сервер
    const [shouldExecute, setShouldExecute] = useState<boolean>(false);
    // метод: авторизация/регистрация
    const apiMethod = type === "login" ? "authCreate" : "usersCreate";

    const [data, isLoading, error] = useApi(apiMethod, user, {}, shouldExecute);
    const navigate = useNavigate();

    // модальное окно
    const [mod, setMod] = useState<boolean>(false);

    useEffect(() => {
      if (shouldExecute && (data || error)) {
        setShouldExecute(false);
        if (data) {
          if (type === "login") {
            dataToLS(data);
            navigate("/wardrobe");
          } else {
            setMod(true);
          };
        };
      };
    }, [data, error, shouldExecute, navigate, initialUser]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // проверяем все инпуты на валидность
      refs.forEach(ref => {
        const curRef = ref.current;
        if(curRef){
          curRef.setCustomValidity(
            validateField(curRef.value, curRef.name)
          );
          curRef.reportValidity();
        };
      });
      // проверяем наличие всплывших окон над всеми инпутами сразу
      const sendReq = refs.every(ref => {
        return ref.current ? ref.current.reportValidity() : true;
      });
      // направляем запрос
      if (sendReq) {
        setShouldExecute(true);
      };
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUser({ ...user, [event.target.name]: event.target.value });
      // сбрасываем все всплывающие окна
      refs.forEach(ref => ref.current?.setCustomValidity(''));
    };

    return (
      <Component
        {...props}
        user={user}
        onSubmit={handleSubmit}
        onChange={handleChange}
        setRefs={setRefs}
        data={data}
        error={error}
        isLoading={isLoading}
        modal={{mod, setMod, navigate}}
      />
    );
  });

  return HocComponent;
};
