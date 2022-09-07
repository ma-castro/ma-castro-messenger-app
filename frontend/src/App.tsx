import { useMeQuery } from 'modules/redux/auth/authApi';
import React, { useEffect, useRef } from 'react';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';
import Guest from './pages/Guest';
import Main from './pages/Main';

const App: React.FC = () => {
  const { data, isLoading } = useMeQuery();
  const loaderRef = useRef<LoadingBarRef>(null);

  useEffect(() => {
    if (!isLoading) {
      if (loaderRef.current) {
        loaderRef.current.complete();
      }
    } else {
      loaderRef.current?.continuousStart();
    }
  }, [isLoading]);

  return (
    <>
      <LoadingBar ref={loaderRef} />
      {data ? <Main /> : <Guest />}
    </>
  );
};

export default App;
