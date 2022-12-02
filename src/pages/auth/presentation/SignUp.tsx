import {useForm} from "react-hook-form";
import style from "./Loginization.module.css"
import {Link} from "react-router-dom";
import InputName from "../components/InputName";
import InputPassword from "../components/InputPassword";
import InputEmail from "../components/InputEmail";
import React from "react";


export const SignUp = () => {
    const {register, handleSubmit} = useForm({mode: 'all',});

    const onSubmit = (data: any) => console.log(data);
    return (
        <div className={style.wrapperLogin}>
            <div className={style.titleContainer}>
                <div className={style.title1}>
                    <p>Sign Up</p>
                </div>
                <div className={style.title2}>
                    <p>
                        Already have an account?
                    </p>
                </div>
                <div className={style.title2}>
                    <Link className={style.link} to='../signin'>
                        <p>
                            Sign in
                        </p>
                    </Link>
                </div>
            </div>
            <form className={style.formStyle} onSubmit={handleSubmit(onSubmit)}>
                <InputName register={register}/>
                <InputEmail register={register}/>

                <InputPassword register={register}
                               name='password'
                               placeholder='Password'/>
                <InputPassword register={register}
                               name='confirmPassword'
                               placeholder='Confirm'/>

                <div>
                    <button className={style.buttonLogin}>Sign up</button>
                </div>

            </form>
            <div className={style.signUpTextBottom}>
                <p>
                    By signing in to your account you agree with our
                </p>
                <p>
                    <span className={style.signUpTextBottomSpan}> Privacy Policy</span>
                    and <span className={style.signUpTextBottomSpan}>Terms of Use</span>.
                </p>
            </div>
        </div>
    )
}


