import { Link } from "react-router-dom";
import { PostModel } from "../../api/data-contracts";
import { Photo } from "../common/Photo";

export const BrandPosts = ({ brandPosts }: { brandPosts: PostModel[] }) => {
    console.log(brandPosts);
    return (
        <div className="flex flex-wrap justify-between gap-x-[12px] gap-y-[20px]">
            {brandPosts?.map((elem, ind) => {
                return (
                    <Link to={`/post/${elem.guid}`} >
                        <div key={ind} className="flex flex-col items-center">
                            <Photo
                                id={elem.fileGuid || null}
                                styles="w-[150px] h-[150px] object-cover"
                                alt="Публикация бренда"
                            />
                            <p className="text-[12px] pt-[8px] truncate w-[150px] overflow-hidden whitespace-nowrap text-ellipsis">{elem.text}</p>
                        </div>
                    </Link>  
                );
            })}
        </div>
    )
}