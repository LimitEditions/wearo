import React from "react";
import { Switch } from "@headlessui/react";

export const Switcher = ({
    enabledSwitch,
    setEnabledSwitch,
}: {
    enabledSwitch: boolean;
    setEnabledSwitch: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <Switch
            checked={enabledSwitch}
            onChange={setEnabledSwitch}
            className={`group relative flex h-7 w-14 cursor-pointer rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none ${
                enabledSwitch
                    ? "bg-violet border-white-fon"
                    : "bg-white-fon border-violet"
            } border-2`}
        >
            <span
                aria-hidden="true"
                className="absolute left-1 top-1/2 transform -translate-y-1/2 h-5 w-5 bg-center bg-no-repeat"
            >
                <img src="/images/sun.svg" alt="светлая тема" />
            </span>
            <span
                aria-hidden="true"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-5 w-5 bg-center bg-no-repeat"
            >
                <img src="/images/moon.svg" alt="светлая тема" />
            </span>

            <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-5 w-5 translate-x-0 rounded-full ring-0 shadow-lg transition duration-200 ease-in-out ${
                    enabledSwitch
                        ? "translate-x-6 -translate-y-0.5 bg-white-fon"
                        : "-translate-y-0.5 bg-violet"
                }`}
            />
        </Switch>
    );
};
