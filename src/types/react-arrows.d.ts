declare module 'react-arrows' {
  import { ComponentType } from 'react';

  interface ArrowProps {
    from: {
      direction: 'top' | 'bottom' | 'left' | 'right';
      node: () => Element | null;
      translation: [number, number];
    };
    to: {
      direction: 'top' | 'bottom' | 'left' | 'right';
      node: () => Element | null;
      translation: [number, number];
    };
    curvature?: number;
    color?: string;
    strokeWidth?: number;
  }

  export const Arrow: ComponentType<ArrowProps>;
}
