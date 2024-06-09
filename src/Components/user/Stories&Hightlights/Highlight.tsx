import React, { useState } from 'react'
import { HighlightModel } from '../../../api/data-contracts'
import { Stories } from './Stories'


export const Highlight = ({ highlight }: { highlight: HighlightModel}) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div>
            <div className='flex flex-col items-center space-y-1' onClick={() => setOpen(true)}>
                <img src={`${highlight.mainPhotoGuid}`} alt={highlight.name || ''} className='h-14 w-14 object-contain rounded-full border-2 border-black'/>
                <h3 className='text-xs'>{highlight.name}</h3>
            </div>
            <Stories highlightStories={highlight.stories || []} open={open} setOpen={setOpen} />
        </div>
    );
};
