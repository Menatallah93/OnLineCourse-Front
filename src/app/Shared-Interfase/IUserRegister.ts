import { TutorialType } from "./IConsulting";

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

export interface IInstructor{
    id?:string,
    name: string,
    status :number,
    phone?:string,
    email?:string
}

export interface IInstructorProfile{
    name: string,
    status :number,
    phone: string;
    email: string;
    id: string;
    subjects: string[];
}

export interface IStudentProfile{
  id:string
  name: string,
  numberofhours :number,
  phone: string;
  email: string;
  subjects: string[];
}
export interface IStudentTotorial{
  instructorName:string;
  subjectName:string;
  tutorialDatas: tutorialDatas[];


}

export interface tutorialDatas {
  subjectTutorial: string;
  tutorialType: TutorialType;
}




