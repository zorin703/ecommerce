import {useForm} from "react-hook-form";

export const SignIn = () => {
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
            <h1>Login</h1>
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
                           placeholder={"Password"}/>
                </div>
                {errors.password && <div style={{color: 'red'}}>password is incorrect</div>}

                <div>
                    <input type="submit"/>
                </div>

            </form>
        </div>
    )
}