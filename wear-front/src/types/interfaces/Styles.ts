export interface BlockStyle {
    // размеры
    blockSize?: string;
    // flex/grid-стили (justify-content, align-self...)
    container?: string;
    // отступы (padding, margin)
    spacing?: string;
    // border-стили
    border?: string;
    // background
    background?: string;
    // text-стили
    text?: string;
    // Transitions and Animation
    transitionsAnimation?: string;
    // hover-эффекты
    hover?: string;
    // все @media
    media?: string;
  }