import React from 'react';
import style from "../presentation/Loginization.module.css";
import {useForm} from "react-hook-form";

// @ts-ignore
const InputName = ({register}) => {
    const {

        handleSubmit,
        setError,
        clearErrors,
        formState: {errors},
        reset,
    } = useForm({
        mode: 'all',
    });
    return (
        <div className={style.inputStyles}>
            <input
                {...register('name',
                    {
                        required: "required filed",
                    })}
                onFocus={() => {
                    clearErrors()
                }}
                // className={style.inputStyles}
                placeholder={"Name"}/>
        </div>
    );
};


export default InputName;