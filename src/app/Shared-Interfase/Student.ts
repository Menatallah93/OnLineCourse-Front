import { Appointment } from "./InstructorSubject";

export interface StudentRequest{
    grade:string,
    subjectName:string,
    subjectId:number,
    studentId:string,
    numberOfHouers:number,
    instructorId:string,
    appoinstments:Appointment[]
}

export interface IUniveristyStudentRequest{
    id:number,
    name:string,
    studentID:string,
    description:string,
    file:string
}
export interface IAllUniveristyStudentRequest{
    studentId:string,
    studentName:string,
    phone:string
    univeristyRequest:IUniveristyStudentRequest
}
