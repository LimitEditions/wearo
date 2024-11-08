import React, { useState } from "react";
import { HighlightModel } from "../../../api/data-contracts";
import { Stories } from "./Stories";

export const Highlight = ({ highlight }: { highlight: HighlightModel }) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div>
            <div
                className="flex flex-col items-centerspace-y-1"
                onClick={() => setOpen(true)}
            >
                <img
                    src={`${highlight.mainPhotoGuid}`}
                    alt={highlight.name || ""}
                    className="h-[170px] w-[130px] object-contain rounded-xl border-[1.5px] border-lightgrey"
                />
                <h3 className="text-xs">{highlight.name}</h3>
            </div>
            <Stories
                highlightStories={highlight.stories || []}
                open={open}
                setOpen={setOpen}
            />
        </div>
    );
};
