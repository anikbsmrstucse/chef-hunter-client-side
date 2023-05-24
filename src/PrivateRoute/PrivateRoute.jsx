import React, { useContext } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContext);
    console.log(location);
    if(loading){
        return <div className='text-center' style={{height:'100vh'}}>
            <Button className='mt-5 mb-5' variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
        </div>
    }

    if(user){
        return children;
    }
    else{
        return <Navigate state={{ from: location}} to='/login' replace></Navigate>
    }
};

export default PrivateRoute;