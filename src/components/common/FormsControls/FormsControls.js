import s from './FormsControls.module.css';

const FormControl = ({ input, meta, child, ...props }) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span >{meta.error}</span>}
        </div >
    )
}


export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}


// export const FormControl = ({ input, meta, ...restProps }) => {
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={`${s.formControl} ${hasError && s.error}`}>
//             <div>
//                 <restProps.children {...restProps} {...input} {...meta} />
//             </div>
//             <div>
//                 {hasError && <span>{meta.error}</span>}
//             </div>
//         </div>
//     )
// }