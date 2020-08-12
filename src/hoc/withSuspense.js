import React, {Suspense} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Preloader from "../components/common/Preloader/Preloader";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withSuspense = (Component) => {


    return (props)=>{
        return <Suspense fallback={<div><Preloader /></div>}>
        <Component {...props}/>
        </Suspense>
    }

}
