import {SubmitHandler, useForm} from "react-hook-form";
import style from "./Loginization.module.css"
import {Link} from "react-router-dom";
import InputName from "../components/InputName";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import {ILoginField} from "../login.interface";

export const SignIn = () => {
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: {errors},
        reset,
    } = useForm<ILoginField>({
        mode: 'all',

    });

    const onSubmit: SubmitHandler<ILoginField>= (data) => console.log(data);
    return (
        <div className={style.wrapperLogin}>
            <div className={style.titleContainer}>
                <div className={style.title1}>
                    <p>Sign In</p>
                </div>
                <div className={style.title2}>
                    <p>
                        Don’t have an account?
                    </p>
                </div>
                <div className={style.title2}>
                    <Link className={style.link} to='../signup'>
                        <p>
                            Sign up
                        </p>
                    </Link>
                </div>
            </div>
            <form className={style.formStyle} onSubmit={handleSubmit(onSubmit)}>
                <InputEmail register={register}/>
                <InputPassword register={register}
                               name='password'
                               placeholder='Password'/>
                <div>
                    <button className={style.buttonLogin}>Login</button>
                </div>
            </form>
            <div>
                <Link className={style.linkBottom} to={'../restorepassword'}>
                    <p>
                        Lost your password?
                    </p>
                </Link>
            </div>
        </div>
    )
}