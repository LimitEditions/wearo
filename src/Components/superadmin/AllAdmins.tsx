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

  const admins = [
    {
      guid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      isDeleted: false,
      createDT: "2024-04-12T08:58:00.063Z",
      updateDT: "2024-04-12T08:58:00.063Z",
      username: "alex",
      firstName: null,
      secondName: null,
      type: UserType.Admin,
    },
    {
      guid: "3fa85f64-5717-4562-b3fc-2c963f66afa7",
      isDeleted: false,
      createDT: "2024-04-12T08:58:00.063Z",
      updateDT: "2024-04-12T08:58:00.063Z",
      username: "anna",
      firstName: "Анна",
      secondName: "Иванова",
      type: UserType.Admin,
    },
    {
      guid: "3fa85f64-5717-4562-b3fc-2c963f66afa8",
      isDeleted: true,
      createDT: "2024-04-12T08:58:00.063Z",
      updateDT: "2024-04-12T08:58:00.063Z",
      username: "string",
      firstName: "string",
      secondName: "string",
      type: UserType.Admin,
    },
  ];
  return (
    <>
      <SectionsTitle title="Администраторы" needsClose={false} />
      <AdminsList admins={admins}/>
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
