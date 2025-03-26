export interface CommentsListProps {
    entityId: string;
    updateCommentsCount: (newCount: number) => void;
    onClose: () => void;
}