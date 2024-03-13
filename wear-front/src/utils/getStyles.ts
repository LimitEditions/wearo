import { BlockStyle } from "../types/interfaces/Styles";

export default function getStyles (styles: BlockStyle): string {
    const styleValues = Object.values(styles).filter(value => value !== undefined);
    return styleValues.join(' ');
};