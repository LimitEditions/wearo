import React from "react";
import { AuthWrapper } from "../Components/authorization/AuthWrapper";
import { BlockStyle } from "../types/interfaces/IStyles";
import { Button } from "../Components/common/Button";
import getStyles from "../utils/getStyles";
import { useNavigate } from "react-router-dom";

export const Authorization = () => {
  const navigate = useNavigate();
  return (
    <AuthWrapper>
      <div className={getStyles(divStyle)}>
        <Button showButton={true} onClick={() => navigate('/login')}>Войти</Button>
        <Button showButton={true} onClick={() => navigate('/registration')}>Зарегистрироваться</Button>
      </div>
    </AuthWrapper>
  );
};

const divStyle: BlockStyle = {
  blockSize: 'w-full',
  container: 'flex flex-col',
  spacing: 'gap-3 mt-5'
};
