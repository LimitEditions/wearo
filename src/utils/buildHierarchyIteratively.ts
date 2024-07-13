import { ProductCategoryModel } from "../api/data-contracts";
import { Category } from "../types/interfaces/ICategories";


/**
 * Функция для построения иерархии категорий из плоского списка
 * @param categories - список категорий в формате ProductCategoryModel
 * @returns - массив категорий с вложенной иерархией
 */
export const buildHierarchyIteratively = (categories: ProductCategoryModel[]): Category[] => {
    const categoryMap = new Map<string, Category>();
    const roots: Category[] = [];

    // Создаем карту категорий для быстрого доступа по guid и инициализируем структуру
    categories.forEach(cat => {
        if (cat.name && cat.guid) {
            categoryMap.set(cat.guid, {
                title: {
                    name: cat.name,
                    guid: cat.guid,
                },
                subcategories: [],
                leafCategoryStates: []
            });
        }
    });

    // Строим иерархию, связывая родительские и дочерние категории
    categories.forEach(cat => {
        if (cat.name && cat.guid) {
            const category = categoryMap.get(cat.guid);
            if (cat.parentCategoryGuid === null || cat.parentCategoryGuid === undefined) {
                // Если это корневая категория, добавляем ее в список корневых элементов
                if (category) roots.push(category);
            } else {
                // Иначе, добавляем ее в дочерние категории соответствующей родительской категории
                const parentCategory = categoryMap.get(cat.parentCategoryGuid);
                if (parentCategory && category) {
                    parentCategory.subcategories.push(category);
                };
            };
        };
    });

    // Преобразуем листовые категории в объекты { [key: string]: boolean }
    categories.forEach(cat => {
        if (cat.name && cat.guid) {
            const category = categoryMap.get(cat.guid);
            if (category && category.subcategories.length === 0) {
                const parentCategory = categoryMap.get(cat.parentCategoryGuid ?? '');
                if (parentCategory) {
                    parentCategory.leafCategoryStates.push({ [cat.name]: { id: cat.guid, status: false } });
                };
            };
        };
    });

    return roots;
};