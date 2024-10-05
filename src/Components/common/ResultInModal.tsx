import React from "react";


// Контент, сообщающий об успехе какого-то действия, который передается в модальное окно
export const ResultInModal = ({message, imgPath}: {message: string, imgPath: string}) => {
    return (
        <>
            {/* здесь нужен tabIndex, так как внутри модалки не оказывается ни единого фокусируемого дом-элемента
            и в консоль падает "There are no focusable elements inside the <FocusTrap />" */}
            <div className='bg-white w-3/4 max-w-96 flex flex-col items-center gap-3 m-auto py-5' tabIndex={0}>
                <img src={imgPath} alt="галочка/восклицательный знак" className="animate-bounce"/>
                <h3 className='text-center text-base text-custom-blue'>{message}</h3>
            </div>
        </>
    );
};
