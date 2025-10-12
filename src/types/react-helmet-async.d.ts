declare module 'react-helmet-async' {
  export interface HelmetProps {
    children?: React.ReactNode;
  }
  
  export const Helmet: React.FC<HelmetProps>;
  export const HelmetProvider: React.FC<{ children: React.ReactNode }>;
}