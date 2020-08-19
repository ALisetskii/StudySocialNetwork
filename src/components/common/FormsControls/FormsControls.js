import React from "react";
import s from './FormControls.module.css'
import {required} from "../../../untils/validators/validators";
import {Field} from "redux-form";


/*export const Textarea = ({input,meta,...props}) => {
const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error:'')}>
            <div>
            <textarea {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span>}
</div>
)
}


export const Input = ({input,meta,...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error:'')}>
            <div>
                <input {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}*/

const FormControl = ({input, meta: {touched, error}, children, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}
/*


const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={ s.formControl + " " + (hasError ? s.error : "") }>
            <Element {...input} {...props} />
            { hasError && <span> { meta.error } </span> }
        </div>
    );
};

А потом просто его импортим в компоненту формы, вызываем как

const Textarea = Element("textarea");

и передаем

<Field component={Textarea} .../>

Все работает!)*/


export const createField = (placeholder, name, component, validators, props = {}, text = '') => {
    return <div>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validators}
               {...props}
        />{text}
    </div>
}

