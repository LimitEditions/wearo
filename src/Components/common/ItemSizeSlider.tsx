import React, { useState } from 'react';
import ReactSlider from 'react-slider';


const ItemSizeSlider = ({ onChange, defaultValue, maxValue }: 
    { 
        onChange: (value: number) => void,
        defaultValue: number,
        maxValue: number
    }) => {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (newValue: number) => {
        setValue(newValue);
        onChange(newValue);
    };

    return (
        <div className="flex items-center mt-12 mb-6">
            <ReactSlider
                className="w-full h-1 mx-2"
                thumbClassName="h-5 w-5 bg-black rounded-full cursor-pointer transition-all duration-1000 ease-in-out transform -translate-y-1/2 focus:outline-none"
                renderTrack={(props, state) => {
                    const trackStyle = state.index === 0 ? 'h-1 bg-black rounded-sm transition-all duration-1000 ease-in-out' : 
                    'h-0.5 bg-gray-500 rounded-sm transition-all duration-1000 ease-in-out';
                    return (
                        <div
                            {...props}
                            key={state.index}
                            className={trackStyle}
                        />
                    );
                }}
                defaultValue={defaultValue}
                min={1}
                max={maxValue}
                step={1}
                onChange={handleChange}
                value={value}
            />
        </div>
    );
};

export default ItemSizeSlider;

