import { useState, useEffect } from "react";

export const useImage = (image?: string | null) => {
  const [ src, setSrc ] = useState<null | string>(null)

  useEffect(() => {
    if (!image) return;

    const img = new Image();

    img.onload = () => {
      setSrc(image as string)
    }

    img.src = image;
  }, [image])

  return src
}