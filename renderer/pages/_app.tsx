import React from 'react';
import { useRouter } from 'next/router';

import type { AppProps } from 'next/app';

import '../styles/globals.css';
import Loader from '../components/Loader';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return (
    pageLoading 
      ? <Loader/>
      : <Component {...pageProps} />
  );
}

export default MyApp;
