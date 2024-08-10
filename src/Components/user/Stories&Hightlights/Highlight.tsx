import React, { useState } from 'react'
import { HighlightModel } from '../../../api/data-contracts'
import { Stories } from './Stories'

import { StoriesIcon } from './Hughlight/StoriesIcon';

export const Highlight = ({ highlight }: { highlight: HighlightModel}) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div>
            <StoriesIcon image={highlight.mainPhotoGuid} name={highlight.name} caller={() => setOpen(true)} />
            <Stories highlightStories={highlight.stories || []} open={open} setOpen={setOpen} />
        </div>
    );
};
