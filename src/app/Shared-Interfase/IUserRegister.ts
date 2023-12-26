export interface IUserRegister{
    id?: number,
    name:string,
    userName: string,
    email :string,
    phone :string,
    password :string,
    role : string
}

export interface ILogin{
    userName: string,
    password :string,
}


export interface IInstructorProfile{
    name: string,
    status :number,
    phone: string;
    email: string;
    id: string;
    subjects: string[];
}




