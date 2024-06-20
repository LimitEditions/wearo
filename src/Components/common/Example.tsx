import { Checkbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/16/solid';

export default function Example({
    enabled, setEnabled, text
}: {
    enabled: boolean,
    setEnabled: () => void,
    text: string
}) {
    return (
        <div className="flex items-center my-2">
            <Checkbox
                checked={enabled}
                onChange={setEnabled}
                className="group size-6 rounded-md bg-white-fon p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-white-fon"
                name="my-checkbox"
                >
                <CheckIcon className="hidden size-4 fill-black group-data-[checked]:block" />
            </Checkbox>
            <label htmlFor="my-checkbox" className="ml-2 text-md">
                {text}
            </label>
        </div>
    );
};
