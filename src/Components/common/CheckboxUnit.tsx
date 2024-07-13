import { Checkbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/16/solid';


export default function CheckboxUnit({
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
                className="group size-7 rounded-md bg-gray-200 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-gray-200"
                name="my-checkbox"
                >
                <CheckIcon className="hidden size-5 fill-black group-data-[checked]:block" />
            </Checkbox>
            <label htmlFor="my-checkbox" className="ml-2 text-md text-white-fon">
                {text}
            </label>
        </div>
    );
};
