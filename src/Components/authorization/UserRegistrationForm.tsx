import React from 'react'
import { IFormData } from '../../types/interfaces/componentsProps/IInputsListProps'
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';
import { InputsList } from '../common/InputsList';
import { Button } from '../common/Button';

export const UserRegistrationForm = ({onSubmit, formData}: {onSubmit: () => void, formData: IFormData[]}) => {
  return (
    <div>
        <h1 className={getStyles(hStyle)}>Регистрация</h1>
        <form className={getStyles(formStyle)} onSubmit={onSubmit}>
          <InputsList formData={formData} />
          <Button showButton={true} type={"submit"}>Зарегистироваться</Button>
        </form>
      </div>
  )
}

const hStyle: BlockStyle = {
    text: "text-center text-2xl",
    spacing: "pb-4",
  };

  const formStyle: BlockStyle = {
    container: `flex flex-col gap-3`,
  };