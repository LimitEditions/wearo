import React from "react";
import { SectionsTitle } from "../common/SectionsTitle";
import { AdminsList } from "./AdminsList";
import { Button } from "../common/Button";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../api/data-contracts";

export const AllAdmins = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/options/addadmin");
  };

  return (
    <>
      <SectionsTitle title="Администраторы" needsClose={false}/>
      <AdminsList />
      <div className={getStyles(divStyle)}>
        <Button showButton={true} onClick={handleClick}>
          Добавить администратора
        </Button>
      </div>
    </>
  );
};

const divStyle: BlockStyle = {
  blockSize: "w-3/4 max-w-96",
  spacing: "m-auto",
};
