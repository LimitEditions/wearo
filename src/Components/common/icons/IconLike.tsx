import { useState } from "react";

export type IconProps = {
    hoverColor: string;
    hoverable?: boolean;
    defaultColor?: string;
    color?: string;
    isLiked?: boolean;
    entityType: "Post" | "PostComment";
};

export const IconLike = ({ hoverColor, hoverable = true, defaultColor = "white", color, isLiked = false, entityType }: IconProps) => {

    const [isHovered, setIsHovered] = useState(false);

    const toggleHover = (value: boolean) => () => setIsHovered(value);

    const fillColor = isLiked ? color : isHovered && hoverable ? hoverColor : 'none';
    const strokeColor = isLiked ? color : entityType === 'Post' ? '#FFFFFF' : '#121212';

    return (
        <svg
            onMouseEnter={toggleHover(true)}
            onMouseLeave={toggleHover(false)}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={fillColor}
            stroke={strokeColor}
            style={{ cursor: "pointer", transition: "fill 0.2s ease-in-out, stroke 0.2s ease-in-out" }}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22 8.862C22.0034 10.4007 21.4106 11.881 20.346 12.992C17.905 15.523 15.537 18.162 13.006 20.6C12.425 21.15 11.504 21.13 10.949 20.555L3.65399 12.993C1.44899 10.707 1.44899 7.017 3.65399 4.732C4.17514 4.185 4.80193 3.74952 5.49638 3.45197C6.19084 3.15442 6.93848 3.001 7.69399 3.001C8.44951 3.001 9.19715 3.15442 9.8916 3.45197C10.5861 3.74952 11.2129 4.185 11.734 4.732L12 5.006L12.265 4.732C12.7868 4.18574 13.4137 3.7507 14.108 3.45304C14.8022 3.15539 15.5496 3.00128 16.305 3C17.825 3 19.278 3.624 20.345 4.732C21.41 5.84284 22.0032 7.32311 22 8.862Z"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
