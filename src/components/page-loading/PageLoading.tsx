import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useEffect, useState, FC } from 'react';
import styles from './PageLoading.module.scss';

const PageLoading: FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const onLoadStart = () => setIsLoading(true);
  const onLoadEnd = () => setIsLoading(false);

  useEffect(() => {
    router.events.on(`routeChangeStart`, onLoadStart);
    router.events.on(`routeChangeComplete`, onLoadEnd);
    router.events.on(`routeChangeError`, onLoadEnd);

    return () => {
      router.events.off(`routeChangeStart`, onLoadStart);
      router.events.off(`routeChangeComplete`, onLoadEnd);
      router.events.off(`routeChangeError`, onLoadEnd);
    };
  });

  return (
    <div className={classNames(styles.overlay, { [styles.show]: isLoading })} />
  );
};

export default PageLoading;
