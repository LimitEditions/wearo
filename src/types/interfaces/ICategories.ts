export type Category = {
    title: {
        name: string;
        guid: string;
    };
    subcategories: Category[];
    leafCategoryStates: { [key: string]: {
        id: string,
        status: boolean    
    } }[];
};