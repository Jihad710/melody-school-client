import { Helmet } from 'react-helmet-async';
import useAuth from '../../../components/hooks/UseAuth';

import { useQuery } from '@tanstack/react-query';
import { get } from 'react-hook-form';




const UserHome = () => {
   
    const {user} = useAuth();
    
    const { data: userm = {} } = useQuery({
        queryKey: ['userm', user?.email],
        queryFn: async () => {
          const res = await get(`/users/${user?.email}`);
          return res.data;
        },
      });


    return (
        <div>
            <Helmet>
                <title>Melody | Dashboard Home</title>
            </Helmet>
         
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={user?.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{user?.displayName}</h1>
                        <p className="py-6">Role : {userm?.role}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;