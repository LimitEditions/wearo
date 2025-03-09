import { useState } from "react";

type IconProps = {
    defaultColor: string;
};

export const IconComment = ({ defaultColor }: IconProps) => {

    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={defaultColor}
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: "4px" }}
        >
            <path
                d="M10 19C14.9707 19 19 14.9707 19 10C19 5.0293 14.9707 1 10 1C5.0293 1 1 5.0293 1 10C1 11.6389 1.4383 13.177 2.2042 14.5L1.45 18.55L5.5 17.7958C6.86759 18.5869 8.42006 19.0024 10 19Z"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
