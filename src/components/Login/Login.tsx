import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControls/FormControls.module.css'
import {AppStateType} from "../../redux/redux-store";

type LoginFormOwnProps ={
    captchaUrl:string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType,LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}>
        {createField<LoginFormValuesTypeKeys>('Email', 'email', Input, [required])}
        {createField<LoginFormValuesTypeKeys>('Password', 'password', Input, [required], {type: 'password'})}
        {createField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', Input, [], {type: 'checkbox'}, 'remember me')}

        {captchaUrl && <img src={captchaUrl}/>}
        {captchaUrl && createField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', Input, [required])}
        {error && <div className={s.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Log in</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

type MapStatePropsType={
    captchaUrl:string | null
    isAuth:boolean
}
type MapDispatchPropsType={
    login:(email:string, password:string, rememberMe:boolean, captcha:string) => void
}

type LoginFormValuesType={
    email:string, password:string, rememberMe:boolean, captcha:string
}

type LoginFormValuesTypeKeys =Extract<keyof LoginFormValuesType, string>



const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData:LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1> LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state:AppStateType):MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});
export default connect(mapStateToProps, {login})(Login);
