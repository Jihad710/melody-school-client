

import axios from 'axios';
import useAuth from './useAuth';

import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const { user, loading } = useAuth();
    

    const { data: isAdmin = [], isLoading: isAdminLoading } = useQuery({
      queryKey: ["isAdmin", user?.email],
      enabled: !!user?.email  && !loading,
      queryFn: async () => {
        const res = await axios.get(`http://localhost:5000/users/admin/${user?.email}`);
        return res.data.admin;
      },
      
    },
        
        
    )
    console.log(isAdmin)
      return [isAdmin, isAdminLoading];
    
};

export default useAdmin;