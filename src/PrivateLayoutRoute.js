import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AppBar from './AppBar.js';
import Footer from './Footer.js';
import { UserContext } from './UserContext.js';

function PrivateLayoutRoute(props) {

    var { loggedIn } = useContext( UserContext )

    if (loggedIn) { 
        return (
            <React.Fragment>

                <AppBar/>
                <Outlet 
                    path={props.path} 
                    exact={props.exact} 
                    component={props.component}
                />
                <Footer />

            </React.Fragment>
        )
    } else {
        return (
            <Navigate to="/login"/>
        )
    }
}

export default PrivateLayoutRoute;