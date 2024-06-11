import React, { forwardRef, useImperativeHandle, useRef } from "react";
import MaskedInput from 'react-text-mask';
import { IInputProps } from "../../../types/interfaces/componentsProps/IInputProps";

// хок для установки маски в инпут, при оборачивании теряются базовые стили инпута,
// так что необходимо задвать их по месту использования
// для рефа тоже тут дополнительная логика, чтобы пробросился от дочернего выше
const withMask = (WrappedComponent: React.ComponentType<IInputProps>) => {
    const MaskedComponent = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
        const { mask, reflink, ...rest } = props; // Извлекаем маску и реф из пропсов
        const internalRef = useRef<any>(); // Внутренний реф для MaskedInput

        // Объединяем внешний и внутренний рефы, чтобы получить доступ к настоящему HTMLInputElement
        useImperativeHandle(ref, () => internalRef.current?.inputElement);

        if (mask) {
            // Если маска присутствует, используем MaskedInput
            return (
                <MaskedInput
                    {...rest}
                    mask={mask}
                    ref={internalRef}
                />
            );
        }
        // Если маска отсутствует, используем обернутый компонент
        return <WrappedComponent {...rest} />;
    });

    MaskedComponent.displayName = `withMask(${getDisplayName(WrappedComponent)})`; // Устанавливаем displayName для удобства отладки

    return MaskedComponent;
};

// Функция для получения имени компонента
function getDisplayName(WrappedComponent: React.ComponentType<any>) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withMask;
