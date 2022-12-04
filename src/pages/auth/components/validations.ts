export const nameValidation = {
    required: "Enter name",
    validate: (value: string) => {
        if (value.match(/[А-Яа-я]/)) {
            return "Enter latin symbols or numbers"
        }
        if(value.length < 6) {
            return "Too small"
        }

    }
}

export const passwordValidation = {
    required: "Enter password",
    validate: (value: string) => {
        if(value.length < 6) {
            return "Too small"
        }

    }
}

export const emailValidation = {
    required: "Enter email",
    validate: (value: string) => {
       if (value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return "Please enter the valid email"
        }

    }
}