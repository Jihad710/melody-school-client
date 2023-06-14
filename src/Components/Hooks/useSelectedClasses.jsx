import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './UseAuth';

const useSelectedClasses = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const {  data: selectedClasses = [], refetch,} = useQuery(['users', user?.email], async () => {
        const res = await axiosSecure.get(`/selectedClasses/${user?.email}`);
        return res.data;
    });
    return [selectedClasses,refetch  ]
};

export default useSelectedClasses;