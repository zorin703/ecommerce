import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import style from "../presentation/Loginization.module.css";
import {emailValidation} from "./validations";

// @ts-ignore
const InputEmail = () => {
    const {
        control,
        formState: {errors}
    } = useFormContext();
    // @ts-ignore
    return (<>
            <Controller
                control={control}
                name="email"
                rules={emailValidation}
                render={({field}) => (
                    <div className={style.inputStyles}>
                        <input
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            placeholder={"Email"}/>
                    </div>
                )}
            />
            <> {errors.email?.message}</>
        </>
    )
};

export default InputEmail;