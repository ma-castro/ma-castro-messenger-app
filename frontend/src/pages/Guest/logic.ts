import { useLocation } from 'react-router-dom';

const useLogic = () => {
  const { pathname } = useLocation();

  return {
    pathname,
  };
};

export default useLogic;
