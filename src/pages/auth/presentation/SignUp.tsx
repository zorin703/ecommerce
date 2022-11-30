import {useForm} from "react-hook-form";
import style from "./Loginization.module.css"
import {Link} from "react-router-dom";

export const SignUp = () => {
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: {errors},
        reset,
    } = useForm({
        mode: 'all',
    });

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
                <div>
                    <input {...register('name',
                        {
                            required: "required filed",

                        })}
                           onFocus={() => {
                               clearErrors()
                           }}
                           className={style.inputStyles}
                           placeholder={"Name"}/>
                </div>

                <div>
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
                           className={style.inputStyles}
                           placeholder={"Email"}/>
                </div>

                {errors.email && <div style={{color: 'red'}}>email is incorrect</div>}
                <div>
                    <input {...register('password',
                        {
                            required: "required filed"
                        })}
                           onFocus={() => {
                               clearErrors()
                           }}
                           type="password"
                           className={style.inputStyles}
                           placeholder={"Password"}/>
                </div>
                {errors.password && <div style={{color: 'red'}}>password is incorrect</div>}
                <div>
                    <input {...register('confirmPassword',
                        {
                            required: "required filed"
                        })}
                           onFocus={() => {
                               clearErrors()
                           }}
                           type="password"
                           className={style.inputStyles}
                           placeholder={"Confirm password"}/>
                </div>
                {errors.password && <div style={{color: 'red'}}>password is incorrect</div>}

                <div>
                    <button className={style.buttonLogin}>Sign up</button>
                </div>

            </form>
            <div className={style.signUpTextBottom}>
                <p>
                    By signing in to your account you agree with our
                </p>
                <p>
                    <span className={style.signUpTextBottomSpan}> Privacy Policy</span> and <span className={style.signUpTextBottomSpan}>Terms of Use</span>.
                </p>
            </div>
        </div>
    )
}