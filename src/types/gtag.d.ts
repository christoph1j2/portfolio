// Type definitions for Google Analytics gtag
interface Window {
  gtag?: (
    command: string,
    action: string,
    params: {
      event_category?: string;
      event_label?: string;
      value?: number;
      [key: string]: string | number | boolean | undefined;
    }
  ) => void;
}
