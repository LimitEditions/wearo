import React from "react";
import { Photo } from "./Photo";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";

export const AvatarAndName = ({
  photoId,
  name,
}: {
  photoId: string | null | undefined;
  name: string | null | undefined;
}) => {
  return (
    <>
      <div className={getStyles(divStyle)}>
        <Photo id={photoId} styles={getStyles(imgStyle)} />
        <span>{name ? name : "Имя не указано"}</span>
      </div>
    </>
  );
};

const divStyle: BlockStyle = {
    container: 'flex gap-4 items-center',
    spacing: 'px-2 py-4'
}

const imgStyle: BlockStyle = {
  blockSize: "w-12 h-12 object-cover",
  border: "rounded-3xl",
};
