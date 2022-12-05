import {FormProvider, useForm} from "react-hook-form";
import style from "./Loginization.module.css"
import {Link} from "react-router-dom";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import {yupResolver} from "@hookform/resolvers/yup";
import {schema} from "../components/validations";

export const SignIn = () => {
    const methods = useForm({resolver: yupResolver(schema)});

    const onSubmit = (data: any) => console.log(data);
    // @ts-ignore
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
            <FormProvider {...methods} >
                <form className={style.formStyle} onSubmit={methods.handleSubmit(onSubmit)}>
                    <InputEmail/>
                    <InputPassword name='password'
                                   placeholder='Password'/>
                    <button className={style.buttonLogin}>Login</button>
                </form>
            </FormProvider>
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