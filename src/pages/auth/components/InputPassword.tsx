import React, {useState} from 'react';
import style from "../presentation/Loginization.module.css";
import {Field, useForm} from "react-hook-form";
import {FiEye, FiEyeOff} from "react-icons/fi";

// @ts-ignore
const InputPassword = ({register, ...props}) => {
    const [show, setShow] = useState(false)
    const {
        handleSubmit,
        setError,
        clearErrors,
        formState: {errors},
        reset,
    } = useForm({
        mode: 'all',
    });
    // @ts-ignore
    return (<div className={style.inputStyles}>
            <input {...register(props.name,
                {
                    required: "required filed"
                })}
                   onFocus={() => {
                       clearErrors()
                   }}
                   type={show ? "text" : "password"}
                   placeholder={props.placeholder}
            />
            <div className={style.iconInInputPassword} onClick={() => setShow(!show)}>
                {show && <FiEye/>}
                {!show && <FiEyeOff/>}
            </div>


            {errors?.password && <div style={{color: 'red'}}>password is incorrect</div>}
        </div>
    );
};

export default InputPassword;