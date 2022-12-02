import React from 'react';
import {useForm} from "react-hook-form";
import style from "../presentation/Loginization.module.css";

// @ts-ignore
const InputEmail = ({register}) => {
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
    return (
        <div className={style.inputStyles}>

            <input {...register('email',
                {
                    required: "required filed",
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Please enter the valid email'
                    }
                })}
                   onFocus={() => {
                       clearErrors()
                   }}
                // className={style.inputStyles}
                   placeholder={"Email"}

            />


           {errors.email && <div style={{color: 'red'}}>email is incorrect</div>}

        </div>
    );
};

export default InputEmail;