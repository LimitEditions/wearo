import React from "react";
import { Switch } from "@headlessui/react";

interface SwitcherProps {
    enabledSwitch: boolean;
    setEnabledSwitch: React.Dispatch<React.SetStateAction<boolean>>;
  }

export const Switcher: React.FC<SwitcherProps> = ({ enabledSwitch, setEnabledSwitch}) => {
    return (
        <Switch
            checked={enabledSwitch}
            onChange={setEnabledSwitch}
            className={`group relative flex h-7 w-14 cursor-pointer rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none ${
                enabledSwitch
                    ? "bg-violet border-white-fon"
                    : "bg-white-fon border-white"
            } border-2`}
        >
            {/* Иконка Солнца слева при включенной теме (темная тема) */}
      <span
        aria-hidden="true"
        className={`absolute left-1 top-1/2 transform -translate-y-1/2 h-5 w-5 bg-center bg-no-repeat transition-all duration-200 ${
          enabledSwitch ? "opacity-0" : "opacity-100"
        }`}
      >
        <img src="/images/sun.svg" alt="светлая тема" />
      </span>

      {/* Иконка Луны справа при выключенной теме (светлая тема) */}
      <span
        aria-hidden="true"
        className={`absolute right-1 top-1/2 transform -translate-y-1/2 h-5 w-5 bg-center bg-no-repeat transition-all duration-200 ${
          enabledSwitch ? "opacity-100" : "opacity-0"
        }`}
      >
        <img src="/images/moon.svg" alt="темная тема" />
      </span>

      {/* Кружок переключателя */}
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-5 w-5 translate-x-0 rounded-full ring-0 shadow-lg transition duration-200 ease-in-out ${
          enabledSwitch
            ? "-translate-x-0.5 -translate-y-0.5 bg-white-fon"
            : "translate-x-6 -translate-y-0.5 bg-violet"
        }`}
      />
        </Switch>
    );
};
