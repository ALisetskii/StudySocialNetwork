import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../untils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControls/FormControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        {createField('Email', 'email', Input, [required])}
        {createField('Password', 'password', Input, [required],{type:'password'})}
        {createField(null, 'rememberMe', Input, [],{type:'checkbox'},'remember me')}
        {/* <Field placeholder={'Email'}
                   name={'email'}
                   component={Input}
                   validate={[required]}
            />*/}
        {/*<div>
            <Field placeholder={'Password'}
                   name={'password'}
                   component={Input}
                   type={'password'}
                   validate={[required]}
            />
        </div>*/}
        {/*<div>
            <Field component={Input}
                   name={'rememberMe'}
                   type={'checkbox'}

            /> remember me
        </div>*/}
        {error && <div className={s.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Log in</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1> LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,

});
export default connect(mapStateToProps, {login})(Login);
