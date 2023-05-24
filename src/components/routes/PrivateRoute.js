import React, { useContext } from 'react';
import { AuthContext } from '../../contextAPI/Context';
import { Navigate, useLocation } from 'react-router-dom';
import './PrivateRouteStyle.css' ;

const PrivateRoute = ({children}) => {
    
    const {user,loadData} = useContext(AuthContext)
    const location = useLocation()


    if(loadData === true){
        // spinner form readymade site www.loading.io 
        return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    }
    if(!user){
        return <Navigate to='/signIn' state={{from:location}} replace></Navigate>
    }else{
       return children ;
    }

};

export default PrivateRoute;



// problem not solv in redirect . redirect work in double login 