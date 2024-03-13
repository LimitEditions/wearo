import { BlockStyle } from "../types/interfaces/IStyles";

export default function getStyles (styles: BlockStyle): string {
    const styleValues = Object.values(styles).filter(value => value !== undefined);
    return styleValues.join(' ');
};