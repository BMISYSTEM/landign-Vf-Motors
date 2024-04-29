export interface Login {
    succes: string;
}
export interface Error {
    error: string;
}

export interface Errors {
    message: string;
    errors:  ErrorsClass;
}

export interface ErrorsClass {
    email:    string[];
    password: string[];
}
