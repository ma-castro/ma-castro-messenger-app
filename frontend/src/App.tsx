import React, { useEffect, useRef } from 'react';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';
import useMe from './modules/hooks/useMe';

const App: React.FC = () => {
  const { loading, me } = useMe();
  const loaderRef = useRef<LoadingBarRef>(null);

  useEffect(() => {
    if (loading) {
      if (loaderRef.current) {
        loaderRef.current.complete();
      }
    } else {
      loaderRef.current?.continuousStart();
    }
  }, [loading]);

  if (loading && !me) return <LoadingBar ref={loaderRef} />;

  return <div>App</div>;
};

export default App;
