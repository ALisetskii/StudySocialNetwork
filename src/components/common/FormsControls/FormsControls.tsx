import React from "react";
import s from './FormControls.module.css'
import {FieldValidatorType} from "../../../utils/validators/validators";
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";


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

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
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


export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
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



export function createField<FormKeysType extends string> (placeholder: string | undefined,
                            name: FormKeysType,
                            component: React.FC<WrappedFieldProps>,
                            validators: Array<FieldValidatorType>,
                            props = {}, text = '')  {
    return <div>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validators}
               {...props}
        />{text}
    </div>
}

