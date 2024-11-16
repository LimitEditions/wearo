import React, { ReactNode } from "react";

export const AuthWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-3/4 flex flex-col max-w-80 m-auto my-48 items-center justify-center gap-10">
            <img src="/images/regLogo.svg" />
            {children}
        </div>
    );
};
