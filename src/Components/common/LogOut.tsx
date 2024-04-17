import React from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { BlockStyle } from "../../types/interfaces/IStyles";

export const LogOut: React.FC<{ show: boolean }> = ({ show }) => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate('/login');
};

return (
    <Button
    showButton={show}
    onClick={logOut}
    styles={logOutStyle}>Выйти</Button>
);
};

const logOutStyle: BlockStyle = {};
