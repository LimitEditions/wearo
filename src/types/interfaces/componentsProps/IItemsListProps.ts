type Item = {
    title: string,
    path: string,
    photoId?: string | undefined | null,
    needPhoto?: boolean,
    alt?: string,
    photoStyles?: string,
    state?: any
}

export interface IItemsListProps {
    items: Item[],
}