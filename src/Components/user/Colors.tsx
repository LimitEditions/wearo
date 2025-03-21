import React from 'react'
import { ProductColorModel } from '../../api/data-contracts'
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';

export const Colors = ({ prodColors, selectedColor }: { prodColors: ProductColorModel[], selectedColor?: string } ) => {
    return (
        <>
            {prodColors.map(color => {
                let containerStyle;
                color.guid === selectedColor ? containerStyle = selectedColorStyle: containerStyle = colorStyle;
                return <span key={color.guid} className={getStyles(containerStyle)}>
                    {color.color?.name}
                    <span style={
                            {
                                position: 'absolute',
                                right: '0.5rem', /* 2 * 0.25rem (right-2) */
                                top: '50%',
                                borderRadius: '50%', /* rounded-full */
                                width: '1rem', /* w-4 */
                                height: '1rem', /* h-4 */
                                transform: 'translateY(-50%)', /* -translate-y-1/2 */
                                backgroundColor: `#${color.color?.hex}` /* bg-[] */
                            }
                        }>
                    </span>
                </span>
            })}
        </>
    );
};


const colorStyle: BlockStyle = {
    container: 'relative inline-block w-1/2 rounded-full',
    background: 'bg-[#f3f3f3]',
    spacing: 'p-2 mx-1'
};
  

const selectedColorStyle: BlockStyle = {
    container: 'relative inline-block w-1/2 rounded-full border-2 border-gray-900 box-border',
    background: 'bg-[#f3f3f3]',
    spacing: 'p-2 mx-1'
};