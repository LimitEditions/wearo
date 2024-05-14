import { BrandRequestModel, UserModel } from "../../../api/data-contracts";

export interface ITextItemsListProps {
    info: BrandRequestModel | UserModel,
    type: 'brandRequest' | 'admin' | 'user'
}