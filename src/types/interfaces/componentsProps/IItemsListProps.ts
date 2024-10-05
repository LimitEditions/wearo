export type Item = {
    name: string,
    path: string,
    photoId?: string | null,
    needPhoto?: boolean,
    alt?: string,
    photoStyles?: string
}

export interface IItemsListProps {
    items: Item[] | [],
}