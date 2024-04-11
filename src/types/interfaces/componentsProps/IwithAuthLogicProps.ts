import { AuthModel, CreateUserModel } from "../../../api/data-contracts";

export interface IwithAuthLogicProps {
  Component: React.ComponentType<any>;
  type: "login" | "reg";
}
