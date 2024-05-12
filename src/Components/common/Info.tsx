import React from 'react'

export const Info = ({ 
    showInfo, msg, className 
}: {
    showInfo: boolean,
    msg: string,
    className: string
}) => {
    if (!showInfo) { return null };

    return (
        <p className={className}>{msg}</p>
    );
};
