import React, { Fragment, useState } from "react";
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import { IModalProps } from "../../types/interfaces/componentsProps/IModalProps";
import { useSwipeable } from "react-swipeable";

export const Modal = ({
    isOpen,
    setIsOpen,
    title,
    children,
    additionalStyles,
    swipeable,
}: IModalProps) => {
    const [positionY, setPositionY] = useState(0); // Для отслеживания позиции по оси Y

    const handlers = useSwipeable({
        onSwiping: (eventData) => {
            setPositionY(eventData.deltaY); // Обновление позиции по мере свайпа
        },
        onSwiped: (eventData) => {
            if (eventData.deltaY > 100) {
                // Если свайп достаточно длинный, закрыть модальное окно
                setIsOpen(false);
            }
            // Ставим таймер, чтобы не видеть возврат окна в исходное положение на странице
            setTimeout(() => {
                setPositionY(0); // Сброс позиции после завершения свайпа
            }, 300);
        },
        trackMouse: true,
    });

    const modalStyle = {
        transform: `translateY(${positionY}px)`,
        transition: positionY === 0 ? "transform 0.2s ease-out" : "none",
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                onClose={() => setIsOpen(false)}
            >
                {/* анимация затемнения фона */}
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-700"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/80" />
                </TransitionChild>

                <div
                    className={
                        additionalStyles?.container
                            ? additionalStyles.container
                            : "fixed inset-0 overflow-y-auto flex min-h-full items-center justify-center p-10 text-center"
                    }
                    {...(swipeable ? handlers : {})}
                    style={modalStyle}
                >
                    {/* анимация появления и исчезновения окна */}
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-500"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <DialogPanel
                            className={
                                additionalStyles?.panel
                                    ? additionalStyles.panel
                                    : "w-full transform overflow-hidden rounded-2xl p-6 bg-white text-left align-middle shadow-xl transition-all"
                            }
                        >
                            {title && (
                                <DialogTitle
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    {title}
                                </DialogTitle>
                            )}
                            <div className="text-sm text-gray-500">
                                {children}
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    );
};