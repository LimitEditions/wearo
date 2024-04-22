type Item = {
    title: string,
    path: string,
    photoId?: string | undefined | null,
    needPhoto?: boolean,
    photoStyles?: string
}

export interface IItemsListProps {
    items: Item[],
}