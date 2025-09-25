import React, { useState, useCallback } from 'react';
import styles from './ImageWithLoader.module.css';

export interface ImageWithLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  wrapperClassName,
  className,
  onLoad,
  onError,
  loading = 'lazy',
  ...imgProps
}) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleLoad = useCallback<NonNullable<typeof onLoad>>((e) => {
    setLoaded(true);
    onLoad?.(e);
  }, [onLoad]);

  const handleError = useCallback<NonNullable<typeof onError>>((e) => {
    setFailed(true);
    onError?.(e);
  }, [onError]);

  return (
    <div className={`${styles.wrapper} ${wrapperClassName ?? ''}`.trim()}>
      {!loaded && (
        <div className={styles.placeholder} aria-busy="true" aria-label="Načítání obrázku">
          <div className={styles.spinner} />
        </div>
      )}
      <img
        {...imgProps}
        className={`${styles.img} ${className ?? ''}`.trim()}
        onLoad={handleLoad}
        onError={handleError}
        loading={loading}
        aria-hidden={!loaded && !failed}
      />
    </div>
  );
};

export default ImageWithLoader;