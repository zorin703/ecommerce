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
        <div>
            <div>
                <h1>Sign Up</h1>
            </div>
            <div>
                <p>
                    Already have an account?
                </p>
            </div>
            <div>
                <Link to='../signin'>
                    <p>
                        Sign in
                    </p>
                </Link>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                           className={style.inputStyles}
                           placeholder={"Password"}/>
                </div>
                {errors.password && <div style={{color: 'red'}}>password is incorrect</div>}
                <div>
                    <input {...register('password',
                        {
                            required: "required filed"
                        })}
                           onFocus={() => {
                               clearErrors()
                           }}
                           className={style.inputStyles}
                           placeholder={"Confirm password"}/>
                </div>
                {errors.password && <div style={{color: 'red'}}>password is incorrect</div>}

                <div>
                    <button className={style.buttonLogin}>Sign up</button>
                </div>

            </form>
        </div>
    )
}