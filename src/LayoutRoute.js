import React from 'react';
import AppBar from './AppBar.js';
import Footer from './Footer.js';
import { Outlet } from 'react-router-dom';


function LayoutRoute(props) {
    return (
        <React.Fragment>
         <AppBar/>
         <Outlet path={props.path} exact={props.exact} component={props.component} />
         <Footer />


        </React.Fragment>

    )
}

export default LayoutRoute;
