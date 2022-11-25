import {useForm} from "react-hook-form";

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
            <h1>Restore password</h1>
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
                           placeholder={"Your email"}/>
                </div>

                <div>
                    <button>Send</button>
                </div>

            </form>
        </div>
    )
}