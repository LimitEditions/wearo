import React from "react";
import { IFormData } from "../../types/interfaces/componentsProps/IInputsListProps";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";
import { InputsList } from "../common/InputsList";
import { Button } from "../common/Button";

export const AuthForm = ({
  onSubmit,
  formData,
  type,
}: {
  onSubmit: () => void;
  formData: IFormData[];
  type: "reg" | "createAdmin" | "login";
}) => {
    // определяем стили в зависимости от типа
  const formStyle = type === "reg" ? formRegStyle : formCreateStyle;
  return (
    <>
      {type === "reg" && <h1 className={getStyles(hStyle)}>Регистрация</h1>}
      <form className={getStyles(formStyle)} onSubmit={onSubmit}>
        {/* Если это форма создания админа, то нужно добавить в label текст */}
        <InputsList formData={formData} needLabel={type === "createAdmin"} />
        {type === "createAdmin" ? (
          <div className={getStyles(divStyle)}>
            <Button showButton={true} type={"submit"}>
              Добавить администратора
            </Button>
          </div>
        ) : (
          <Button showButton={true} type={"submit"}>
            Зарегистироваться
          </Button>
        )}
      </form>
    </>
  );
};

const hStyle: BlockStyle = {
  text: "text-center text-2xl",
  spacing: "pb-4",
};

const formRegStyle: BlockStyle = {
  container: `flex flex-col gap-3`,
};

const formCreateStyle: BlockStyle = {
  container: `flex flex-col gap-3`,
  background: "bg-gray-100",
  spacing: "px-2 py-4",
};

const divStyle: BlockStyle = {
  blockSize: "w-9/12 max-w-screen-sm",
  spacing: "m-auto my-10",
};
