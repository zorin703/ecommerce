import React, {useState} from 'react';
import style from "../presentation/Loginization.module.css";
import {Controller, Field, useForm, useFormContext} from "react-hook-form";
import {FiEye, FiEyeOff} from "react-icons/fi";


// @ts-ignore
const InputPassword = (props) => {
    const [show, setShow] = useState(false)
    const {
        control,
        formState: {errors}
    } = useFormContext();

    return (<>
        <Controller
            control={control}
            name={props.name}
            render={({field}) => (<div className={style.inputStyles}>
                    <input
                        onChange={(e) => field.onChange(e)}
                        value={field.value || ''}
                        type={show ? "text" : "password"}
                        placeholder={props.placeholder}
                    />
                    <div className={style.iconInInputPassword} onClick={() => setShow(!show)}>
                        {show && <FiEye/>}
                        {!show && <FiEyeOff/>}
                    </div>
                </div>
            )}
        />
        <> {errors.password?.message}</>
    </>);
}

export default InputPassword;