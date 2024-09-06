import React, { useState } from 'react'
import { HighlightModel } from '../../../api/data-contracts'
import { Stories } from './Stories'

import { StoriesIcon } from './Hughlight/StoriesIcon';

export const Highlight = ({ highlight }: { highlight: HighlightModel}) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div>
            <StoriesIcon image={highlight.mainPhotoGuid} name={highlight.name} caller={() => setOpen(true)} />
            {
                open && <Stories close={setOpen} stories={highlight.storiesGuids as string[]}/>
            }
            {/* <Stories highlightStories={highlight.stories || []} open={open} setOpen={setOpen} /> */}
        </div>
    );
};
