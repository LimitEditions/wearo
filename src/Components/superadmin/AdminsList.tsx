import React from "react";
import { UserModel } from "../../api/data-contracts";
import { EmployeeItem } from "../common/EmployeeItem";

export const AdminsList = ({ admins }: { admins: UserModel[] }) => {
  console.log(admins);

  return (
    <>
      {admins.map((el) => {
        if (!el.isDeleted) {
            return <EmployeeItem key={el.guid} firstName={el.firstName} id={el.guid} />
        }
      })}
    </>
  );
};
