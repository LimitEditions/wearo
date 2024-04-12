import React, { useEffect } from "react";
import useApi from "./useApi";
import { IUniqueUsername } from "../types/interfaces/IUniqueUsername";


export const useUniqueUsername = (
    username: string | undefined,
    shouldExecuteUser: boolean, 
    setShouldExecuteUser: (execute: boolean) => void 
): IUniqueUsername => {
    const [userData, isLoadingUser, userError] = useApi(
      "usersCheckDetail",
      username,
      {},
      shouldExecuteUser
    );
  
    useEffect(() => {
      if (shouldExecuteUser && (typeof userData === "boolean" || userError)) {
        setShouldExecuteUser(false);
      };
    }, [userData, userError, shouldExecuteUser, setShouldExecuteUser]);
  
    return { userData, isLoadingUser, userError };
};
