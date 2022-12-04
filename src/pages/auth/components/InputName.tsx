import React from 'react';
import style from "../presentation/Loginization.module.css";
import {Controller, useFormContext, useFormState} from "react-hook-form";
import {match} from "assert";
import {nameValidation} from "./validations";

// @ts-ignore
const InputName = () => {
    const {
        control,
        formState: {errors}
    } = useFormContext();

    return (<>
        <Controller
            control={control}
            name="name"
            rules={nameValidation}
            render={({field}) => (
                <div className={style.inputStyles}>
                    <input
                        onChange={(e) => field.onChange(e)}
                        value={field.value}
                        placeholder={"Name"}/>
                </div>
            )}
        />

        <> {errors.name?.message}</>
    </>);
};

export default InputName;