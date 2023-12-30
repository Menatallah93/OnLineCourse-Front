import { Appointment } from "./InstructorSubject";

export interface IInstructor{
    name: string,
    status :number,
}

export interface IInstructorDTO{
    name: string,
    instructorID:string,
    status :number,
    appointments:Appointment[],
    subjects?:string[]
}