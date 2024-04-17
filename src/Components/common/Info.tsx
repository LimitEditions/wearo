import React from 'react'

export const Info = ({ 
    showInfo, msg, style 
}: {
    showInfo: boolean,
    msg: string,
    style: string
}) => {
    if (!showInfo) { return null };

    return (
        <p className={style}>{msg}</p>
    );
};