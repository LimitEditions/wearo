import { BlockStyle } from "../types/interfaces/IStyles";

export default function getStyles (styles: BlockStyle, classList: string[] = []): string {
    const styleValues = Object.values(styles).filter(value => value !== undefined);
    return styleValues.concat(classList).join(' ');
};