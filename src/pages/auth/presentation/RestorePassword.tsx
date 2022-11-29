import {useForm} from "react-hook-form";
import style from "./Loginization.module.css";
import {Link} from "react-router-dom";

export const RestorePassword = () => {
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
            <div className={style.titleContainer}>
                <div className={style.title1}>
                    <p>Restore password</p>
                </div>
                <div className={style.title2}>
                    <Link className={style.link} to='../signin'>
                        <p>
                            Sign in
                        </p>
                    </Link>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                           placeholder={"Your email"}/>
                </div>

                <div>
                    <button className={style.buttonLogin}>Send</button>
                </div>
            </form>
        </div>
    )
}