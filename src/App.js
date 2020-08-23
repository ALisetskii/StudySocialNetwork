import React, {Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";

import UsersContainer from "./components/Users/UsersContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
//import ProfileContainer from "./components/Profile/ProfileContainer";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
    catchAllUnhandledErrors = (reason, promiseRejectonEvent) => {
      //  alert('some error occured')
      //  console.error(promiseRejectonEvent)
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)

    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/'
                               render={() => <Redirect to={'profile'}/>}/>

                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}/>

                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>

                        <Route path='/users'
                               render={() => <UsersContainer pageTitle={'Samurais'}/>}/>

                        <Route path='/login'
                               render={() => <LoginPage/>}/>

                        <Route path='*'
                               render={() => <div>404 NOT FOUND</div>}/>

                    </Switch>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}


let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return (
        /*<HashRouter> for github*/  /*basename={process.env.PUBLIC_URL}*/
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
            {/* </HashRouter>*/}
        </BrowserRouter>
    )
}


export default SamuraiJSApp
