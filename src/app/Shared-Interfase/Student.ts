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
