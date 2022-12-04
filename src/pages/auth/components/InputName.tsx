import React from 'react';
import style from "../presentation/Loginization.module.css";
import {useFormContext} from "react-hook-form";

// @ts-ignore
const InputName = () => {
    const {
        register,
        formState: {errors}
    } = useFormContext();




    return (<>

            <div className={style.inputStyles}>
                <input
                    {...register('name',
                        {
                            required: true
                        })}

                    placeholder={"Name"}/>

            </div>
            {errors.name && <div>Enter Name</div>}
        </>

    );
};

export default InputName;