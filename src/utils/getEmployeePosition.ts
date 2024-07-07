import { UserType } from "../api/data-contracts";

export function getEmployeePosition(userType: UserType): string {
    let position;
    switch (userType) {
        case "Admin":
            position = "Администратор";
            break;
        case "BrandSeller":
            position = "Продавец";
            break;
        case "BrandAdmin":
            position = "Администратор бренда";
            break;
        default:
            position = "Сотрудник";
    }
    return position;
}
