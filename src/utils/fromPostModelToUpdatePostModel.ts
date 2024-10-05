import { PostModel, UpdatePostModel } from "../api/data-contracts";


// конвертер для очистки пост-модели от ненужных полей перед отправкой put-запроса
export const fromPostModelToUpdatePostModel = (post: PostModel): UpdatePostModel => {
    const updatedData: UpdatePostModel = {
        guid: post.guid ?? '',
        brandGuid: post.brandGuid ?? '',
        text: post.text ?? '',
        fileGuid: post.fileGuid ?? null,
        collectionGuid: post.collectionGuid ?? null,
        lookGuid: post.lookGuid ?? null,
        tipGuid: post.tipGuid ?? null,
        promoGuid: post.promoGuid ?? null,
    };

    return updatedData;
};
