import { BrandRequestModel, UserModel } from "../../../api/data-contracts";

export interface ITextItemsListProps {
    info: BrandRequestModel | UserModel,
    type: 'brandRequest' | 'admin' | 'user',
    edit?: boolean,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}