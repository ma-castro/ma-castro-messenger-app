import { useCallback, useEffect, useState } from 'react';
import * as authApi from '../api/auth';
import { User } from '../models/user';
import { fetchCurrentUser } from '../redux/auth/authSlice';
import { useAppDispatch } from '../redux/hooks';

const useMe = () => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState<boolean>(true);
  const [me, setMe] = useState<User | null>();

  const fetchAUthUser = useCallback(async () => {
    const { data } = await authApi.me();
    setMe(data.user);
    dispatch(fetchCurrentUser({ user: data.user }));
  }, [dispatch]);

  useEffect(() => {
    fetchAUthUser().catch((err: string) => new Error(err));
    setLoading(false);
  }, [fetchAUthUser]);

  return {
    me,
    loading,
  };
};

export default useMe;
